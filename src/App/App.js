import React from 'react';
import './App.css';
import './mustard-ui.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import Forecas from '../Forecas/Forecas';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sity : [
                {
                    name : 'Novosibirsk',
                    id : 1496747
                }
            ],
        };
        this.onAddItem = this.onAddItem.bind(this);
    };

    onAddItem(value){
        this.setState({ sity: [ ...this.state.sity, value  ] });
    }

    sityId() {
        let nameId = [];
        for( let elem of this.state.sity ){
            nameId.push(elem.id);
        }
        return nameId = nameId.join();
    }

    render() {
        let arrMain = '';
        if(window.location.pathname !== '/'){
            arrMain = <a href="/" className="arr_main">&lt; На главную</a>;
        }

        return (

            <div className="container">

                {arrMain}
                <Header name={this.state.sity} onAddItem={this.onAddItem} />

                <Router>
                    <Switch>
                        <Route exact path="/" component={() => <Weather sity={this.sityId()}/>} />
                        <Route exact path="/forecas" component={() => <Forecas/>} />

                    </Switch>
                </Router>

            </div>

        );
    };
}


