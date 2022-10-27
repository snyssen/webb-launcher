import { h } from "preact";
import WeatherForm from "./WeatherForm";
import { useStore } from "@nanostores/preact";
import { isShowingWeather } from "../stores/weatherStore";

export default function WeatherComponent() {
  const $isShowingWeather = useStore(isShowingWeather);

  const toggleWeather = () => {
    isShowingWeather.set(!$isShowingWeather);
  };

  return (
    <div className="flex flex-row gap-2 justify-start items-start">
      {$isShowingWeather ? <p>WIP</p> : <WeatherForm />}
      <button
        id="weather-form-toggle"
        type="button"
        onClick={toggleWeather}
        className="w-min
        bg-gray-50/50 dark:bg-gray-700/50
        hover:bg-gray-50 dark:hover:bg-gray-700
        focus:outline-none focus:ring focus:ring-gray-50 dark:focus:ring-gray-700
        rounded-xl p-2"
      >
        {$isShowingWeather ? (
          <i className="las la-chevron-circle-left"></i>
        ) : (
          <i className="las la-chevron-circle-right"></i>
        )}
      </button>
    </div>
  );
}
