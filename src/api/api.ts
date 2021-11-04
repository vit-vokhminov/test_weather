import axios from 'axios';

const appID_langRU = '&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru';
const instance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
});

export const API = {
    async getWeather(cityId: number) {
        let response = await instance.get(`group?id=${cityId + appID_langRU}`);
        return response.data.list;
    },
    async getForecas(cityId: number) {
        let colDayForecas = 10;
        let response = await instance.get(
            `forecast?id=${cityId}&cnt=${colDayForecas + appID_langRU}`
        );
        return response.data.list;
    },
    async getNewCity(cityName: string) {
        let response = await instance.get(
            `weather?q=${cityName + appID_langRU}`
        );
        return response.data;
    },
};
