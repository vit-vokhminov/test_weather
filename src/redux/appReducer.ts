import {
    initialStateType,
    CityType,
    NewCityType,
    ActionType,
} from '../types/types';

const ADD_CITYES = 'ADD_CITYES';
const ADD_NEW_CITY = 'ADD_NEW_CITY';
const DELETE_CITY = 'DELETE_CITY';
const FAVORITES_BT = 'FAVORITES_BT';

let initialState: initialStateType = {
    favoritesBt: false,
    cities: [
        {
            name: 'Новосибирск',
            id: 1496747,
        },
    ],
    newCity: null,
};

const appReducer = (
    state = initialState,
    action: ActionType<CityType | NewCityType | boolean | number>
) => {
    switch (action.type) {
        case ADD_CITYES:
            return {
                ...state,
                cities: [...state.cities, action.payload],
                newCity: null,
                favoritesBt: false,
            };
        case ADD_NEW_CITY:
            return {
                ...state,
                newCity: action.payload,
                favoritesBt: true,
            };
        case DELETE_CITY:
            return {
                ...state,
                cities: state.cities.filter(elem => elem.id !== action.payload ),
                newCity: null,
            };
        case FAVORITES_BT: {
            return { ...state, favoritesBt: action.payload };
        }
        default:
            return state;
    }
};

type addCityActionType = {
    type: typeof ADD_CITYES;
    payload: CityType;
};
type newCityActionType = {
    type: typeof ADD_NEW_CITY;
    payload: NewCityType;
};
type deleteCityActionType = {
    type: typeof DELETE_CITY;
    payload: number;
};
type favoritesBtActionType = {
    type: typeof FAVORITES_BT;
    payload: boolean;
};

export const addCity = (payload: CityType): addCityActionType => ({ type: ADD_CITYES, payload });
export const addNewCity = (payload: NewCityType): newCityActionType => ({ type: ADD_NEW_CITY, payload });
export const deleteCity = (payload: number): deleteCityActionType => ({ type: DELETE_CITY, payload });
export const statusFavoritesBt = (payload: boolean): favoritesBtActionType => ({ type: FAVORITES_BT, payload });

export default appReducer;
