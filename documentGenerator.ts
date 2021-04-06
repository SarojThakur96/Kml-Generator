
export const documentGenerator = (data: string) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
${data}
</Document>
</kml>`;
  };
  