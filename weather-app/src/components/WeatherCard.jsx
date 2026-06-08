import "./WeatherCard.css";

function WeatherCard({
  city,
  temperature,
  condition,
  icon
}) {
  return (
    <div className="weather-card">

      <div className="weather-icon">
        {icon}
      </div>

      <h1>{city}</h1>

      <h2>{temperature}°C</h2>

      <p>{condition}</p>

    </div>
  );
}

export default WeatherCard;