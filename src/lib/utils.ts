import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertCelsiusTo360(tempCelsius: number) {
  return (tempCelsius * 360) / 100;
}
