import React from 'react';
import './Daily.css';


export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
        };
    };


    componentDidMount() {
        const name = this.props.name;
        fetch(`https://tile.openweathermap.org/map/{layer}/6/82.934441/55.041111.png?appid=9b46a32e02362554ac486e7cbbc5ae45`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ weatherArr: data });
                console.log(this.state.weatherArr)
            });

    }

    render() {



        return (

            <div className="col col-sm-3">

            </div>


        );
    };
}


