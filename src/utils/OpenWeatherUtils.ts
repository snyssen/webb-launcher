export function getIconClassFromOpenWeatherCode(code: string): string {
  // see codes here -> https://openweathermap.org/weather-conditions
  switch (code) {
    case '01d':
      return 'las la-sun';

    case '01n':
      return 'las la-moon';

    case '02d':
      return 'las la-cloud-sun';

    case '02n':
      return 'las la-cloud-moon';

    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return 'las la-cloud';

    case '09d':
    case '09n':
      return 'las la-cloud-showers-heavy';

    case '10d':
      return 'las la-cloud-sun-rain';

    case '10n':
      return 'las la-cloud-moon-rain';

    case '11d':
    case '11n':
      return 'las la-bolt';

    case '13d':
    case '13n':
      return 'las la-snowflake';

    case '50d':
    case '50n':
      return 'las la-smog';

    default:
      return 'las la-question'
  }
}
