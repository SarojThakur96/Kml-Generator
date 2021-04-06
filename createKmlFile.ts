
const {writeFile} = require('fs');
import {kmlGenerator,element,des} from './kml';

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

writeFile('output.kml',kmlGenerator(data,description),(err:string,result:string)=>{
         if(err){
             console.log(err);
             return;
         }
        console.log(result);
})