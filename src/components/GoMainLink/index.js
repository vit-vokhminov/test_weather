import React from 'react';
import s from './GoMainLink.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { statusFavoritesBt } from '../../redux/appReducer';
import { useHistory } from 'react-router-dom';

function GoMainLink(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleVisibleFavoritesBt = () => {
        props.refInput.current.value = '';
        dispatch(statusFavoritesBt(false));
    };

    return (
        <>
            {history.location.pathname !== '/' && (
                <Link
                    to='/'
                    className={s.arr_main}
                    onClick={handleVisibleFavoritesBt}
                >
                    &lt; На главную
                </Link>
            )}
        </>
    );
}

export default GoMainLink;
