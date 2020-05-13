<template >
  
  <v-card >
    <v-card-title >
      Comunas con Cuarentenas Activas y Futura 
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
          'items-per-page-options': [15, 20, 30, 40, 50]
      }"
      
      :items-per-page="20"
      :search="search"
       dense
        sortBy="Nombre"
        update: sort-asc
           group-by="Estado"
        
    >
     
    </v-data-table>
    <Comunas/>  
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
//  ID,Nombre,Estado,Alcance,Fecha de Inicio,
//Fecha de Término,Código CUT Comuna,Detalle,Superficie en m2,Perímetro en m
            text: 'Comuna',
            align: 'start',
            value: 'Nombre',
          },
          { text: 'Estado', value: 'Estado',filterable: false},
          { text: 'Alcance', value: 'Alcance' ,filterable: false},
          { text: 'Fecha de Inicio', value: 'Fecha de Inicio' ,filterable: false},
          { text: 'Fecha de Término', value: 'Fecha de Término' ,filterable: false},
          { text: 'Detalle', value: 'Detalle', filterable: false},
        ],

           
        
      }
    },
    methods:{
            async getCuarentenaA(){
              let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto29/Cuarentenas-Activas.csv')        
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
                            obj[headers[j]] = currentline[j];  
                       }
                        result.push(obj);
                    }
                   
                   return result; 
                    }
                   this.desserts = csvJSON(datos.data)
           
               }        
        },
        created(){
            this.getCuarentenaA()
        },
            
  }
</script>