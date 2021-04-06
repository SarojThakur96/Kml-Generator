import { generateDescription } from "./generateDescription";
import { des } from "./kml";

describe("checking generateDescription function", () => {

const data: des = {
         key: "value"
     }

const result = 
    `<![CDATA[<p>
<font color="red">
key: <b> value</b>
</font>
</p>
]]>`;
    
     
    it("should work", () => {
      expect(generateDescription(data)).toBe(result);
    });
 
  });