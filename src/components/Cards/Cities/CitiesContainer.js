import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {openAPI} from "../../../api/api";
import CitiesCard from "./CitiesCard";
import {deleteCity} from "../../../redux/app-reducer";


class CitiesContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cityArr : '',
        };
    };

    componentDidMount() {
        const citiesId = this.props.cities.map(elem => elem.id);
        openAPI.getWeather(citiesId)
            .then(response => {
                this.setState({ cityArr: response});
            });
    };

    removeCity = (id) => {
        this.props.deleteCity(id);
         const newcityArr = this.state.cityArr.filter((elem) => (elem.id !== id));
         this.setState({ cityArr: newcityArr });
    }

    cardsElem = () => {
        if(this.props.cities.length){

            return this.state.cityArr.map((elemDay, index) => {

                let day = {
                    cityName : this.props.cities[index].name,
                    id : elemDay.id,
                    iconUrl : "http://openweathermap.org/img/w/" + elemDay.weather[0].icon + ".png",
                    temperature : Math.round(elemDay.main.temp - 273),
                    disclaimer : elemDay.weather[0]['description'],
                    href : `/forecas/${elemDay.id}/${this.props.cities[index].name}`,
                    removeCity : this.removeCity
                }

                return <CitiesCard
                    key={index}
                    day={day}
                />
            })
        }

    };

    render() {

        if (!this.state.cityArr) {
            return <span>Загрузка</span>;
        }

        return (
            <div className="pricing-table row">
                {this.cardsElem()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        cities: state.appReducer.cities
    }
}


let WithUrlRouter = withRouter(CitiesContainer);
export default connect(mapStateToProps, {deleteCity})(WithUrlRouter);