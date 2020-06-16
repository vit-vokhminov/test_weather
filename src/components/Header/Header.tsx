import React from 'react';
import s from './Header.module.css';


type PropsType = {
    addFavourites: () => void,
    favoritesBt: boolean,
    submitcity: () => void,
}


const Header: React.FC<PropsType> = (props) => {

    return (

        <form action="" onSubmit={props.submitcity}>
            <div className="form-control-group">
                <div className="form-control grow-2x">
                    <input type="text" id="city" name="city" placeholder={'Поиск города'} />
                </div>
                <div className="form-control grow-2x">
                    <button type="submit" className="button-primary">Найти</button>
                </div>
                <div className="form-control grow-4x">
                    <button type="button"
                            className={`button-primary ${!props.favoritesBt ? s.bt_none : ''}`}
                            onClick={props.addFavourites}>Добавить в избранное
                    </button>
                </div>
            </div>
        </form>

    )
}

export default Header;