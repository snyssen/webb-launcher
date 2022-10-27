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
    <div
      className="flex flex-row flex-wrap
      gap-x-2 md:gap-x-4 xl:gap-x-6
      gap-y-2 xl:gap-y-4
    "
    >
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
      <p className="hidden sm:block">
        <i className="las la-temperature-high"></i>
        {$weather.main.temp_max}
        {tempUnit}
        <i className="las la-temperature-low"></i>
        {$weather.main.temp_min}
        {tempUnit}
      </p>
      <p>
        <i
          className="las la-location-arrow"
          style={{
            transform: windArrowRotation(),
          }}
        ></i>
        {$weather.wind.speed} {speedUnit}
      </p>
      <p className="hidden md:inline-flex flex-wrap gap-x-1">
        <span>
          <i className="las la-sun"></i>
          {new Date($weather.sys.sunrise * 1000).toLocaleTimeString()}
        </span>
        <span>
          <i className="las la-moon"></i>
          {new Date($weather.sys.sunset * 1000).toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
}
