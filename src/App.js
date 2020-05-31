import React from 'react';
import s from './App.module.css';
import './extensions/mustard-ui.min.css';
import {NavLink, Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import HeaderContainer from './components/Header/HeaderContainer';
import CityesContainer from './components/Cards/Cities/CityesContainer';
import ForecasContainer from './components/Cards/Forecas/ForecasContainer';
import NewDayContainer from './components/Cards/NewDay/NewDayContainer';



const App = (props) => {

        return (

            <div className="container">
                {props.location.pathname !== "/" ? <NavLink to='/' className={s.arr_main}>&lt; На главную</NavLink> : null}
                <HeaderContainer/>

                <Route exact path="/" component={() => <CityesContainer />} />
                <Route path="/forecas/:id/:city" component={() => <ForecasContainer/>} />
                <Route path="/newday" component={() => <NewDayContainer/>} />

            </div>

        );

}


let WithUrlRouter = withRouter(App);
export default connect()(WithUrlRouter)