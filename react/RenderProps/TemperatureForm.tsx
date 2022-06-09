import * as React from "react";
import { TemperatureConverter } from "./TemperatureConverter";

export default function TemperatureForm() {
  return (
    <TemperatureConverter
      renderKelvin={({ value }) => <p>{value}K</p>}
      renderFarenheit={({ value }) => (value * 9) / 5 + 32}
    />
  );
}
