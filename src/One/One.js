import React from 'react';
import './One.css';
import Card from "../Card/Card";

const queryString = require('query-string');
const parsed = queryString.parse(window.location.search);

export default class One extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
        };
    };

    componentDidMount() {
        let cityId = parsed.id;
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    weatherArr: data,
                    showBTfavourites: localStorage.getItem('showBTfavourites')
                });
            });
    };


    render() {
        let weatherArr = this.state.weatherArr;
        if (!weatherArr) {
            return <span>Загрузка</span>;
        }

        return (

            <div className="pricing-table row">
                <Card day={weatherArr} group={true} col={0} />
            </div>

        );
    };
}


