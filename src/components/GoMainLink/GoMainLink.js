import React from 'react';
import s from './GoMainLink.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {statusFavoritesBt} from "../../redux/app-reducer";



const GoMainLink = (props) => {

    const displayBT = () => {
        document.querySelector('#city').value = '';
        props.sendfavoritesBt(false);
    }

    return <NavLink to='/' className={s.arr_main} onClick={displayBT}>&lt; На главную</NavLink>

}


let mapDispatchToProps = (dispatch) => {
    return {
        sendfavoritesBt: (val) => {
            dispatch(statusFavoritesBt(val));
        }
    }
}

export default connect(null, mapDispatchToProps)(GoMainLink);



