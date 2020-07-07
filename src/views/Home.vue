<template >
  <v-app>
    <Estadisticas></Estadisticas>

    <v-content class="text-center">
              <bar-chart v-if="false" color="grey lighten-2" adapter="chartjs" xAxisID:="Comunas"  xtitle="" ytitle="Comunas" :data="Comunas2"  label="Casos" > </bar-chart>
                   <v-divider></v-divider>
                              <v-divider></v-divider>
                         
    <mapChart></mapChart>
                              <v-divider></v-divider>
                              <v-divider></v-divider>

    </v-content>


  </v-app>   
</template>


<script>
import axios from "axios";
import Highcharts from 'highcharts'
import MapChart from '@/components/MapChart'
import Estadisticas from "@/components/Estadisticas";  

export default {
  components: {
    highcharts: Chart,
    mapChart: MapChart,
    Estadisticas
  },

  name: 'App',
//"{ name: 'fotos',params:{id : item}}"
  data(){
    return{
         
  }
  
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

































