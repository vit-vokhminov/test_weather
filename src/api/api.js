import * as axios from "axios";

const appID_langRU = '&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru';
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
});


export const openAPI = {

    getWeather(city) {
        return instance.get(`group?id=${city + appID_langRU}`)
            .then(response => {
                return response.data.list;
            });
    },
    getForecas(cityId) {
        let colDayForecas = 10;
        return instance.get(`forecast?id=${cityId}&cnt=${colDayForecas + appID_langRU}`)
            .then(response => {
                return response.data.list;
            });
    },
    getNewCity(city) {
        return instance.get(`weather?q=${city + appID_langRU}`)
            .then(response => {
                return response.data;
            });
    },
}



