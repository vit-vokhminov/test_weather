import React from 'react';
import './Forecas.css';
import Card from '../Card/Card';

const queryString = require('query-string');
const parsed = queryString.parse(window.location.search);

export default class Forecas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
            city : ''
        };
    };

    componentDidMount() {
        let city = parsed.city;

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    weatherArr: data.list,
                    city: city
                });
            });
    };

    cardsElem = () => {
        let i = 0;
        return this.state.weatherArr.map((day, index) => {
            if(i < 10){
                i++;
                return <Card day={day} key={index} col={i-1}/>
            }else{
                return false;
            }
        })
    };

    render() {
        let weatherArr = this.state.weatherArr;
        if (!weatherArr) {
            return <span>Загрузка</span>;
        }
        return (
            <div>
                <h4>Погода в {parsed.city}</h4>
                <div className="pricing-table row">
                    {this.cardsElem()}
                </div>
            </div>
        );
    };
}


