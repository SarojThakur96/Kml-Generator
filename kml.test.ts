import { kmlGenerator, element, des } from "./kml";

const data: element = {
    name: "kolkata",
    description: "kml file for kolkata",
    point: {
      cordinates: {
        latitude: 22.5726,
        longitude: 88.3639,
        elevation: 0,
      },
    },
  };

  const description: des = {
    key: "value",
  };

  const result1=
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


  const result2 = 
    `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
<Placemark>
<name>kolkata</name>
<description>
<![CDATA[<p>
<font color="red">
key: <b> value</b>
</font>
</p>
]]>
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

describe("checking kmlGenerator function", () => {

  it("should work", () => {
    expect(kmlGenerator([data])).toBe(result1);
  });

  it("should also work", () => {
    expect(kmlGenerator([data],description)).toBe(result2);
  });

});
