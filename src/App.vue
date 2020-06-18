<template >
<v-app>
  <v-content >

               <v-container>

              <v-app-bar app 
              @click="drawer = !drawer" 
              color="#62B6CB"
              class="white--text"
              >              
              <v-app-bar-nav-icon class="white--text" ></v-app-bar-nav-icon>
              <v-toolbar-title >Consultas</v-toolbar-title>

              <v-spacer></v-spacer>
                                     
              </v-app-bar>
                                             
                    <v-navigation-drawer app v-model="drawer" temporary >
                    
                          <v-app-bar  
                          @click="drawer = !drawer" 
                          color="#62B6CB"
                          class="white--text"
                          > 
                          
                          <v-app-bar-nav-icon class="white--text" ></v-app-bar-nav-icon>
                          <v-toolbar-title ></v-toolbar-title>
                          
                                                
                          </v-app-bar>
                          <div> 
                         <v-img :aspect-ratio="16/9" src="http://www.unionprofesional.com/wp-content/uploads/2020/04/COVID-19-corona-coronavirus-696x492.jpg">
      </v-img>             
                    </div>
                                                    <v-spacer></v-spacer>

                          <v-divider></v-divider>

                            <v-list>
                              <v-list-item-group v-model="model" mandatory color="#62B6CB">
                                <v-list-item
                                  v-for="(item, i) in items"
                                  :key="i"
                                  :to="{ name: item.ref }"

                                >
                                  <v-list-item-icon>
                                    <v-icon v-text="item.icon" color="#62B6CB"></v-icon>
                                  </v-list-item-icon>
                                  
                                  <v-list-item-content  @click="drawer = !drawer"  >
                                    <v-list-item-title v-text="item.text" class="blue--text" ></v-list-item-title>
                                  </v-list-item-content>


 

                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          
                    </v-navigation-drawer>
                   
               
                </v-container>    
      
     
      <v-container>

              <router-view/>
      </v-container>

          </v-content>


      <v-card height="100">
          <v-footer
            absolute
            color="#62B6CB"

          >
            <v-col
            class="py-4 text-center white--text" cols="12"
            >
              {{ new Date().getFullYear() }} — <strong>NAAN</strong>
            </v-col>
          </v-footer>
        </v-card>

</v-app>
   
</template>


<script>

export default {
     components: {
  },

  name: 'App',

  data(){
    return{
  
    chartData:{
      '2020-05-09' : 8,
      '2020-05-14' : 3,
      '2020-05-23' : 7,
      '2020-05-24' : 1,

    },
     drawer:null,
     items: [
     
        {
          icon: 'mdi-chart-line',
          text: 'Graficos',
          ref: 'Home',
        },    
        {
          icon: 'mdi-chart-line',
          text: 'Casos de hoy',
          ref: 'Nacional',
        },
     
        {
          icon: 'mdi-chart-areaspline',
          text: 'Casos por comuna',
            ref: 'Comuna',
        },
         {
          icon: 'mdi-chart-bar',
          text: 'Cuarentenas Activas',
            ref: 'CuarentenasActivas',
        },
        {
          icon: 'mdi-equalizer-outline',
          text: 'Ventiladores',
            ref: 'Ventiladores',
        },
      ],
      model: 0    
    }
     
  },

};



  

</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

html,body {
  width:100%;
  height:100%;
}



</style>












