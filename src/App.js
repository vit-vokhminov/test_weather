import React from 'react';
import './extensions/mustard-ui.min.css';
import {Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import GoMainLink from './components/GoMainLink/GoMainLink';
import HeaderContainer from './components/Header/HeaderContainer';
import CitiesContainer from './components/Cards/Cities/CitiesContainer';
import ForecasContainer from './components/Cards/Forecas/ForecasContainer';
import NewDayContainer from './components/Cards/NewDay/NewDayContainer';



const App = (props) => {

        return (

            <div className="container">
                {props.location.pathname !== "/" ? <GoMainLink /> : null}
                <HeaderContainer/>

                <Route exact path="/" component={() => <CitiesContainer />} />
                <Route path="/forecas/:id/:city" component={() => <ForecasContainer/>} />
                <Route path="/newday" component={() => <NewDayContainer/>} />

            </div>

        );

}


let WithUrlRouter = withRouter(App);
export default connect()(WithUrlRouter)
