    <template >
    
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
   
</template>

<script>

export default {
  name: 'Footer',

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












