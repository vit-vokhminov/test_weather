import React from 'react';
import './Weather.css';
import Card from "../Card/Card";


export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
        };
        this.removeClick = this.removeClick.bind(this)
    };

    componentDidMount() {
        const city = this.props.city;
        fetch(`http://api.openweathermap.org/data/2.5/group?id=${city}&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ weatherArr: data.list });
            });
    };

    removeClick(valKey) {

        let arr = JSON.parse(localStorage.getItem('cities'));

        arr.map((elem,index) => {
            if(elem.id === valKey){
                arr.splice(index, 1);
                return false;
            }
            return "";
        });

        if(arr.length === 0){
            localStorage.removeItem('cities');
        }else{
            localStorage.setItem('cities',JSON.stringify(arr));
        }

        window.location.assign('/');
    }

    cardsElem = () => {
        return this.state.weatherArr.map((day, index) => {
            return <Card day={day} key={index} group={true} col={0} id={day.id} remove={this.removeClick} />
        })
    };


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


