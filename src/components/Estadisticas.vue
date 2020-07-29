<template>
  <div>
 
     <div class="container"> 
       <div class="row">
         <ul class="list-group">
               <div class="input-group">
                  <input
                    v-model="search"
                    type=" text"
                    placeholder="Buscar comuna"
                    class="form-control"
                    
                    onkeyup="javascript:this.value=this.value.toUpperCase();"
                    v-on:keyup.enter="agregarComuna"
                  />
                  <span class="input-group-btn">
                          <input type="button" class="btn btn-default" value="Agregar" v-on:click="agregarComuna" >
                      </span>  
                      <span class="input-group-btn">
                          <input type="button" class="btn btn-default" value="Limpiar" v-on:click="limpiar">
                      </span>  
                </div>
                                                              

                  <v-card :elevation="-1">
                       <v-list v-if="verLista" >
                          <v-list-item-group :multiple="multiple" color="light-blue" v-model="listaAgregar" >
                                <v-list-item
                                
                                  v-for="(item, i) in searchComuna"
                                  :key="i"
                                  v-bind:value="item.name"
                                >
                                <v-list-item-content >
                                  
                                 <v-select v-text="item.name">
                                      
                                 
                                 </v-select>

                                
                                </v-list-item-content>
                              
                            </v-list-item>
                        </v-list-item-group>
                      </v-list>
                  </v-card>
         </ul>
          
       </div>
               
               
  </div>
    <highcharts
      v-if="loaded"
      class="chart highcharts-figure"
      :options="chartOptions"
    ></highcharts>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Estadisticas",
  data() {
    return {
      chartOptions: {},
      informacion: [],
      fecha: [],
      loaded: false,
      verLista: false,
      info2: [],
       multiple: false,
      search: "",
      seleccion:"",
      listaAgregar:""
   

      //https://vuetifyjs.com/en/components/list-item-groups/
    };
  },
  async mounted() {
    this.getGrafico();
    this.loaded = false;

    await this.getInfo();
  },

  methods: {
    getGrafico() {
      this.chartOptions= {
        chart: {
          type: "line",
        },
        title: {
          text: "Casos Activos",
        },
        subtitle: {
          text: "Fuente: Minsal",
        },
        xAxis: {
          categories: this.fecha,
        },
        yAxis: {
          title: {
            text: "",
          },
        },
        plotOptions: {
           series: {
            animation: {
                duration: 4000
            }
        },
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: true,
          },
        },
        series: this.informacion,
      };
    },
    async getInfo() {
      // let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto46/activos_vs_recuperados_t.csv')

      let datos = await axios.get(
        "https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto19/CasosActivosPorComuna.csv"
      );
      let jsonObj = [];
      let arrFechas = [];
      let name = "";
      let data = [];
      let info = [];

      function getCSV(csv) {
        var lines = csv.split("\n");
        //lines seccion aparte
        var headers = lines[0].split(",");
        //arreglo de fechas
        for (let r = headers.length - 14; r < headers.length; r++) {
          arrFechas.push(headers[r]);
        }
          for (var i = 1; i < lines.length - 1; i++) {
            let data = lines[i].split(",");
            let obj = {};
            let totales = [];
            if (data[2] !== "Total" && !(data[2].indexOf("Desconocido ") > -1)) {
              name = data[2].toUpperCase();
                for (var j = data.length - 14; j < data.length; j++) {
                  totales.push(parseInt(data[j]));
                }
              info.push(new capturar(name, totales));
            }
        }
      }

      getCSV(datos.data);

      function capturar(name, tol) {
        this.name = name;
        this.data = tol;
      }

      let nuevo = [];
      let nameo = "PUDAHUEL";
      //function(){
      //    return info.filter((item)=> item.name.includes(this.name));
      // };
      nuevo = info.filter((item) => item.name.includes(nameo));
      this.fecha = arrFechas;
      this.info2 = info;
      this.informacion = nuevo;
      this.loaded = true;
      this.getGrafico();


    },
    agregarComuna(){
      
      function capturar(name, tol) {
          this.name = name;
          this.data = tol;
        }
        //this.search
      if (this.search!="") {
        let pregunta = this.buscarComuna(this.search)
        this.informacion.push(new capturar(pregunta[0].name, pregunta[0].data));
        this.search = "";
        this.getGrafico();
        pregunta = [];  
      } 
      

      
    },
    buscarComuna(val){
      if (val!="") {
        return this.info2.filter((item) =>
        item.name.includes(val.toUpperCase())
      );
      }
        
    },
    limpiar(){      
      let comunaPrincipal = "PUDAHUEL";
      this.informacion = this.info2.filter((item) => item.name.includes(comunaPrincipal));
      this.getGrafico();
      this.search = "";
     }
    
  },
  computed: {

    //agregar ordenamiento
    searchComuna: function() {
      return this.info2.filter((item) =>
        item.name.includes(this.search.toUpperCase())
      // 

      );

    },
  },
  watch: {
    search: function(val, oldval) {
      if (this.search != "") { 
        this.verLista = true;
        this.searchComuna.sort((a , b)=>b.name - a.name)

      } else {
        this.verLista = false;
      }

    },
       'listaAgregar': function (val, oldval) {
             this.search = val
             this.agregarComuna()
      }
  }

};
</script>

<style>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 360px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
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
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>


















