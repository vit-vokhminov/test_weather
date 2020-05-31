import React from 'react';
import {connect} from "react-redux";
import Header from './Header';
import {newCity, statusBT, addCity} from "../../redux/app-reducer";
import { withRouter } from 'react-router-dom'
import {openAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
            city : ''
        };
    };

    submitcity = (e) => {
        e.preventDefault();
        let val = e.target.querySelector('#city').value;

        openAPI.getNewCity(val)
            .then(data => {
                if(data.cod !== '404' && data.cod !== '400'){
                    this.props.newCity({
                        name : data.name,
                        id : data.id,
                        temperature : Math.round(data.main.temp - 273),
                        disclaimer : data.weather[0]['description'],
                        icon : data.weather[0].icon
                    });
                    let duplicate = this.props.city.find(city => city.name.toLowerCase() === val.toLowerCase());
                    if(duplicate === undefined){
                        this.props.statusBT(true)
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
        this.props.statusBT(false);
    };

    cityChange = (e) => {
        let val = e.target.value.toLowerCase();
        let cityName = this.props.newCityName.name;
        (cityName && val === cityName.toLowerCase()) ? this.props.statusBT(true) : this.props.statusBT(false);
    }

    render() {
        return (
            <div>
                <Header
                    submitcity={this.submitcity}
                    cityChange={this.cityChange}
                    statusAddBT={this.props.statusAddBT}
                    addFavourites={this.addFavourites}
                />
            </div>

        );
    };

}

const mapStateToProps = (state) => ({
    city: state.appReducer.city,
    newCityName: state.appReducer.newCity,
    statusAddBT: state.appReducer.statusAddBT
});

let WithUrlRouter = withRouter(HeaderContainer);
export default connect(mapStateToProps, {newCity,statusBT,addCity})(WithUrlRouter);