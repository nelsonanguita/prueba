<template>
  
  <v-card >
    <v-card-title >
      Total de Ventiladores a Nivel Nacional
        <v-spacer></v-spacer>

    </v-card-title>
    <v-data-table 
      :headers="headers"

      :items="desserts"
      :footer-props="{
          'items-per-page-options': [15, 20, 30, 40, 50]
      }"
      :items-per-page="15"
      :search="search"
       dense
       sortBy="Ventiladores"
       update: sort-desc
       
    

    ></v-data-table>
  </v-card>
</template>

<script>
 import mdiViewHeadline from '@mdi/js';

import axios from "axios";
  export default {
    data () {
      return {
        rowsPerPageItems: [10, 20, 30, 40],
        pagination: {
          rowsPerPage: 10
      },
        desserts:[],
        search: '',
        headers: [
          {
            //Ventiladores,total,disponibles,ocupados            text: 'Comuna',
            align: 'start',
            value: 'Comuna',
          },
          { text: 'Fecha', value: 'Ventiladores',filterable: false},
          { text: 'Disponibles', value: 'disponibles' ,filterable: false},
          { text: 'Ocupados', value: 'ocupados' ,filterable: false},
          { text: 'Total', value: 'total' ,filterable: false},

          //{ text: 'Iron (%)', value: 'iron', filterable: false},
        ],

           
        
      }
    },
    methods:{
            async getCasos(){
              let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto20/NumeroVentiladores_T.csv')        
               //let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto25/CasosActualesPorComuna_std.csv')
               // this.desserts = datos.data;
                    //var csv is the CSV file with headers
                        
                   function csvJSON(csv){

                    var lines = csv.split("\n");
                    var result = [];
                    var headers=lines[0].split(",");
                    for(var i=1;i<lines.length-1;i++){
                        var obj = {};
                        var currentline = lines[i].split(",");
                        for(var j=0;j<headers.length;j++){

                             // var myarray = currentline;
                             // edito la variable `myarray` dentro de `N`
                              // y le asigno el valor "13"
                            currentline[4] = parseInt(currentline[4]).toFixed().toString()
                            currentline[5] = parseInt(currentline[5]).toFixed().toString()
                            var filtered = currentline.filter(Boolean);
                            obj[headers[j]] = filtered[j];  
                            
                       }
                        result.push(obj);
                    }
                   
                   return result; 
                    }
                   this.desserts = csvJSON(datos.data)
                  this.desserts.sort((a , b)=>b - a)
               }        
        },
        created(){
            this.getCasos()
        },
            
  }
</script>