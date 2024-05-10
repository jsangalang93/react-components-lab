import './WeatherForecast.css';

const WeatherListItem = ({weather}) => {
    return (
        <li>
            <div className="weather">
                <h2>{weather.day}</h2>
                
                <img src={weather.img} alt={weather.imgAlt}/>
                {/* <p><span>day: {weather.day}</span> */}
                <p>conditions: {weather.conditions}</p>
                <p>time of day: {weather.time}</p>
            </div>
        </li>
    );
};

export default WeatherListItem;