<template >

<v-app>
  <Cabecera ></Cabecera>

  <v-content >

               <v-container>
                           
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
                         <v-img :aspect-ratio="16/9" src="">
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


 
 
  <Footer></Footer>
</v-app>
    
</template>


<script>
import Cabecera from "@/components/Cabecera";  
import Footer from "@/components/Footer";  

export default {
  name: 'App',
  components: {
       Cabecera,
       Footer,
       
  },
  data(){
    return{
     
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












