import React from 'react';
import '../Card.css';
const ForecastCard = (props) => {


    return (

        <div className="col col-sm-3">
            <div className="package featured">
                <div>
                    <p className="weekday">{props.day.weekday}</p>
                    <p className="data">{props.day.data}</p>
                </div>
                <hr/>
                <p className="price">{props.day.temperature}&deg;</p>
                <p className="disclaimer">{props.day.disclaimer}</p>
                <hr/>
                <div className="features">
                    <img src={props.day.iconUrl} alt="" />
                </div>
            </div>
        </div>

    )

}

export default ForecastCard;
