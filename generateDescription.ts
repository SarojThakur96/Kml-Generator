import { des } from "./kml";

export const generateDescription = (item: des) => {
    const elaborateKeyValuePairs = (key: string, value: string) => {
      return `<font color="red">
${key}: <b> ${value}</b>
</font>`;
    };
    return `<![CDATA[<p>
${Object.entries(item)
.map((item) => elaborateKeyValuePairs(item[0],item[1]))
.join("<br/>")}
</p>
]]>`;
  };
  