
const ADD_CITY = 'ADD_CITY';
const FIND_CITY = 'FIND_CITY';
const DELETE_CITY = 'DELETE_CITY';
const STATUS_BT = 'STATUS_BT';


let initialState = {
    statusAddBT: false,
    city : [
        {
            name : 'Новосибирск',
            id : 1496747
        }
    ],
    newCity: ''
};

const appReducer = (state = initialState, action) => {      // редюсер
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                city: [ ...state.city, action.addCity ]
            }
        case FIND_CITY:
            return {
                ...state,
                newCity: { ...state.newCity, ...action.newCity }
            }
        case DELETE_CITY:
            return {
                ...state,
                city: state.city.filter(elem => elem.id !== action.cityId)
            }
        case STATUS_BT: {
            return { ...state, statusAddBT: action.statusBT}
        }
        default:
            return state;
    }
}



export const addCity = (addCity) => ({type: ADD_CITY, addCity })
export const newCity = (newCity) => ({type: FIND_CITY, newCity })
export const deleteCity = (cityId) => ({type: DELETE_CITY, cityId })
export const statusBT = (statusBT) => ({type: STATUS_BT, statusBT })





export default appReducer;