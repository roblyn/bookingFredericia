<template>
  <div class="container background">
      <UserBar></UserBar>

    <v-navigation-drawer app class="blue">
      <img
        src="../assets/logo.png"
        alt=""
        width="227"
        height="78"
        class="mt-12 ml-4"
      />
    </v-navigation-drawer>
    <v-container grid-list-md>
      <v-layout wrap row class="mt-12">
        <v-flex xs12 md4 class="mb-4">
          <v-card raised>
            <v-card-title class=" pa-1 blue white--text">
              <v-container>
                <v-layout>
                  <v-flex class="text-center subtitle-3">
                    Mødelokale
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-img
              class="white--text align-end"
              height="300px"
              src="../assets/lokale.png"
            >
              <v-container fill-height>
                <v-layout>
                  <v-flex text-center>
                     <router-link to="/modelokale">
              <v-btn color="error white--text">Book</v-btn></router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 md4 class="mb-4">
          <v-card raised>
            <v-card-title class=" pa-1 blue white--text">
              <v-container>
                <v-layout>
                  <v-flex class="text-center subtitle-3">
                    Biler
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-img
              class="white--text align-end"
              height="300px"
              src="../assets/bil.png"
            >
              <v-container fill-height>
                <v-layout>
                  <v-flex text-center>
                    <v-btn color="error white--text">book</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
         <v-card raised>
            <v-card-title class=" pa-1 blue white--text">
              <v-container>
                <v-layout>
                  <v-flex class="text-center subtitle-3">
                    Kantine
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-img
              class="white--text align-end"
              height="300px"
              src="../assets/kantine.png"
            >
              <v-container fill-height>
                <v-layout>
                  <v-flex text-center>
                     <router-link to="/kantine">
              <v-btn color="error white--text">Book</v-btn></router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex xs12 md4>
          <v-card raised>
            <v-card-title class=" pa-1 blue white--text">
              <v-container>
                <v-layout>
                  <v-flex class="text-center subtitle-3">
                    Rengøring
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-img
              class="white--text align-end"
              height="300px"
              src="../assets/rengøring.png"
            >
              <v-container fill-height>
                <v-layout>
                  <v-flex text-center>
                    <v-btn color="error white--text">book</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
          <v-card raised>
            <v-card-title class=" pa-1 blue white--text">
              <v-container>
                <v-layout>
                  <v-flex class="text-center subtitle-3">
                    Rådhusbetjent
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-img
              class="white--text align-end"
              height="300px"
              src="../assets/rådhuslogo.png"
            >
              <v-container fill-height>
                <v-layout>
                  <v-flex text-center>
                    <v-btn color="error white--text">book</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 md4>
         <v-card raised>
            <v-card-title class=" pa-1 blue white--text">
              <v-container>
                <v-layout>
                  <v-flex class="text-center subtitle-3">
                   Kontakt
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-title>
            <v-img
              class="white--text align-end"
              height="300px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container fill-height>
                <v-layout>
                  <v-flex text-center>
                     <router-link to="/Kontakt">
              <v-btn color="error white--text">Book</v-btn></router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import UserBar  from '@/components/UserBar.vue'
export default {
  name: "App",
  components: {
    UserBar,
  },
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
