   tooltip: {
                headerFormat: '',
                pointFormat: '{point.properties.NOM_COM}: <b>{series}</b>'
            },







            var mapData ={};
console.log("mapdata 1")
console.log(mapData)

mapData = Highcharts.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
    function obtener(geojson){
      mapData = geojson
      console.log(geojson)
      console.log("gepjson")
      console.log(this.mapData)
      console.log("mapdata2")


    }
);

console.log("ejecuto obtener ultimo")
console.log(mapData)
export { mapData }
export default function map (Highcharts) {
  Highcharts.maps['Arica'] = mapData
}





(Highcharts.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
              function (geojson){
                 mapData = geojson
                console.log(geojson)
                console.log("metodo")
              }
              ))


              Highcharts.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
function (geojson){
  mapData = geojson
  console.log(geojson)
  console.log("metodo")
}
)


function a (){
    Highcharts.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
    function obtener(geojson){
      mapData = geojson
      console.log(mapData)    
      console.log("metodooo")    
      return mapData
      
    }
  
  );
  
  }



  $.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
function(data) {
    //data is the JSON string
    console.log(data);
    mapData =data;
    console.log("mapData");    

});


$.getJSON('https://raw.githubusercontent.com/jlhonora/geo/master/region_de_valparaiso/isla_de_pascua/all.geojson', 
function(data) {
    //data is the JSON string
    console.log(data);
    mapData2 =data;
    console.log("desde A");    

});


let arregloConRepetidos = [11, 22, 3, 4, 1, 2, 2, 2, 10];
console.log("Con repetidos es:", arregloConRepetidos);
let sinRepetidos = arregloConRepetidos.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);




                 let aaa = arr.forEach(el => !(el in myObj) && (myObj[el] = true) && newArr.push(el))
                console.log("sin arr es:", aaa);


                let sinRepetidos = [...new Set(csvJSON(datos.data))];
                console.log("Sin repetidos es:", sinRepetidos);

                    let arregloConRepetidos = [11, 22, 3, 4, 1, 2, 2, 2, 10];
                    console.log("Con repetidos es:", arregloConRepetidos);
                    let sinRepetidos = arregloConRepetidos.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
                    console.log("Sin repetidos es:", sinRepetidos);




                         let arr = csvJSON(datos.data)
              //  console.log("Con repetidos es:", result2);
               // let sinRepetidos2 = arr.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);
               // console.log("sin repetidos es:", sinRepetidos2);

              const myArr = arr

              const newArr = []
              const myObj = []
              myArr.forEach(el => {
                if (!(el in myObj)) {
                  myObj[el] = true
                  newArr.push(el)
                  console.log("sin  newArr:", el);
                }
              })
          //  console.log("sin  newArr:", newArr);
