<template>
    <div>     
      <highcharts v-if="loaded" class="chart highcharts-figure" :options="chartOptions"></highcharts>
    </div>
</template>


<script>

//import axios from "axios";
//import MapChart from '@/components/MapChart'
//import "vue-select/dist/vue-select.css";
//import Chart from './components/Chart.vue'
import axios from "axios";

export default {
      name: 'Estadisticas',
        data(){
            return{
                chartOptions:{},
                informacion:[],
                fecha:[],
                loaded: false,
            }            
        },
 async mounted(){
    this.getGrafico()
    this.loaded = false

   await this.getInfo()

  },

methods:{
    getGrafico(){
        this.chartOptions = {
            
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Casos Activos'
                },
                subtitle: {
                    text: 'Fuente: Minsal'
                },
                xAxis: {
                    categories : this.fecha
                   
                },
                yAxis: {
                    title: {
                    text: ''
                    }
                },
                plotOptions: {
                    line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                    }
                },
                series: this.informacion
                    /*[
                         {
                    name: 'Recuperados',
                    data: [1234,1203,34,234,2342,3,2344,4,2324,3234,5,9,2,9,0,5,1,0,0,0,1,2,3,4,1,2,5,7,5,2,3,4,5]
                },
                    ]
                 // this.informacion
                    */      
               
        }
    },
     async getInfo(){
         
          // let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto46/activos_vs_recuperados_t.csv')        
           
           let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto19/CasosActivosPorComuna.csv')
           let jsonObj = [];
           let arrFechas = []
           var info = []
           let name =""
           let data =[]
          

           function getCSV(csv) {
            var lines = csv.split("\n");
            //lines seccion aparte
            var headers = lines[0].split(',');
             //arreglo de fechas
            for (let r = headers.length-14; r < headers.length; r++) {
                arrFechas.push(headers[r])                
            }
              
            for(var i = 1; i < lines.length-1; i++) {
                let data = lines[i].split(',');
                let obj = {};
                let totales = []
                if ((data[2]=="Pudahuel")||(data[2]=="Santiago")||(data[2]=="Puente Alto")||(data[2]=="Cerro Navia")||(data[2]=="")){
                      
                    name = data[2]
                    for(var j = data.length-14; j < data.length; j++) {
                        totales.push(parseInt(data[j])   ) 

                    }
                    info.push(new capturar(name,totales))
                }
                
                }
            }

                getCSV(datos.data)
               
                function capturar(name,tol) {
                    this.name=name
                    this.data=tol
                    
                }
                
                this.fecha = arrFechas
                this.informacion = info
                this.loaded = true
                this.getGrafico()

          
}
        
},

created(){
   //  this.getGrafico()
   // this.getInfo()
}
}
        
</script>

<style>
            .highcharts-figure, .highcharts-data-table table {
        min-width: 360px; 
        max-width: 800px;
        margin: 1em auto;
        }

        .highcharts-data-table table {
            font-family: Verdana, sans-serif;
            border-collapse: collapse;
            border: 1px solid #EBEBEB;
            margin: 10px auto;
            text-align: center;
            width: 100%;
            max-width: 500px;
        }
        .highcharts-data-table caption {
        padding: 1em 0;
        font-size: 1.2em;
        color: #555;
        }
        .highcharts-data-table th {
            font-weight: 600;
        padding: 0.5em;
        }
        .highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
        padding: 0.5em;
        }
        .highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
        background: #f8f8f8;
        }
        .highcharts-data-table tr:hover {
        background: #f1f7ff;
        }
    
</style>























