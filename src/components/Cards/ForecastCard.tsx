import React from 'react';
import './Card.css';

type PropsType = {
    day: {
        data: string;
        disclaimer: string;
        iconUrl: string;
        temperature: number;
        weekday: string;
    };
};

const ForecastCard: React.FC<PropsType> = (props) => {
    return (
        <div className='col col-sm-3'>
            <div className='package featured'>
                <div>
                    <p className='weekday'><b>{props.day.weekday}</b></p>
                    <p className='data'>{props.day.data}</p>
                </div>
                <hr />
                <p className='price'>{props.day.temperature}&deg;</p>
                <p className='disclaimer'>{props.day.disclaimer}</p>
                <hr />
                <div className='features'>
                    <img src={props.day.iconUrl} alt='' />
                </div>
            </div>
        </div>
    );
};

export default ForecastCard;
