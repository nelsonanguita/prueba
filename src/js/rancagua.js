
import Highcharts from 'highcharts'
import adddMapa from 'highcharts/modules/exporting'
import mapInit from 'highcharts/modules/map'
var url2 = "https://raw.githubusercontent.com/jlhonora/geo/master/region_del_libertador_bernardo_o'higgins/all.geojson"
var mapData = {}
async function fetchAsync (){
  let url = await fetch(encodeURI(url2))
  let data = await url.json();
// let obj = await (await fetch(url)).json()
// return obj
  mapData = data
  return mapData

};


fetchAsync()
.then(mapData =>  mostrar(mapData))
.catch(reason => console.log(reason.message))


export default function mostrar(va){
  Highcharts.maps['Libertador Bernardo Ohiggins']= va;
  
mapInit(Highcharts);
adddMapa(Highcharts);

};

export { mapData };
//export default function map (Highcharts) {
//  Highcharts.maps['Arica'] = mapData
//};



