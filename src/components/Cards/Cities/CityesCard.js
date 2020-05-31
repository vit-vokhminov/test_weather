import React from 'react';
import '../Card.css';
import {NavLink} from "react-router-dom";


const CityesCard = (props) => {

    return (

        <div className="col col-sm-3">
            <div className="package featured">
                <div>
                    <p className="package-name">{props.day.cityName}</p>
                    <button type="button" className="close" title={'Удалить'} onClick={() => props.day.removeCity(props.day.id)} />
                </div>
                <hr/>
                <p className="price">{props.day.temperature}&deg;</p>
                <p className="disclaimer">{props.day.disclaimer}</p>
                <hr/>
                <div className="features">
                    <img src={props.day.iconUrl} alt="" />
                </div>
                <NavLink to={props.day.href}>Прогноз на 10 дней</NavLink>
            </div>
        </div>

    )

}

export default CityesCard;

