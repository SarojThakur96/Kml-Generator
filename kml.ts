import { documentGenerator } from "./documentGenerator";
import { generatePlacemark } from "./generatePlacemark";
export interface element {
  name: string;
  description: string;
  point: {
    cordinates: {
      latitude: number;
      longitude: number;
      elevation: number;
    };
  };
}

export interface des {
  [key: string]: string;
}


export const kmlGenerator = (array: element[] | element, description?: des) => {
  const placemarks = Array.isArray(array)
    ? array.map((item) => generatePlacemark(item, description)).join(`
       `)
    : generatePlacemark(array, description);

  const document = documentGenerator(placemarks);

  return document;
};
