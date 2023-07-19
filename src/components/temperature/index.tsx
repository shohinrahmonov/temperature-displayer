import {Input} from "@ui/input";
import {useState} from "react";
import {cn, convertCelsiusTo360} from "@lib/utils";
import TemperatureInfoBox from "@components/temperature/components/temperature-infobox";

interface TemperatureDisplay {
  min?: number;
  max?: number;
  className?: string;
}

const TemperatureDisplay = ({
  min = 0,
  max = 100,
  className,
}: TemperatureDisplay) => {
  const [currentTemperature, setCurrentTemperature] = useState(min);
  const [angle, setAngle] = useState(convertCelsiusTo360(min));

  const handleChangeTemperature: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newTemperature = Number(event.target.value);
    if (newTemperature <= max) {
      setCurrentTemperature(newTemperature);
      setAngle(convertCelsiusTo360(newTemperature));
    }
  };
  const minRotation = convertCelsiusTo360(min);
  const maxRotation = convertCelsiusTo360(max);
  return (
    <div className="space-y-3 flex justify-center items-center flex-col">
      <div className={cn("relative h-20 w-20 mb-4", className)}>
        <div
          className="border rounded-full w-full h-full -rotate-90 bg-white transition-all ease-linear"
          style={{rotate: `${angle}deg`}}
        >
          <div className="border-t-2 border-cyan-600 w-1/2 absolute top-1/2 left-0 translate-x-1"></div>
        </div>
        <div className="absolute top-0 -rotate-90 w-full h-full rounded-full left-0 flex justify-center items-center -z-10">
          <div
            className="absolute -translate-x-[10%] border-t-2 border-green-500 w-full"
            style={{rotate: `${minRotation}deg`}}
          ></div>
          <div
            className="absolute -translate-x-[10%] border-t-2 border-red-500 w-full"
            style={{rotate: `${maxRotation}deg`}}
          ></div>
        </div>
      </div>
      <TemperatureInfoBox
        max={max}
        min={min}
        currentTemperature={currentTemperature}
      />
      <Input
        type="number"
        value={currentTemperature}
        onChange={handleChangeTemperature}
      />
    </div>
  );
};

export default TemperatureDisplay;
