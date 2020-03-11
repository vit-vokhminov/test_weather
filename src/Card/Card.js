import React from 'react';
import './Card.css';

export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weekdays : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            month : ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
            data : '',
            day : '',
        };

    };

    componentDidMount() {
        let col = this.props.col;

        let day = new Date();
        day.setDate(new Date().getDate() + col);
        this.setState({ day: this.state.weekdays[day.getDay()] });

        let data = new Date();
        data.setDate(new Date().getDate() + col);

        let month = data.getMonth();
        let dayMonth = data.getDate();

        this.setState({ data: dayMonth + ' ' + this.state.month[month] });

    };

    cityName = () => {

        let cityName = '';
        if(this.props.id){
            JSON.parse(localStorage.getItem('cities')).map((elem,index) => {
                if(elem.id === this.props.id){
                    cityName = elem.name;
                }
                return "";
            });
        }else{
            cityName = JSON.parse(localStorage.getItem('inpCity')).name;
        }

        return cityName;
    };


    render() {

        let weatherArr = this.props.day;
        let iconUrl = "http://openweathermap.org/img/w/" + weatherArr.weather[0].icon + ".png";
        let price = Math.round(weatherArr.main.temp - 273);
        let disclaimer = weatherArr.weather[0]['description'];

        let elemHtml = '';
        let href = '';

        if(this.props.group){
            elemHtml = <div>
                            <p className="package-name">{this.cityName()}</p>
                            <button type="button" className="close" title={'Удалить'} onClick={() => this.props.remove(this.props.day.id)} />
                        </div>;
            href = `/forecas/?city=${this.cityName()}&id=${this.props.day.id}`;
            href = <a href={href}>Прогноз на 10 дней</a>
        }else{
            elemHtml =
                <div>
                    <p className="weekday">{this.state.day}</p>
                    <p className="data">{this.state.data}</p>
                </div>
            ;
        }


        return (

            <div className="col col-sm-3">
                <div className="package featured">
                    {elemHtml}
                    <hr/>
                    <p className="price">{price}&deg;</p>
                    <p className="disclaimer">{disclaimer}</p>
                    <hr/>
                    <div className="features">
                        <img src={iconUrl} alt="" />
                    </div>

                    {href}
                </div>
            </div>


        );
    };
}


