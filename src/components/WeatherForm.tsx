import { h } from "preact";
import { useState } from "preact/hooks";
import { ExtractValueFromInputEvent } from "../utils/FormsUtils";
import { isShowingWeather } from "../stores/weatherStore";
import { weather } from "../stores/weatherStore";
import { ExpirableCache } from "../utils/ExpirableCache";
import type { WeatherResponse } from "../models/Weather";

export default function WeatherForm() {
  const weatherCachedValue =
    ExpirableCache.getUnchecked<WeatherResponse>("weather");
  const shouldAutoRefresh =
    weatherCachedValue && weatherCachedValue.expirationDate < Date.now();

  const [country, setCountry] = useState<string>(
    weatherCachedValue?.value?.sys?.country ?? ""
  );
  const [city, setCity] = useState<string>(
    weatherCachedValue?.value?.name ?? ""
  );

  const countryInput = (e: React.FormEvent<HTMLInputElement>) =>
    setCountry(ExtractValueFromInputEvent(e));
  const cityInput = (e: React.FormEvent<HTMLInputElement>) =>
    setCity(ExtractValueFromInputEvent(e));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchWeather();
  };

  const fetchWeather = async () => {
    const weatherResponse = await fetch(`/weather/${country}/${city}`);
    if (!weatherResponse.ok) {
      console.error(
        "unexpected response from weather API: ",
        await weatherResponse.text()
      );
      return;
    }
    weather.set(await weatherResponse.json());
    isShowingWeather.set(!isShowingWeather.get());
  };

  if (shouldAutoRefresh) fetchWeather();

  return (
    <form className="flex flex-wrap justify-end gap-2" onSubmit={submit}>
      <div>
        <label htmlFor="country-input" className="sr-only"></label>
        <input
          id="country-input"
          className="rounded-xl frosted-glass
              p-2 w-32
              focus:z-10 focus:outline-none focus:ring focus:ring-gray-50 dark:focus:ring-gray-700"
          placeholder="Country"
          type="text"
          value={country}
          onInput={countryInput}
        />
      </div>
      <div>
        <label htmlFor="city-input" className="sr-only"></label>
        <input
          id="city-input"
          className="rounded-xl frosted-glass
              p-2 w-32
              focus:z-10 focus:outline-none focus:ring focus:ring-gray-50 dark:focus:ring-gray-700"
          placeholder="City"
          type="text"
          value={city}
          onInput={cityInput}
        />
      </div>
      <button
        className="bg-gray-50/50 dark:bg-gray-700/50
            hover:bg-gray-50 dark:hover:bg-gray-700
            focus:outline-none focus:ring focus:ring-gray-50 dark:focus:ring-gray-700
            rounded-xl text-sm font-bold p-2"
        type="submit"
      >
        Get weather
      </button>
    </form>
  );
}
