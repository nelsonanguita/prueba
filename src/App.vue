<template>
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
            class="py-4 text-center white--text"              cols="12"
            >
              {{ new Date().getFullYear() }} — <strong>NAAN</strong>
            </v-col>
          </v-footer>
        </v-card>

</v-app>
   
</template>


<script>
  import zingchartVue from 'zingchart-vue';

export default {
    components: {
    zingchart: zingchartVue
  },
  name: 'App',
  data(){
    return{
    
     drawer:null,
     items: [
     
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
      model: 0,
      chartData: {
      type: "hbar", //pie mixed "hbar" tilemap  
     
      cache: {
        data: true
      },
        
      plot: {
        borderColor: "#2B313B",
        borderWidth: 6,
        // slice: 90,
        valueBox: {
          placement: 'out',
          text: '%t\n%npv%',
          fontFamily: "Open Sans",
          height: 10,
          

        },
        tooltip:{
          fontSize: '30',
          fontFamily: "Open Sans",
          padding: "5 10",
          text: "%npv%"
        },
        animation:{
          effect: 6, 
          method: 5,
          speed: 1400,
          sequence: 2,
          delay: 10
        }
      },
    
      title: {
        fontColor: "#8e99a9",
        text: 'Las 10 comunas con más contagios',
        align: "center",
        offsetX: 10,
        fontFamily: "Open Sans",
        fontSize: 25
      },
      subtitle: {
        offsetX: 10,
        offsetY: 10,
        fontColor: "#8e99a9",
        fontFamily: "Open Sans",
        fontSize: "16",
        text: 'Hasta el día',
        align: "center"
      },
      plotarea: {
        margin: "100 0 0 0"  
      },
      series : [
        {
          values : [11.38],
          text: "Santiago",
          backgroundColor: '#50ADF5',
        },
        {
          values: [56.94],
          text: "Osorno",
          backgroundColor: '#FF7965',
          detached:true
        },
        {
          values: [14.52],
          text: 'Temuco',
          backgroundColor: '#FFCB45',
          detached:true
        },
        {
          text: 'Villarica',
          values: [9.69],
          backgroundColor: '#6877e5'
        },
        {
          text: 'San Fernando',
          values: [7.48],
          backgroundColor: '#6FB07F'
        }
      ]
}

    }
     
  }
};

  

  

</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

html,body {
  width:100%;
  height:100%;
}
#chartData {
  width:100%;
  height:100%;
  min-height:250px;
}
.zc-ref {
  display: none;
}
</style>












