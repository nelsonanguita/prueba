<template>

   <div>  
        <h1 class="text-center"> {{selected}} </h1>

        <div >
            <v-select v-model="selected" :options="options" >  
            </v-select>
        </div >
    
    <highcharts  v-if="loaded"  :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts> 
        
    </div> 
    
</template>

<script>

import axios from "axios";
import MapChart from '@/components/MapChart'
import "vue-select/dist/vue-select.css";

export default {
components: {
    mapChart: MapChart
      
    },
  data () {

    return {
        key:'',
        mapOptions: {},
        loaded: false,
        casos: [],
        mapa: 'Santiago',
        options: ['Arica','Antofagasta','Santiago','Valparaiso','Maule','Libertador Bernardo Ohiggins','Metropolitana'],
        selected:'Seleccione una Región',
              
    }
  },
  async mounted(){
    this.filldata(this.mapa)
    this.loaded = false
    //this.mapa = 'Santiago'
   await this.casosActivos()

  },
  methods:{
    

      filldata(){
         this.mapOptions = {
                      
              chart: {
                map: this.mapa//this.mapa //''
              },
            
              title: {
                text: 'Caso "ACTIVOS" al día de 2020-06-28 '
              },
              subtitle: {
                text: ''//'Caso al día de 14-06 '
              },
              legend: {
                  title: {
                      text: 'Casos en miles'
                  }
              },
              mapNavigation: {
                enabled: true,
                buttonOptions: {
                  alignTo: 'spacingBox'
                }
              },
              colorAxis: {
                min: 0
              },     
              
             
              series: [{
                data : this.casos,

                name: 'Casos',
                keys: ['NOM_COM', 'value'],
                joinBy: 'NOM_COM',
                
                states: {
                  hover: {
                    color: '#E03B3B'
                  }
                },
                dataLabels: {
                  enabled: true,
                  format: '{point.properties.NOM_COM}',
                //format: '{point.dato}'
                },
                allAreas: true,

              },
              ]
      
         }
            
   },
   async getFavoriot(){

          let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto2/2020-06-28-CasosConfirmados.csv'); 
         
         function csvJSON(csv){

                    let lines = csv.split("\n");
                    var result = [];
                    let headers=lines[0].split(",");
                    for(let i=1;i<lines.length-1;i++){
                        let obj = [];
                        let currentline = lines[i].split(",");
                              
                        for(let j=0;j<1;j++){
                         //2-comuna 5-cantidad 
                         //var filtered = currentline.filter(Boolean);
                        var a =[currentline[2] , parseInt(currentline[5])] 

                       }
                      result.push(a);    
                    }
                   return result;
                    }


                this.casos = csvJSON(datos.data)
                this.loaded = true
                this.filldata()
    },

    async casosActivos(){
                let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto19/CasosActivosPorComuna_std.csv'); 
             var result2 = [];
              const myObj = []

                // 2-comuna 6-cantidad
                function csvJSON(csv){
                      var a =[]
                    let lines = csv.split("\n");
                    var result = [];

                    let headers =lines[0].split(",");
                     
                    let val = lines[lines.length-2].split(","); 
                    var element = val[5]
                      

                    for(let i=1;i<lines.length-1;i++){
                        let obj = [];
                        let currentline = lines[i].split(",");
                     
                        for(let j=0;j<1;j++){
                         //2-comuna 5-cantidad 
                         //var filtered = currentline.filter(Boolean);

                         if (element===currentline[5])//currentline[5]==="2020-07-01")
                         {
                           if (!(currentline[5] in myObj)) {
                            myObj[currentline[5]] = true
                            result2.push(currentline[5])
                            
                          }
                          
                          a =[ currentline[2] , parseInt(currentline[6]) ]
                          result.push(a);
                         }

                       }
                          
                    }
                   return result;
                    }
            


                this.casos = csvJSON(datos.data)
                this.loaded = true
                this.filldata()
    }
       
},

watch:{
      'selected': function (val, oldval) {
             this.mapa = val
             this.filldata()

      }
    },

created(){
  }
}

</script>
 <style scoped>
.map {
  min-height:800px;
}
 </style>












 