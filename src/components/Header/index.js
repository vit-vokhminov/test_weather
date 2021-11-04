import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cx from 'classnames'

import GoMainLink from '../GoMainLink';
import { API } from '../../api/api';
import s from './Header.module.css';
import {
    addCity,
    addNewCity
} from '../../redux/appReducer';

function Header() {
    const { cities, favoritesBt, newCity } = useSelector(
        (store) => store.appReducer
    );

    const dispatch = useDispatch();
    const refInput = React.useRef(null);
    const history = useHistory();

    const submitСity = (e) => {
        e.preventDefault();
        const sity = refInput.current.value;

        let duplicate = cities.find(
            (city) => city.name.toLowerCase() === sity.toLowerCase()
        );

        if (duplicate === undefined) {
            API.getNewCity(sity)
                .then((data) => {
                    if (data.cod === 200) {
                        const newCity = {
                            name: data.name,
                            id: data.id,
                            temperature: Math.round(data.main.temp - 273),
                            disclaimer: data.weather[0]['description'],
                            icon: data.weather[0].icon,
                        };
                        dispatch(addNewCity(newCity));

                        history.push(`/newday/${data.name}`);
                    } else {
                        throw new Error('Ошибка на сервере');
                    }
                })
                .catch((err) => {
                    console.error(err.message);
                });
        }
    };

    const addFavourites = () => {
        const city = {
            name: newCity.name,
            id: newCity.id,
        };

        dispatch(addCity(city));

        refInput.current.value = '';
        history.push('/');
    };

    return (
        <>
            <GoMainLink refInput={refInput} />

            <form onSubmit={(e) => submitСity(e)}>
                <div className='form-control-group'>
                    <div className='form-control grow-2x'>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            ref={refInput}
                            placeholder={'Поиск города'}
                        />
                    </div>
                    <div className='form-control grow-2x'>
                        <button type='submit' className='button-primary'>
                            Найти
                        </button>
                    </div>
                    <div className='form-control grow-4x'>
                        <button
                            type='button'
                            className={cx('button-primary', {
                                [s.bt_none]: !favoritesBt
                            })}
                            onClick={() => addFavourites()}
                        >
                            Добавить в избранное
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Header;
