import appReducer, {
    addCity,
    deleteCity,
    newCity,
    statusFavoritesBt,
} from './appReducer';
import React from 'react';

let state = {
    favoritesBt: false,
    cities: [
        {
            name: 'Новосибирск',
            id: 1496747,
        },
    ],
    newCity: null,
};

it('количество добавленных городов', () => {
    let action = addCity({ name: 'Владивосток', id: 2013348 });
    let newState = appReducer(state, action);
    expect(newState.cities.length).toBe(2);
});

it('количество новых добавленных городов', () => {
    let action = newCity({ name: 'Мурманск', id: 524305 });
    let newState = appReducer(state, action);
    expect(newState.cities.length).toBe(1);
});

it('количество городов после удаления', () => {
    let action = deleteCity(1496747);
    let newState = appReducer(state, action);
    expect(newState.cities.length).toBe(0);
});

it('статус кнопки избранное', () => {
    let action = statusFavoritesBt(true);
    let newState = appReducer(state, action);
    expect(newState.favoritesBt).toBe(true);
});
