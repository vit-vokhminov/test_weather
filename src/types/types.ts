export type initialStateType = {
    favoritesBt: boolean,
    cities: Array<CityType>
    newCity: Array<NewCityType>
}
export type CityType = {
    name: string
    id: number
}
export type NewCityType = {
    disclaimer: string
    icon: string
    id: number
    name: string
    temperature: number
}