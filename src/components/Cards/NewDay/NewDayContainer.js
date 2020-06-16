import React from 'react';
import {connect} from "react-redux";
import NewDay from "./NewDay";
import {Redirect} from "react-router";


const NewDayContainer = (props) => {

    if(props.newCity.length === 0) return <Redirect to={'/'} />;

    let iconUrl = "http://openweathermap.org/img/w/" + props.newCity.icon + ".png";
    let href = `/forecas/${props.newCity.id}/${props.newCity.name}`;

    return (

        <div className="pricing-table row">
            <NewDay
                cityName={props.newCity.name}
                temperature={props.newCity.temperature}
                disclaimer={props.newCity.disclaimer}
                iconUrl={iconUrl}
                href={href}
            />
        </div>

    );

}

const mapStateToProps = (state) => ({
    newCity: state.appReducer.newCity,
    FavoritesBt: state.appReducer.FavoritesBt,
});


export default connect(mapStateToProps)(NewDayContainer);



