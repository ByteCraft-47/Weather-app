import { useState } from "react";
import "./WeatherCard.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "7361ada38a04474a18cdf820f637d96a";

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
        return;
      }

      setWeather(data);
      setError("");
    } catch {
      setError("Failed to fetch weather data");
      setWeather(null);
    }
  };

  const getEmoji = (condition) => {
    switch (condition) {
      case "Clear":
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      case "Drizzle":
        return "🌦️";
      case "Thunderstorm":
        return "⛈️";
      case "Snow":
        return "❄️";
      case "Mist":
      case "Fog":
      case "Haze":
        return "🌫️";
      default:
        return "🌤️";
    }
  };

  return (
    <div className="weather-card">
      <h1>🌦 Weather App</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search Weather
      </button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <div className="icon">
            {getEmoji(weather.weather[0].main)}
          </div>

          <h2>{weather.name}</h2>

          <h3>
            {Math.round(weather.main.temp)}°C
          </h3>

          <p>
            {weather.weather[0].description}
          </p>

          <div className="extra-info">
            <div className="info-box">
              <h4>Humidity</h4>
              <p>{weather.main.humidity}%</p>
            </div>

            <div className="info-box">
              <h4>Wind</h4>
              <p>{weather.wind.speed} m/s</p>
            </div>
          </div>

          <div className="extra-info">
            <div className="info-box">
              <h4>Feels Like</h4>
              <p>
                {Math.round(
                  weather.main.feels_like
                )}
                °C
              </p>
            </div>

            <div className="info-box">
              <h4>Pressure</h4>
              <p>
                {weather.main.pressure}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
