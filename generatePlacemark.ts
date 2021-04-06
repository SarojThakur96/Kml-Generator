import { generateDescription } from "./generateDescription";
import { des, element} from "./kml";

export const generatePlacemark = (item: element, keyValue?: des) => {
    return `<Placemark>
<name>${item.name}</name>
<description>
${!!keyValue ? generateDescription(keyValue) : item.description}
</description>
<Point>
<coordinates>
${item.point.cordinates.longitude},
${item.point.cordinates.latitude},
${item.point.cordinates.elevation}
</coordinates>
</Point>
</Placemark>`;
  };