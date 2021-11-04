import React from 'react';
import './assets/mustard-ui.min.css';
import { Route } from 'react-router-dom';

import { Main, Forecas, NewDay } from './pages';
import { Header } from './components';

const App = () => {
    return (
        <div className='container'>
            <Header />

            <Route exact path='/' component={Main} />
            <Route path='/forecas/:id/:city' component={Forecas} />
            <Route path='/newday' component={NewDay} />
        </div>
    );
};

export default App;
