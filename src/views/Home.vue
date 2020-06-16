<template >
  <v-app>
    <v-content class="text-center" d-flex center mb-6 >
          <h1 > Santiago </h1>
              <bar-chart v-if="false" color="grey lighten-2" adapter="chartjs" xAxisID:="Comunas"  xtitle="" ytitle="Comunas" :data="Comunas2"  label="Casos" > </bar-chart>
          <mapChart></mapChart>
    </v-content>


  </v-app>   
</template>


<script>
import axios from "axios";
import Highcharts from 'highcharts'
import MapChart from '@/components/MapChart'

export default {
  components: {
    highcharts: Chart,
    mapChart: MapChart

  },

  name: 'App',
//"{ name: 'fotos',params:{id : item}}"
  data(){
    return{
     
    chartOptions: {
				series: [{
					data: []
				}]
			},
    Comunas2:[
          [ 'Santiago', 8818],
          [ 'La Florida', 6879],
          [ 'Recoleta', 4716],
          [ 'Peñalolen', 6360],
          [ 'Maipu', 6272],
          [ 'Puente Alto', 10804],
          [ 'Independencia', 4056],
          [ 'San Bernardo', 4688],
          [ 'Quilicura', 4591],
          [ 'La Pintana', 4674],
          ],
    }
  },
  

  
  
}

</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

html,body {
  width:100%;
  height:100%;
}





</style>

































