export abstract class OpenWeatherConfig {
  static baseUri: string = 'https://api.openweathermap.org/data/2.5';
  static iconsBaseUri: string = 'https://openweathermap.org/img/wn/';
  static iconsExt: string = '.png';

  static apiKey: string = import.meta.env.OPENWEATHER_API_KEY ?? process.env.OPENWEATHER_API_KEY;
  static units: OpenWeatherUnits = import.meta.env.OPENWEATHER_UNITS ?? process.env.OPENWEATHER_UNITS ?? 'metric';

  static isApiKeyDefined = () => this.apiKey ? true : false;

  static getDisplayableTempUnit = () => {
    switch (OpenWeatherConfig.units) {
      case 'metric':
        return '°C';
      case 'imperial':
        return '°F';
      case 'standard':
        return 'K';
      default:
        return '<invalid unit>';
    }
  }

  static getDisplayableSpeedUnit = () => {
    switch (OpenWeatherConfig.units) {
      case 'metric':
        return 'm/s';
      case 'imperial':
        return 'mph';
      case 'standard':
        return 'm/s';
      default:
        return '<invalid unit>';
    }
  }
}

export type OpenWeatherUnits = 'metric' | 'imperial' | 'standard';
