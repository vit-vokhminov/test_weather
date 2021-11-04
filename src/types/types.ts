export type CityType = {
    name: string;
    id: number;
};
export type NewCityType = {
    disclaimer: string;
    icon: string;
    id: number;
    name: string;
    temperature: number;
};
export type initialStateType = {
    favoritesBt: boolean;
    cities: Array<CityType>;
    newCity: NewCityType | null;
};

export interface ActionType<T> {
    type: string;
    payload: T;
}

export type RootStateType = {
    appReducer: initialStateType;
};