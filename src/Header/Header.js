import React from 'react';
import './Header.css';


export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
            showBTfavourites : false,
            city : ''
        };
    };

    componentDidMount() {
        this.setState({
            showBTfavourites: localStorage['showBTfavourites'] ,
            city: localStorage['city']
        });
    }

    submitcity = (e) => {
        e.preventDefault();
        let val = e.target.querySelector('#city').value;

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru`)
            .then(resp => resp.json())
            .then(data => {
                if(data.cod !== '404' && data.cod !== '400'){
                    this.setState({ weatherArr: data, 'showBTfavourites': true });

                    localStorage.setItem('showBTfavourites', true);

                    let inpCity = {name:data.name, id : data.id};
                    localStorage.setItem('inpCity',JSON.stringify(inpCity));

                    window.location.assign('/oneday/?id='+this.state.weatherArr.id);
                }else{
                    localStorage.setItem('showBTfavourites',false);
                }

            });
    };

    addFavourites = () => {
        let cityArr = JSON.parse(localStorage.getItem('cities'));
        let newCity = JSON.parse(localStorage.getItem('inpCity')).id;
        let flag = true;

        cityArr.map((city, index) => {
            if(city.id === newCity){
                flag = false;
                return false;
            }
            return "";
        });

        if(flag){
            let inpCity = localStorage['inpCity'];
            inpCity = JSON.parse(inpCity);

            let newCity = {};
            newCity.name = inpCity.name;
            newCity.id = inpCity.id;

            cityArr.push(newCity);
            localStorage.setItem('cities',JSON.stringify(cityArr));
            window.location.assign('/');
        }
    };

    render() {

        return (

            <form action="" onSubmit={this.submitcity}>
                <div className="form-control-group">
                    <div className="form-control grow-2x">
                        <input type="text" id="city" name="city" placeholder={'Поиск города'} defaultValue={this.state.city} />
                    </div>
                    <div className="form-control grow-2x">
                        <button type="submit" className="button-primary">Найти</button>
                    </div>
                    <div className="form-control grow-4x">
                        <button type="button" className="button-primary" onClick={this.addFavourites} disabled={!this.state.showBTfavourites}>Добавить в избранное</button>
                    </div>
                </div>
            </form>

        );
    };

}

