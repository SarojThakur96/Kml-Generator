
import { documentGenerator } from "./documentGenerator";
import { des } from "./kml";

describe("checking documentGenerator function", () => {

const data = 
`<Placemark>
<name>kolkata</name>
<description>
kml file for kolkata
</description>
<Point>
<coordinates>
88.3639,
22.5726,
0
</coordinates>
</Point>
</Placemark>`;

const result = 
  `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
<Placemark>
<name>kolkata</name>
<description>
kml file for kolkata
</description>
<Point>
<coordinates>
88.3639,
22.5726,
0
</coordinates>
</Point>
</Placemark>
</Document>
</kml>`;
    
     
    it("should work", () => {
      expect(documentGenerator(data)).toBe(result);
    });
 
  });