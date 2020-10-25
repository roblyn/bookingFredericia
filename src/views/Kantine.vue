<template>
  <div class="container background">
    <UserBar></UserBar>
    <MenuSide></MenuSide>
    <v-container grid-list-md>
      <v-layout>
        <v-flex class="blue white--text text-center mb-4" xs12>
          <h2>Bestil maden</h2>
        </v-flex>
        
      </v-layout>
      
      <v-layout row wrap> 
        <v-flex>  
          <v-flex  xs-12 md-6> <span>Afdeling</span>
        <v-select id="form" v-model="newAfdeling"
        :items="afdeling"
        label="afdeling"
        solo>
      </v-select></v-flex>
         <v-flex  xs-12 md-6> 
           <v-date-picker color="blue" 
           v-model="newDate"
           show-current
           ></v-date-picker>
           </v-flex>
        <v-flex  xs-12 md-6><span>Lokale</span>
        <v-select id="form" v-model="newLokale"
        :items="lokale"
        label="Lokal"
        solo>
        </v-select></v-flex>
           <v-flex  xs-12 md-6>   <p>Tidspunkt</p>
        <v-select id="form" v-model="newFra" v-on:keyup.enter="newBooking"
          :items="hour"
          label="Fra"
          solo
        ></v-select></v-flex>
          <v-flex><v-select v-model="newTil" v-on:keyup.enter="newBooking"
          :items="hour"
          label="Til"
          solo
        ></v-select></v-flex>
           <v-flex>
             <span>Konto eller psp</span>
            <v-text-field v-model="konto" outlined=""></v-text-field>
           </v-flex>
        </v-flex>
        
      </v-layout>
      <v-layout wrap md-6 v-for="(item, index) in products" :key="item.title">
     
        <v-flex xs-6>

          <v-list-item>
            <v-list-item-content>
            
              <v-list-item-title> {{ item.name }}</v-list-item-title>
             
              <v-list-item-subtitle>{{ item.description}}</v-list-item-subtitle>
              <v-divider v-if="index + 1 < products.length" :key="index"></v-divider>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
        <v-flex xs-4>
                
               <!-- <v-btn @click="item.cantidad++" >+</v-btn> -->
               <input type="number" v-model="item.cantidad" :min="1" :max="99"  controls 
               outlined >
               <!-- <v-btn @click="item.cantidad--" >-</v-btn> -->
          </v-flex> 
                 <v-flex xs-3 v-model="item.pris">
               {{item.pris}}
          </v-flex> 
          <v-flex>
      
          </v-flex>
          
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import UserBar from "@/components/UserBar.vue";
import MenuSide from "@/components/MenuSide.vue";
import {mapState} from 'vuex';
import firebase from "firebase/app";
let modeRef = db.ref('mode');
/*
export default {
  name: "App",
  components: {
    UserBar,
    MenuSide,
  },
  data() {
    return {
      newAfdeling:'',
      newLokale:'',
      newTil:'',
      newFra:'',
      newDate:'',
      konto:'',
            
        products: [
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            cantidad: 0,
            pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
        {
          name: "Morgenmad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             cantidad: 0,
             pris: '25 kr stk'
        },
      ],
      total:25,
    };
    
  
  },
  computed: {
    ...mapState(['afdeling','lokale','hour'])
  },
  methods: {
     decrement() {
      if (this.item.cantidad === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.item.cantidad--;
      }
    }

  },
   
};*/
export default {
  name:'App',
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
  }

}


</script>
