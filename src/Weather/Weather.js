import React from 'react';
import './Weather.css';
import Card from "../Card/Card";


export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
        };
    };


    componentDidMount() {
        const sity = this.props.sity;
        fetch(`http://api.openweathermap.org/data/2.5/group?id=${sity}&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ weatherArr: data.list });
            });
    }

    cardsElem = () => {
        return this.state.weatherArr.map((day, index) => {
            return <Card day={day} key={index} group={true} col={0} name={day.name}/>
        })
    }


    render() {
        let weatherArr = this.state.weatherArr;
        if (!weatherArr) {
            return <span>Загрузка</span>;
        }

        return (

            <div className="pricing-table row">
                {this.cardsElem()}
            </div>

        );
    };
}


