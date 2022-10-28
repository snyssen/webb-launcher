import { OpenWeatherConfig } from "../../../configuration/OpenWeatherConfig";

export async function get({ params }: any) {
  const { country, city } = params;

  if (!OpenWeatherConfig.isApiKeyDefined())
    return Response.error();

  return await fetch(
    `${OpenWeatherConfig.baseUri}/weather?q=${city},${country}&units=${OpenWeatherConfig.units}&appid=${OpenWeatherConfig.apiKey}`
  );
}
