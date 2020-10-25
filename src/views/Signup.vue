<template>
  <div class="container">
    <v-container>
      <v-layout wrap justify-center align-center style="height:200px">
        <router-link to="/"><img src="../assets/logo.png" alt=""/></router-link>
      </v-layout>
      <v-layout wrap justify-center gray>
        <v-flex class=" pt-6 px-12" xs12>
          <h3 class="blue--text text-center title">Email</h3>
          <v-text-field name="password" v-model="email" solo></v-text-field>
          <h3 class="blue--text text-center title">Password</h3>
          <v-text-field
            name="password"
            v-model="password"
            solo
            :append-icon="value ? 'visibility' : 'visibility_off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
          ></v-text-field>
        </v-flex>
        <v-flex>
          <v-btn v-on:keyup.enter="SignUp" @click="register" color="success"
            >Signup</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapState } from "vuex";
export default {
  computed: {
  
  },
  data() {
    return {
      email: "",
      password: "",

      valid: true,
      value: true,
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`Account Created for ${this.email}`);

           this.$router.go({path: this.$router.path});
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
  },
};
</script>
