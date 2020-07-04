import React from 'react';
import {connect} from "react-redux";
import Header from './Header';
import {newCity, statusFavoritesBt, addCity} from "../../redux/app-reducer";
import { withRouter } from 'react-router-dom'
import {openAPI} from "../../api/api";

/*type PropsType = {
    addCity: () => void,
    city: Array<CityType>
    history: any
    location: any
    match: any
    newCity: () => void,
    newCityName: Array<NewCityType>
    favoritesBt: boolean
    statusFavoritesBt: () => void
}*/

class HeaderContainer extends React.Component {

    submitcity = (e) => {
        e.preventDefault();
        let cityValue = this.titleCity.value;

        openAPI.getNewCity(cityValue)
            .then(data => {
                if(data.cod !== '404' && data.cod !== '400'){
                    this.props.newCity({
                        name : data.name,
                        id : data.id,
                        temperature : Math.round(data.main.temp - 273),
                        disclaimer : data.weather[0]['description'],
                        icon : data.weather[0].icon
                    });
                    let duplicate = this.props.cities.find(city => city.name.toLowerCase() === cityValue.toLowerCase());
                    if(duplicate === undefined){
                        this.props.statusFavoritesBt(true)
                    }
                    this.props.history.push(`/newday/${data.name}`);
                }
            });
    };

    addFavourites = () => {
        this.props.addCity({
            name : this.props.newCityName.name,
            id : this.props.newCityName.id,
        });
        document.querySelector('#city').value = '';
        this.props.statusFavoritesBt(false);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <Header
                    submitcity={this.submitcity}
                    favoritesBt={this.props.favoritesBt}
                    addFavourites={this.addFavourites}
                    refCity={input => this.titleCity = input}
                />
            </div>

        );
    };

}

const mapStateToProps = (state) => ({
    cities: state.appReducer.cities,
    newCityName: state.appReducer.newCity,
    favoritesBt: state.appReducer.favoritesBt
});

let WithUrlRouter = withRouter(HeaderContainer);
export default connect(mapStateToProps, {newCity,statusFavoritesBt,addCity})(WithUrlRouter);