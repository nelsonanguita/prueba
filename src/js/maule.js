
import Highcharts from 'highcharts'
import adddMapa from 'highcharts/modules/exporting'
import mapInit from 'highcharts/modules/map'

var mapData = {}
async function fetchAsync (){
  let url = await fetch('https://raw.githubusercontent.com/jlhonora/geo/master/region_del_maule/all.geojson')
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
  Highcharts.maps['Maule']= va;
  
mapInit(Highcharts);
adddMapa(Highcharts);

};

export { mapData };
//export default function map (Highcharts) {
//  Highcharts.maps['Arica'] = mapData
//};



