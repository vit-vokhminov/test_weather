import React from 'react';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

import { NewCard } from '../components';

function NewDay() {
    const { newCity } = useSelector((store) => store.appReducer);

    if (!newCity) return <Redirect to={'/'} />;

    let iconUrl = 'http://openweathermap.org/img/w/' + newCity.icon + '.png';
    let href = `/forecas/${newCity.id}/${newCity.name}`;

    const day = {
        name: newCity.name,
        temperature: newCity.temperature,
        disclaimer: newCity.disclaimer,
        iconUrl: iconUrl,
        href: href,
    };

    return (
        <div className='pricing-table row'>
            <NewCard day={day} />
        </div>
    );
}

export default NewDay;
