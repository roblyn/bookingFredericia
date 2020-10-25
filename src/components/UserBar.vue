<template>
  <div>
     <v-toolbar class="lightblue white--text">
      <v-toolbar-title v-if="isLoggedIn"  >Welcome!!! {{currentUser}} </v-toolbar-title>
        <v-spacer></v-spacer>
   <v-btn @click="logout" class="lightblue white--text">Logud</v-btn>
    </v-toolbar>
              
  </div>
</template>



<script>
import firebase from 'firebase/app';
import {mapActions, mapState} from "vuex";
export default {
  name:'UserBar',
data() {
    return {
        isLoggedIn: false,
        currentUser: false
    }
  },
  
  methods: {
    logout: function (){
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.go({path: this.$router.path});
      });
    }
   
  },
  computed: {
    ...mapState (['Users'])
  },
  created() {
      if(firebase.auth().currentUser){
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
      }
  },

  
    

}

</script>