import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

type PropsType = {
    day: {
        name: string;
        temperature: number;
        disclaimer: string;
        iconUrl: string;
        href: string;
    };
};

const NewCard: React.FC<PropsType> = (props) => {
    return (
        <div className='col col-sm-3'>
            <div className='package featured'>
                <div>
                    <p className='package-name'>{props.day.name}</p>
                </div>
                <hr />
                <p className='price'>{props.day.temperature}&deg;</p>
                <p className='disclaimer'>{props.day.disclaimer}</p>
                <hr />
                <div className='features'>
                    <img src={props.day.iconUrl} alt='' />
                </div>
                <Link to={props.day.href}>Прогноз на 10 дней</Link>
            </div>
        </div>
    );
};

export default NewCard;
