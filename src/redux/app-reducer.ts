import {initialStateType, CityType, NewCityType} from '../types/types';

const ADD_CITY = 'ADD_CITY';
const FIND_CITY = 'FIND_CITY';
const DELETE_CITY = 'DELETE_CITY';
const FAVORITES_BT = 'FAVORITES_BT';


let initialState: initialStateType = {
    favoritesBt: false,
    cities : [
        {
            name : 'Новосибирск',
            id : 1496747
        }
    ],
    newCity: []
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cities: [ ...state.cities, action.addCity ]
            }
        case FIND_CITY:
            return {
                ...state,
                newCity: { ...state.newCity, ...action.newCity }
            }
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter(elem => elem.id !== action.cityId),
                newCity: []
            }
        case FAVORITES_BT: {
            return { ...state, favoritesBt: action.statusFavoritesBt}
        }
        default:
            return state;
    }
}

type addCityActionType = {
    type: typeof ADD_CITY
    addCity: CityType
}
type newCityActionType = {
    type: typeof FIND_CITY
    newCity: NewCityType
}
type deleteCityActionType = {
    type: typeof DELETE_CITY
    cityId: number
}
type favoritesBtActionType = {
    type: typeof FAVORITES_BT
    statusFavoritesBt: boolean
}
export const addCity = (addCity:CityType): addCityActionType => ({type: ADD_CITY, addCity })
export const newCity = (newCity:NewCityType): newCityActionType => ({type: FIND_CITY, newCity })
export const deleteCity = (cityId:number): deleteCityActionType => ({type: DELETE_CITY, cityId })
export const statusFavoritesBt = (statusFavoritesBt:boolean): favoritesBtActionType => ({type: FAVORITES_BT, statusFavoritesBt })





export default appReducer;