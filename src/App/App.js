import React from 'react';
import './App.css';
import './mustard-ui.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import Forecas from '../Forecas/Forecas';
import One from '../One/One';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBTfavourites : false,
            city : [
                {
                    name : 'Новосибирск',
                    id : 1496747
                }
            ],
        };
    };

    cityId() {

        let cityArr = JSON.parse(localStorage.getItem('cities'));

        if(!cityArr){
            cityArr = this.state.city.map(elem => elem);
            localStorage.setItem('cities',JSON.stringify(cityArr));
        }

        return cityArr.map(elem => elem.id);

    };


    render() {
        let arrMain = '';
        if(window.location.pathname !== '/'){
            arrMain = <a href="/" className="arr_main">&lt; На главную</a>;
        }

        return (

            <div className="container">

                {arrMain}
                <Header name={this.state.city} showBTfavourites={this.state.showBTfavourites}/>

                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Weather city={this.cityId()}/>} />
                        <Route exact path="/forecas" component={() => <Forecas/>} />
                        <Route exact path="/oneday" component={() => <One/>} />
                    </Switch>
                </Router>

            </div>

        );
    };
}


