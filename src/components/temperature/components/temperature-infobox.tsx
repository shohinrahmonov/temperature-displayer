interface TemperatureInfoBoxProps {
  currentTemperature: number;
  min: number;
  max: number;
}

const TemperatureInfoBox = ({
  currentTemperature,
  min,
  max,
}: TemperatureInfoBoxProps) => {
  return (
    <div className="text-center space-y-4">
      <div>Min: {min} °C</div>
      <div>Max: {max} °C</div>
      <div>Current: {currentTemperature} °C</div>
    </div>
  );
};

export default TemperatureInfoBox;
