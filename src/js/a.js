
var mapData2 ={};

var mapData ={};
var data ={};
let url = {};

//console.log("mapData");    
//bj = await (await fetch(url)).json();

  // ...

async function fetchAsync (){
    let url = await fetch('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson')
    data = await url.json();
  // let obj = await (await fetch(url)).json()
  // return obj

  mapData = data
  console.log(mapData);  

  return mapData
        
};

fetchAsync()
.then(data =>  data)
.catch(reason => console.log(reason.message))
console.log(mapData);  
console.log("mapData");  

 
$.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
function(data) {
    //data is the JSON string
  
});


export { mapData };



