import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weatherArr : '',
        };
    };


    myInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitSity = (e) => {
        e.preventDefault();
        let val = e.target.querySelector('#sity').value;

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=9b46a32e02362554ac486e7cbbc5ae45&lang=ru`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ weatherArr: data });

                let newSity = {};
                newSity.name = val;
                newSity.id = this.state.weatherArr.id;

                this.props.onAddItem(newSity);

            });
    };


    render() {

        return (

            <form action="" onSubmit={this.submitSity}>
                <div className="form-control-group">
                    <div className="form-control">
                        <input type="text" id="sity" name="sity" defaultValue={'Поиск города'} onChange={this.myInput} />
                    </div>
                    <div className="form-control grow-2x">
                        <button className="button-primary">Добавить в избранное</button>
                    </div>
                </div>
            </form>

        );
    };
}


