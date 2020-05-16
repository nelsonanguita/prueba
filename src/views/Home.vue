<template >
<v-app>
  <v-content class="text-center">
         <h1 > 10 comunas con mas contagios </h1>
        <bar-chart  :labels="Comunas" xtitle="Suma entregada por el MINSAL en la fecha 16-05" ytitle="Comunas" :data="Comunas" label="Casos"> </bar-chart>

 </v-content>




</v-app>
   
</template>


<script>
import axios from "axios";
export default {
  name: 'App',
//"{ name: 'fotos',params:{id : item}}"
  data(){
    return{
    Comunas:[
          [ 'Santiago', 1873],
          [ 'Puente Alto', 1658],
          [ 'La Florida', 1071],
          [ 'Recoleta', 1028],
          [ 'Independencia', 992],
          [ 'Punta Arenas', 858],
          [ 'Maipu', 844],
          [ 'Quilicura', 826],
          [ 'Penalolen', 779],
          [ 'San Bernardo', 773]
    ],

    charData:{
//       
         
    
    },
   
   
    }
  },
  methods:{
       //Region,Codigo region,Comuna,Codigo comuna,Poblacion,Casos Confirmados
            async getCasos(){
              let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto2/2020-05-11-CasosConfirmados.csv')        
               //let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto25/CasosActualesPorComuna_std.csv')
               // this.desserts = datos.data;
                    //var csv is the CSV file with headers
                //console.log(datos.data)

            
                   function csvJSON(csv){

                    var lines = csv.split("\n");
                    var result = [];
                    var Grafico = new Array();
                    var headers=lines[0].split(",");
                    for(var i=1;i<6;i++){
                        var obj = {};
                        var currentline = lines[i].split(",");
                       
                        for(var j=0;j<1;j++){
                            var rel = Grafico.concat([currentline[2],parseInt(currentline[5])]);

                        
                        }
                       result.push(rel)
                    }
                    //  console.log(result.sort((a , b)=>b.localeCompare.a))

                   return result 
               }    
               // this.Comunas = csvJSON(datos.data)
        
    },
    
       
  },
   created(){
            this.getCasos()
        }
  
}

</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

html,body {
  width:100%;
  height:100%;
}



</style>












