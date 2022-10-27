import { openWeatherStaticConfig } from "../../../configuration/openWeatherStaticConfig";

const openWeatherApiKey: string = import.meta.env.OPENWEATHER_API_KEY ?? process.env.OPENWEATHER_API_KEY;
const openWeatherUnit: string = import.meta.env.OPENWEATHER_UNIT ?? process.env.OPENWEATHER_UNIT ?? 'metric';

export async function get({ params }) {

  const { country, city } = params;

  const weatherResponse = await fetch(
    `${openWeatherStaticConfig.baseUri}/weather?q=${city},${country}&units=${openWeatherUnit}&appid=${openWeatherApiKey}`
  );

  if (!weatherResponse.ok)
    return new Response(
      await weatherResponse.text(), {
      status: 500
    }
    );
  return new Response(
    await weatherResponse.text(), {
    status: 200
  });
}
