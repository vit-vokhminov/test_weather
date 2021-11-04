import React from 'react';
import { API } from '../api/api';
import { MainCard } from '../components/';
import { deleteCity } from '../redux/appReducer';
import { useSelector } from 'react-redux';

function Main() {
    const { cities } = useSelector((store) => store.appReducer);
    const [cityArr, setCityArr] = React.useState(null);

    React.useEffect(() => {
        const citiesId = cities.map((elem) => elem.id);
        API.getWeather(citiesId)
            .then((response) => {
                if (response) {
                    setCityArr(response);
                } else {
                    throw new Error('Ошибка на сервере');
                }
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, [cities]);

    const removeCity = (id) => {
        deleteCity(id);
        const newcityArr = cityArr.filter((elem) => elem.id !== id);
        setCityArr(newcityArr);
    };

    const cardsElem = () => {
        if (cities.length) {
            return cityArr.map((elem, index) => {
                let day = {
                    cityName: cities[index].name,
                    id: elem.id,
                    iconUrl:
                        'http://openweathermap.org/img/w/' +
                        elem.weather[0].icon +
                        '.png',
                    temperature: Math.round(elem.main.temp - 273),
                    disclaimer: elem.weather[0]['description'],
                    href: `/forecas/${elem.id}/${cities[index].name}`,
                    removeCity: removeCity,
                };

                return <MainCard key={index} day={day} />;
            });
        }
    };

    if (!cityArr) {
        return <span>Загрузка...</span>;
    }

    return <div className='pricing-table row'>{cardsElem()}</div>;
}

export default Main;
