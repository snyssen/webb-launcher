import { useStore } from "@nanostores/preact";
import { h } from "preact";
import { weather } from "../stores/weatherStore";

export default function WeatherView() {
  const $weather = useStore(weather);

  return <p>{JSON.stringify($weather)}</p>;
}
