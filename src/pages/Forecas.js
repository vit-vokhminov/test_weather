import React from 'react';
import { API } from '../api/api';
import { ForecastCard } from '../components';
import { useParams } from 'react-router-dom';

import dataDay from '../utilities/dataDay';

function Forecas() {
    const { id, city } = useParams();
    const [weatherArr, setWeatherArr] = React.useState(null);

    React.useEffect(() => {
        API.getForecas(id)
            .then((response) => {
                if (response) {
                    setWeatherArr(response);
                } else {
                    throw new Error('Ошибка на сервере');
                }
            }).catch((err) => {
                console.error(err.message);
            });
    }, [id]);

    const cardsElem = () => {
        return weatherArr.map((elemDay, index) => {
            let dataDay_ = dataDay(index);
            let day = {
                weekday: dataDay_.weekday,
                data: dataDay_.data,
                temperature: Math.round(elemDay.main.temp - 273),
                disclaimer: elemDay.weather[0]['description'],
                iconUrl:
                    'http://openweathermap.org/img/w/' +
                    elemDay.weather[0].icon +
                    '.png',
            };

            return <ForecastCard day={day} key={index} />;
        });
    };

    if (!weatherArr) {
        return <span>Загрузка</span>;
    }
    return (
        <div>
            <h4>Погода в {city}</h4>
            <div className='pricing-table row'>{cardsElem()}</div>
        </div>
    );
}

export default Forecas;
