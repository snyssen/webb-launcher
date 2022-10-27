import { openWeatherStaticConfig } from "../../../configuration/openWeatherStaticConfig";

const openWeatherApiKey: string = import.meta.env.OPENWEATHER_API_KEY ?? process.env.OPENWEATHER_API_KEY;
const openWeatherUnit: string = import.meta.env.OPENWEATHER_UNIT ?? process.env.OPENWEATHER_UNIT ?? 'metric';

export async function get({ params }: any) {

  const { country, city } = params;

  return await fetch(
    `${openWeatherStaticConfig.baseUri}/weather?q=${city},${country}&units=${openWeatherUnit}&appid=${openWeatherApiKey}`
  );
}
