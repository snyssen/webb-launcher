// See https://openweathermap.org/current#current_JSON
export interface WeatherResponse {
  coord: Coordinates;
  weather: Weather;
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  rain: Precipitations;
  snow: Precipitations;
  dt: number; // Unix timestamp of request
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Precipitations {
  '1h': number;
  '3h'?: number;
}

export interface WeatherSys {
  type: number;
  id: number;
  country: string;
  sunrise: number; // UNIX timestamp
  sunset: number; // UNIX timestamp
}
