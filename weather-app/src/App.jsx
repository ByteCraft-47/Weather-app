import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="container">

      <WeatherCard
        city="Kolkata"
        temperature="32"
        condition="Sunny"
        icon="☀️"
      />

    </div>
  );
}

export default App;