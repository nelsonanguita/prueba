<template>
  <highcharts v-if="loaded"  :constructor-type="'mapChart'" :options="mapOptions" class="map"></highcharts>
</template>

<script>
import axios from "axios";

export default {
  data () {

    return {
        mapOptions: {},
        loaded: false,
        casos: [],
              
    }
  },
  async mounted(){
    this.filldata()
    this.loaded = false

   await this.getFavoriot()

  },
  methods:{
    

  filldata(){
         this.mapOptions = {
           
              chart: {
                map: 'myMapName'
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
           console.log("getfavooo")
          let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto2/2020-06-12-CasosConfirmados.csv'); 
          
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












 