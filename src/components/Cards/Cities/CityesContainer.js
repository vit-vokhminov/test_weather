import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {openAPI} from "../../../api/api";
import CityesCard from "./CityesCard";
import {deleteCity} from "../../../redux/app-reducer";


class CityesContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cityArr : '',
        };
    };

    componentDidMount() {
        const cityesId = this.props.city.map(elem => elem.id);
        openAPI.getWeather(cityesId)
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
        if(this.props.city.length){

            return this.state.cityArr.map((elemDay, index) => {

                let day = {
                    cityName : this.props.city[index].name,
                    id : elemDay.id,
                    iconUrl : "http://openweathermap.org/img/w/" + elemDay.weather[0].icon + ".png",
                    temperature : Math.round(elemDay.main.temp - 273),
                    disclaimer : elemDay.weather[0]['description'],
                    href : `/forecas/${elemDay.id}/${this.props.city[index].name}`,
                    removeCity : this.removeCity
                }

                return <CityesCard
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
        city: state.appReducer.city
    }
}


let WithUrlRouter = withRouter(CityesContainer);
export default connect(mapStateToProps, {deleteCity})(WithUrlRouter);