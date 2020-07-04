import appReducer, {addCity, deleteCity, newCity, statusFavoritesBt} from "./app-reducer";
import React from "react";


let state = {
    favoritesBt: false,
    cities : [
        {
            name : 'Новосибирск',
            id : 1496747
        }
    ],
    newCity: []
};


it('number of cities added', () => {
    let action = addCity({name: "Владивосток", id: 2013348});
    let newState = appReducer(state, action);
    expect(newState.cities.length).toBe(2);
});

it('number of newCity added', () => {
    let action = newCity({name: "Мурманск", id: 524305});
    let newState = appReducer(state, action);
    expect(newState.cities.length).toBe(1);
});

it('number of cities after deletion', () => {
    let action = deleteCity(1496747);
    let newState = appReducer(state, action);
    expect(newState.cities.length).toBe(0);
});

it('status favoritesBt', () => {
    let action = statusFavoritesBt(true);
    let newState = appReducer(state, action);
    expect(newState.favoritesBt).toBe(true);
})