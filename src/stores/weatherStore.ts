import { atom, map, MapStore, WritableAtom } from "nanostores";
import type { Weather } from "../models/Weather";

export const isShowingWeather = atom(false);
export const weather: WritableAtom<Weather> = atom({}); // TODO: cache in local storage
