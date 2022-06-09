import React from "react";

export function TemperatureConverter(props) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celcius"
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      {props.renderKelvin({ value: value + 273.15 })}
      {props.renderFarenheit({ value: (value * 9) / 5 + 32 })}
    </div>
  );
}
