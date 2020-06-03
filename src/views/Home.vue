<template >
<v-app>
  <v-content class="text-center" d-flex center mb-6 >
         <h1 > 10 comunas con más contagios </h1>
        <bar-chart color="grey lighten-2" adapter="chartjs" xAxisID:="Comunas" :labels="labels" xtitle="Suma entregada por el MINSAL en la fecha 27-05" ytitle="Comunas" :data="Comunas2"  label="Casos" > </bar-chart>


 </v-content>


</v-app>
   
</template>


<script>
import axios from "axios";
import Highcharts from 'highcharts'
export default {
  components: {
    highcharts: Chart,
  },

  name: 'App',
//"{ name: 'fotos',params:{id : item}}"
  data(){
    return{
      mapa:[
          ['Santiago', 1],
          ['Pudahuel', 900],
          ['Quilicura', 200],
          ['Puente alto', 541],
      ],

    chartOptions: {
				series: [{
					data: [1, 2, 3]
				}]
			},
    Comunas2:[
          [ 'Santiago', 6278],
          [ 'La Florida', 4550],
          [ 'Recoleta', 3623],
          [ 'Peñalolen', 4207],
          [ 'Maipu', 3765],
          [ 'Puente Alto', 6698],
          [ 'Independencia', 2923],
          [ 'San Bernardo', 2877],
          [ 'Quilicura', 3091],
          [ 'La Pintana', 2861],
          

    ],


    charData:{
//       
         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        dataset: {'borderWidth': 10}
    },
   
   
    }
  },
  methods:{
       //Region,Codigo region,Comuna,Codigo comuna,Poblacion,Casos Confirmados
            async getCasos(){
              let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto2/2020-05-18-CasosConfirmados.csv')        
               //let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto25/CasosActualesPorComuna_std.csv')
               // this.desserts = datos.data;
                    //var csv is the CSV file with headers
                //console.log(datos.data)

            
                   function csvJSON(csv){

                    var lines = csv.split("\n");
                    var result = [];
                    var Grafico = new Array();
                    var headers=lines[0].split(",");
                    for(var i=1;i<10;i++){
                        var obj = {};
                        var currentline = lines[i].split(",");
                       
                        for(var j=0;j<1;j++){
                            var rel = Grafico.concat([currentline[2],parseInt(currentline[5])]);

                        
                        }
                       result.push(rel)
                    }
                    //console.log(result.sort((a , b)=>b.localeCompare.a))
                   console.log(result.sort((a , b)=>b - a))
                   return result 
               }    
               this.Comunas = csvJSON(datos.data)
        
    },
    
       
  },
   created(){
            this.getCasos()
        },

  
  
}

</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

html,body {
  width:100%;
  height:100%;
}


#container {
  height: 500px; 
  min-width: 310px; 
  max-width: 800px; 
  margin: 0 auto; 
}
.loading {
  margin-top: 10em;
  text-align: center;
  color: gray;
} 


</style>





























// Prepare random data
var data = [
  
  ['DE.HH', 622],
  ['DE.RP', 866],
  ['DE.SL', 398],
  ['DE.BY', 785],
  ['DE.SN', 223],
  ['DE.ST', 605],
  ['DE.NW', 237],
  ['DE.BW', 157],
  ['DE.HE', 134],
  ['DE.NI', 136],
  ['DE.TH', 704],
  ['DE.', 361]
];








