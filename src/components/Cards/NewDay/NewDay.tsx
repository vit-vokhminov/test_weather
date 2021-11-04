import React from 'react';
import '../Card.css';
import {NavLink} from "react-router-dom";


type PropsType = {
    cityName : string,
    iconUrl : string,
    temperature : number,
    disclaimer : string,
    href : string,
}

const NewDay: React.FC<PropsType> = (props) => {

    return (

        <div className="col col-sm-3">
            <div className="package featured">
                <div>
                    <p className="package-name">{props.cityName}</p>
                </div>
                <hr/>
                <p className="price">{props.temperature}&deg;</p>
                <p className="disclaimer">{props.disclaimer}</p>
                <hr/>
                <div className="features">
                    <img src={props.iconUrl} alt="" />
                </div>
                <NavLink to={props.href}>Прогноз на 10 дней</NavLink>
            </div>
        </div>

    )

}

export default NewDay;
