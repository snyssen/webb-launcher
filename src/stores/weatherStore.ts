import { atom, map, MapStore, WritableAtom } from "nanostores";
import type { Weather } from "../models/Weather";
import { ExpirableCache } from "../utils/ExpirableCache";

export const isShowingWeather = atom(false);
export const weather: WritableAtom<Weather> = atom(
  ExpirableCache.get('weather') ?? {}
);
