<template>
  
  <v-card >
    <v-card-title dark>
      10 comunas con más casos
        <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        append-icon="search"
        label="Busque una Comuna"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table  

      :headers="headers"
      :items="desserts"
      :footer-props="{
          'items-per-page-options': [10]
      }"
      :items-per-page="10"
      :search="search"
       dense
       sortBy="Casos Confirmados"
       update: sort-desc
        
       
  
    
    >
    
    </v-data-table>
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
        rowsPerPage: 20
      },
        desserts:[],
        search: '',
        headers: [
          {
//            Region,Codigo region,Comuna,Codigo comuna,Poblacion,Casos Confirmados
            text: 'Comuna',
            align: 'start',
            value: 'Comuna',
          },
          { text: 'Población', value: 'Poblacion',filterable: false},
          { text: 'Casos Confirmados', value: 'Casos Confirmados' ,filterable: false},
          { text: 'Region', value: 'Region' ,filterable: false},
          { text: 'Codigo', value: 'Codigo region' ,filterable: false},
          //{ text: 'Iron (%)', value: 'iron', filterable: false},
        ],

           
        
      }
    },
    methods:{
            async getCasos(){
              let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto2/2020-05-11-CasosConfirmados.csv')        
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

               }        
        },
        created(){
            this.getCasos()
        },
            
  }
</script>