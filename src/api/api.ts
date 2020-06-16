import axios from "axios";

const appID_langRU = '&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru';
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/'
});


export const openAPI = {

    getWeather(cityId: number) {
        return instance.get(`group?id=${cityId + appID_langRU}`)
            .then(response => {
                return response.data.list;
            });
    },
    getForecas(cityId: number) {
        let colDayForecas = 10;
        return instance.get(`forecast?id=${cityId}&cnt=${colDayForecas + appID_langRU}`)
            .then(response => {
                return response.data.list;
            });
    },
    getNewCity(cityName: string) {
        return instance.get(`weather?q=${cityName + appID_langRU}`)
            .then(response => {
                return response.data;
            });
    },
}



