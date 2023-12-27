import { ReadonlyURLSearchParams } from "next/navigation";

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const upperFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const endWith = (
  array: (string | object)[],
  endValue: string
): any[] => {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (
      (typeof item === "string" && item === endValue) ||
      (typeof item === "object" && "name" in item && item.name === endValue)
    ) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    const [item] = array.splice(index, 1);
    array.push(item);
  }

  return array;
};

export const replaceScoresWithSpaces = (str?: string | null) => {
  if (!str) return "";
  return str.replaceAll("-", " ");
};
