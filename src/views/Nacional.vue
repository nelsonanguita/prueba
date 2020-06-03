<template>
  
  <v-card >

    <v-card-title >
        Total de Casos Diarios Acumulados 
      <v-text-field
        hide-details
      ></v-text-field>
              <v-spacer></v-spacer>

      <div  >

        <template >
      
    </template>
            <v-responsive :ratio="16/9" >
                        <v-data-table 
                           :data="headers"
                          :headers="headers"
                          :items="desserts"

                          :search="search"
                          dense
                          sortBy="Fecha"
                          update: sort-desc
                          flex display-3
                         class="elevation-1"
                         :header-row-style="{textAlign: 'justify'}"
                       >
                       <template v-slot:header.Fecha="{ header }">
                        {{ header.text.toUpperCase() }}
                      </template> 
                        </v-data-table>
            </v-responsive>
      </div>
    </v-card-title>

       
    <Comunas/>  
  </v-card>
</template>

<script>
 import mdiViewHeadline from '@mdi/js';

import axios from "axios";
  export default {
    data () {
      return {
        desserts:[],
          pagination: {
          sortBy: 'Fecha',
          descending: true
        },
        search: '',
        headers: [
          {
//            Fecha,Casos nuevos con sintomas,Casos totales,Casos recuperados,Fallecidos,
//             Casos activos,Casos nuevos sin sintomas,Casos nuevos totales
            text: 'Fecha',
            align: 'Center',
            value: 'Fecha',
          },
           { text: 'Recuperados', value: 'Casos recuperados' ,filterable: false},
          { text: 'Activos', value: 'Casos activos', filterable: false},
          { text: 'Fallecidos', value: 'Fallecidos' ,filterable: false},
          { text: 'Nuevos con sintomas', value: 'Casos nuevos con sintomas',filterable: false},
          { text: 'Nuevos sin sintomas', value: 'Casos nuevos sin sintomas', filterable: false},
          { text: 'Nuevos totales', value: 'Casos nuevos totales', filterable: false},
          { text: 'Casos totales', value: 'Casos totales' ,filterable: false},
        ],

           
        
      }
    },
    methods:{
            async getNacional(){
              let datos = await axios.get('https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales_T.csv')        
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
                            currentline[3] = parseInt(currentline[3]).toFixed().toString() //Casos recuperados
                            currentline[5] = parseInt(currentline[5]).toFixed().toString() //Casos activos
                            currentline[4] = parseInt(currentline[4]).toFixed().toString() //Fallecidos
                            currentline[1] = parseInt(currentline[1]).toFixed().toString() //Casos nuevos con sintomas
                            currentline[6] = parseInt(currentline[6]).toFixed().toString() //Casos nuevos sin sintomas
                            currentline[7] = parseInt(currentline[7]).toFixed().toString() //Casos nuevos totales
                            currentline[2] = parseInt(currentline[2]).toFixed().toString() //Casos totales
                         obj[headers[j]] = currentline[j];  

                       }
                        result.push(obj);
                    }
                   
                   return result; 
                    }
                   this.desserts = csvJSON(datos.data)
                   //this.desserts.filter(Boolean)
               },
               customSort(items, index, isDescending) {
                // The following is informations as far as I researched.
                // items: 'food' items
                // index: Enabled sort headers value. (black arrow status).
                // isDescending: Whether enabled sort headers is desc
                items.sort((a, b) => {
                    if (index === 'fecha') {
                        if (isDescending) {
                            return b.fecha - a.fecha;
                        } else {
                            return a.fecha - b.fecha;
                        }
                    }
                });

                return items;
              }  
               
               

        },
        created(){
            this.getNacional()
        },
                    
  }
</script>
