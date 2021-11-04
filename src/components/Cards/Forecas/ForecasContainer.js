import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {openAPI} from "../../../api/api";
import ForecastCard from './ForecastCard';


class ForecasContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weekdays : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            month : ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
            data : '',
            day : '',
            weatherArr : '',
            city : ''
        };
    };

    componentDidMount() {
        let params = this.props.match.params;
        openAPI.getForecas(params.id)
            .then(response => {
                this.setState({
                    weatherArr: response,
                    city: params.city
                });
            });

    };

    dataDay = (col) => {
        let day = new Date();
        day.setDate(new Date().getDate() + col);
        let weekday = this.state.weekdays[day.getDay()];

        let data = new Date();
        data.setDate(new Date().getDate() + col);

        let month = data.getMonth();
        let dayMonth = data.getDate();

        data = dayMonth + ' ' + this.state.month[month];

        return {weekday:weekday,data:data}
    };

    cardsElem = () => {
        return this.state.weatherArr.map((elemDay, index) => {

            let dataDay = this.dataDay(index);
            let day = {
                weekday : dataDay.weekday,
                data : dataDay.data,
                temperature : Math.round(elemDay.main.temp - 273),
                disclaimer : elemDay.weather[0]['description'],
                iconUrl : "http://openweathermap.org/img/w/" + elemDay.weather[0].icon + ".png",
            }

            return <ForecastCard day={day} key={index} />

        })
    };

    render() {
        if (!this.state.weatherArr) {
            return <span>Загрузка</span>;
        }
        return (
            <div>
                <h4>Погода в {this.state.city}</h4>
                <div className="pricing-table row">
                    {this.cardsElem()}
                </div>
            </div>
        );
    };
}


let WithUrlRouter = withRouter(ForecasContainer);
export default connect()(WithUrlRouter);