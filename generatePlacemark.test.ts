import { generatePlacemark } from "./generatePlacemark";
import { des, element } from "./kml";


describe("checking generatePlacemark function", () =>{
      
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
    
      const keyValue: des = {
        key: "value",
      };

const result1 =
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

const result2 = 
`<Placemark>
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
</Placemark>`

    it("should work", () => {
             expect(generatePlacemark(data)).toBe(result1);
    })
     
    it("should work", () => {
        expect(generatePlacemark(data,keyValue)).toBe(result2);
})
});