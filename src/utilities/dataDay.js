const weekdays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
const month = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

export default function dataDay(col){
    let day = new Date();
    day.setDate(new Date().getDate() + col);
    let weekday = weekdays[day.getDay()];

    let data = new Date();
    data.setDate(new Date().getDate() + col);

    let monthId = data.getMonth();
    let dayMonth = data.getDate();

    data = dayMonth + ' ' + month[monthId];

    return { weekday, data };
};
