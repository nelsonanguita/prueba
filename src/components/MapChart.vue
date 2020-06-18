<template>

   <div>  
                                   <h1 class="text-center"> {{selected}} </h1>

    <div >
        <v-select v-model="selected" :options="options" >  
        </v-select>
    </div >
    
     
    
    <highcharts v-if="loaded"  :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts> 
        
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
        mapa: '',
        options: ['Arica','Santiago','Valparaiso','Maule','Libertador Bernardo Ohiggins','Santiago2'],
        selected:'Seleccione una región'
              
    }
  },
  async mounted(){
    this.filldata(this.mapa)
    this.loaded = false
    this.mapa ='Santiago'
   await this.getFavoriot()

  },
  methods:{
    

  filldata(){
         this.mapOptions = {
                      
              chart: {
                map: this.mapa//this.mapa //''
              },
            
              title: {
                text: 'Caso al día de 14-06 '
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

          let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto2/2020-06-15-CasosConfirmados.csv'); 

          function csvJSON(csv){

                    let lines = csv.split("\n");
                    var result = [];
                    let headers=lines[0].split(",");
                    for(let i=1;i<lines.length-1;i++){
                        let obj = [];
                        let currentline = lines[i].split(",");
                              
                        for(let j=0;j<1;j++){
                                                    
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
    
},

watch:{
      'selected': function (val, oldval) {
              this.mapa = val  
              this.filldata()
      }
    },

created(){
 // this.getFavoriot()
}
 
}
</script>
 <style scoped>
.map {
  min-height:800px;
}
 </style>












 