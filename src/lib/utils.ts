import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertCelsiusTo360(tempCelsius: number, max: number = 100) {
  return (tempCelsius * 360) / max;
}
