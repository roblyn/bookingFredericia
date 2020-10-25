<template>
    <div>
        <v-navigation-drawer app class="blue">
     <router-link class="white--text" to="/Category" > <img
        src="../assets/logo.png"
        alt=""
        width="227"
        height="78"
        class="mt-12 ml-4"
      /></router-link>
      <ul class="white--text mt-12">
        <div class="my-6">
          <v-layout row>
            <v-flex xs-4 class="outlined">
              <img src="@/assets/meeting-room.png" alt=""
          width="24"
          height="24"
        >
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs4>
           <router-link class="white--text" to="/modelokale" >Mødelokaler</router-link>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs-4>
           <router-link  class="white--text" to="/modelokale" ><img class="ml-12" src="@/assets/next.png" alt=""
       width="24"
          height="24"></router-link>
         </v-flex>
          </v-layout>
        </div>
         <div class="my-6">
          <v-layout row>
            <v-flex xs-4>
              <img src="@/assets/car.png" alt=""
          width="24"
          height="24"
        >
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs4>
           <router-link class="white--text" to="/modelokake" >Biler</router-link>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs-4>
           <router-link  class="white--text" to="/modelokake" ><img class="ml-12" src="@/assets/next.png" alt=""
       width="24"
          height="24"></router-link>
         </v-flex>
          </v-layout>
        </div>
           <div class="my-6">
          <v-layout row>
            <v-flex xs-4>
              <img src="@/assets/pan.png" alt=""
          width="24"
          height="24"
        >
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs4>
           <router-link class="white--text" to="/kantine" >Kantine</router-link>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs-4>
           <router-link  class="white--text" to="/modelokake" ><img class="ml-12" src="@/assets/next.png" alt=""
       width="24"
          height="24"></router-link>
         </v-flex>
      
          </v-layout>
        </div>
           <div class="my-6">
          <v-layout row>
            <v-flex xs-4>
              <img src="@/assets/cleaning.png" alt=""
          width="24"
          height="24"
        >
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs4>
           <router-link class="white--text" to="/modelokake" >Rengøringsprodukt</router-link>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs-4>
           <router-link  class="white--text text" to="/modelokake" ><img class="ml-12" src="@/assets/next.png" alt=""
       width="24"
          height="24"></router-link>
         </v-flex>
          </v-layout>
        </div>
           <div class="my-6">
          <v-layout row>
            <v-flex xs-4>
              <img src="@/assets/guard.png" alt=""
          width="24"
          height="24"
        >
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs4>
           <router-link class="white--text" to="/modelokale" >Rådhusbetjent</router-link>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs-4>
           <router-link  class="white--text" to="/modelokale" ><img class="ml-12" src="@/assets/next.png" alt=""
       width="24"
          height="24"></router-link>
         </v-flex>
          </v-layout>
        </div>
        <div class="my-6">
          <v-layout row>
            <v-flex xs-4>
              <img src="@/assets/mail.png" alt=""
          width="24"
          height="24"
        >
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs4 outlined>
           <router-link class="white--text" to="/Kontakt" >Kontakt</router-link>
         </v-flex>
         <v-spacer></v-spacer>
         <v-flex xs-4>
           <router-link  class="white--text" to="/Kontakt" ><img class="ml-12" src="@/assets/next.png" alt=""
       width="24"
          height="24"></router-link>
         </v-flex>
          </v-layout>
        </div>
      </ul>




    </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    name: 'MenuSide'    
}
</script>