import { atom, type WritableAtom } from "nanostores";
import type { WeatherResponse } from "../models/Weather";
import { ExpirableCache } from "../utils/ExpirableCache";

export const weather: WritableAtom<WeatherResponse> = atom(
  ExpirableCache.get('weather')
);
export const isShowingWeather = atom(weather.get() ? true : false);
