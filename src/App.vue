<template>
  <v-app style="
  
    background: -webkit-linear-gradient(to right, #337ab7, #00335b);
    background: linear-gradient(to right, #337ab7, #00335b);
  ">
     <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
    //
  }),
};
</script>
