<template>
  <div class="container background">
    <UserBar></UserBar>
    <MenuSide></MenuSide>
    <v-container grid-list-md>
      <v-layout>
        <v-flex class="blue white--text text-center mb-4" xs12  >
          <h2>Book din Mødelokale</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md8 class="mb-4">
          <v-card>
        
           <v-container>
      <v-layout >
         <v-flex  @submit.prevent="newBooking">
          <v-flex xs-12 md-6>
          <p>Dato</p>
          <v-text-field v-model="newMode.dato" v-on:keyup.enter="newBooking"
            single-line
            solo
          ></v-text-field>
        </v-flex> 
             <v-flex xs-6>
        <p>Tidspunkt</p>
        <v-select id="form" v-model="newMode.fra" v-on:keyup.enter="newBooking"
          :items="hour"
          label="Fra"
          solo
        ></v-select>
           <v-select v-model="newMode.til" v-on:keyup.enter="newBooking"
          :items="hour"
          label="Til"
          solo
        ></v-select>
       </v-flex> 
             <v-flex xs-12>
          <p>Lokale</p>
          <v-select v-model="newMode.lokale" v-on:keyup.enter="newBooking"
          :items="lokale"
           solo
        ></v-select>
        </v-flex>   
        <v-layout>
          <v-flex>
           <v-btn @click="newBooking"  color="blue white--text">book</v-btn>
         </v-flex>
         <v-flex>
           <v-btn color="error white--text">aflyst</v-btn>
         </v-flex>
         </v-layout>
         
         </v-flex>
         
             
       </v-layout>
    
    </v-container>
           
          </v-card>
        </v-flex>

    
        <!-- Sidebar start here -->
        <v-flex xs12 md4 class="">
          <v-flex xs-12>
        
          <v-date-picker color="blue" 
           v-model="newMode.dato"
           show-current
           ></v-date-picker>
        

        </v-flex>
          <v-card xs-3>
            <v-card-title class="error white--text">
              <p> Ledige lokale</p>
            </v-card-title>
             <div v-for="(item) in lokale" :key="item.id">
               <v-layout my-5 py-5 px-3>
                 <v-flex p-x1> {{item}} </v-flex>
                 <v-btn class="blue white--text" @click="newBooking">Book</v-btn>
               </v-layout>
                 

             </div>
          </v-card>
         <!--  <v-card xs-3>
            <v-card-title class="error white--text">
              <p>Dine Booking</p>
            </v-card-title>
               <div v-for="(item, index) in picker" :key="item.id">
               <v-layout my-5 py-5 px-3>
                 <v-flex p-x1>{{item.fecha}} - {{item.fra}} - {{item.til}} {{item.local}} </v-flex>
                 <v-btn class="error" @click="aflyst(index)">Aflyst</v-btn>
               </v-layout>
                 

             </div>

          </v-card> -->
        </v-flex>
        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import UserBar from "@/components/UserBar.vue";
import MenuSide from "@/components/MenuSide.vue";
import {mapState} from "vuex";
import firebase from "firebase/app";
let db = firebase.database();
let modeRef = db.ref('mode');
export default {
  name:'App',
   components: {
    UserBar,
    MenuSide,
  },
  firebase: {
      mode: modeRef
  },
  data (){
    return{
      newMode:{
        dato:'', 
    fra:'',
    til:'',
    lokale:'',
    
             }
    }
  },
  methods: {
      newBooking (){
        modeRef.push(this.newMode);
       alert(`Account Created for ${this.email}`);
        this.newMode.dato = '';
        this.newMode.fra = '';
        this.newMode.til = '';
        this.newMode.lokale = '';
      }

  },
  computed: {
    ...mapState(['hour','lokale']), //global data check store/index.js

  },

}


</script>
