import { useStore } from "@nanostores/preact";
import { h } from "preact";
import { weather } from "../stores/weatherStore";
import { getIconClassFromOpenWeatherCode } from "../utils/OpenWeatherUtils";

export default function WeatherView({ tempUnit = "°", speedUnit = "km/h" }) {
  const $weather = useStore(weather);
  if (!$weather)
    return <p>No weather available, please go back and make a query.</p>;
  if ($weather.weather.length <= 0)
    return (
      <p>
        Sorry but the weather information we got does not seem to be in a
        supported format.
      </p>
    );

  const windArrowRotation = () => `rotate(${$weather.wind.deg}deg)`;

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <i
        className={
          getIconClassFromOpenWeatherCode($weather.weather[0].icon) +
          " text-2xl"
        }
      ></i>
      <p className="text-xl">
        {$weather.main.temp}
        {tempUnit}
      </p>
      <p className="text-xs">
        (Feels like {$weather.main.feels_like}
        {tempUnit})
      </p>
      <p className="text-xl">
        <i
          className="las la-location-arrow"
          style={{
            transform: windArrowRotation(),
          }}
        ></i>
        {$weather.wind.speed} {speedUnit}
      </p>
    </div>
  );
}
