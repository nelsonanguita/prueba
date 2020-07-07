<template >
    <v-app-bar app
              @click="drawer = !drawer" 
              color="#62B6CB"
              class="white--text"
              absolute
              >              
                <v-app-bar-nav-icon class="white--text" ></v-app-bar-nav-icon>
                <v-toolbar-title >Consultas</v-toolbar-title>

              <v-spacer></v-spacer>
        </v-app-bar>
   
</template>

<script>

export default {
  name: 'Cabecera',

  data(){
    return{
     
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












