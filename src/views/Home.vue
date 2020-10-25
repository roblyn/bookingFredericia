<template>
<div class="container">
  <v-container>
    <v-layout wrap justify-center align-center style="height:200px">
      <router-link  to="/"><img src="../assets/logo.png" alt="" /></router-link>
    </v-layout>
    <v-layout wrap justify-center gray>
      <v-flex  class=" pt-6 px-12" xs12>
        <h3  class="blue--text text-center title">Brugernavn </h3>
      </v-flex>
      <v-flex class=" pt-6 px-12" xs12>
       <v-text-field solo name="password" v-model="email"></v-text-field>
     
    
      </v-flex>
      <v-flex class=" pt-6 px-12" xs12> 
        <h3 class="blue--text text-center title">Adgangskode</h3>
      </v-flex>
      <v-flex class=" pt-6 px-12" xs12>
         <v-text-field name="password" v-model="password"
    solo
    :append-icon="value ? 'visibility' : 'visibility_off'"
    @click:append="() => (value = !value)"
    :type="value ? 'password' : 'text'"
    
    ></v-text-field>
        </v-flex>
        <v-flex class=" pt-6 px-12" xs12 md6>
              <v-btn v-on:click="login"  color="blue white--text">Login</v-btn>
          </v-flex>
          
          <v-flex class="text-right pt-6 px-12"  xs12 md6>
            <a class="blue--text" href="">Bestil ny adgangskode</a>
          
          </v-flex>
        <v-flex class="text-right pt-6 px-12" xs12 md12>
          <router-link to="/Signup"><a class="blue--text" href="">Aktive bruger</a></router-link>
        </v-flex>
     
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import {mapState} from "vuex";
  export default {
    computed: {
    ...mapState (['user'])
  },
  name:'login',
    data: () => ({
      email: '',
      password:'',
      
      valid: true,
         value: true,
    }),
    methods: {
      login: function(e) {
        firebase.auth()
        .signInWithEmailAndPassword (this.email, this.password)
        .then(
          user => {
              alert(`You are logged in as ${this.email}`);
              
            this.$router.go({path: this.$router.path});
          },
          err => {
            alert(err.message);
          }
        );
          e.preventDefault();
      }
    }
  };
</script>

