<template>
  <v-container class="px-0 pt-0 pb-4 mt-8 bg-sam">
    <v-row>
      <v-col cols="12" class="pa-0 welcome-text__mediaCenter">
        <p>
          Welcome to my portfolio<br />
          I'm Samuel Schulz.<br />
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="my-8 text-center">
        <v-btn outlined elevation="2" color="#40e5a1" to="/contact" router exact
          >Contact me!</v-btn
        >
      </v-col>
      <v-spacer />
      <v-col
        cols="12"
        md="6"
        class="pa-0 d-flex justify-center"
        align-self="center"
      >
        <p>
          ...or sam99s <br />
          <!-- JS -->
          <v-tooltip bottom color="#efd81d">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="#efd81d">{{
                "mdi-language-javascript"
              }}</v-icon>
            </template>
            <span style="color: black; font-weight: 500">JavaScript</span>
          </v-tooltip>
          <!-- Vue -->
          <v-tooltip bottom color="#3fb27f">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="#3fb27f">{{
                "mdi-vuejs"
              }}</v-icon>
            </template>
            <span style="color: #000; font-weight: 500">VUE</span>
          </v-tooltip>
          <!-- Nuxt -->
          <v-tooltip bottom color="#0f8371">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="#0f8371">{{
                "mdi-nuxt"
              }}</v-icon>
            </template>
            <span style="color: black; font-weight: 500">NUXT</span>
          </v-tooltip>
          <!-- vuetify -->
          <v-tooltip bottom color="#aad6f7">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="#aad6f7">{{
                "mdi-vuetify"
              }}</v-icon>
            </template>
            <span style="color: black; font-weight: 500">Vuetify</span>
          </v-tooltip>
          <!-- c# -->
          <v-tooltip bottom color="#8e33a1">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="#8e33a1">{{
                "mdi-language-csharp"
              }}</v-icon>
            </template>
            <span style="color: white; font-weight: 500">C#</span>
          </v-tooltip>
          <!-- .NET -->
          <v-tooltip bottom color="#6d429c">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="#6d429c">{{
                "mdi-dot-net"
              }}</v-icon>
            </template>
            <span style="color: white; font-weight: 500">.NET</span>
          </v-tooltip>
          <!-- SQL -->
          <v-tooltip bottom color="#454746">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" color="grey">{{
                "mdi-database"
              }}</v-icon>
            </template>
            <span style="color: white; font-weight: 500">SQL</span>
          </v-tooltip>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WallpaperSam",
  components: {},
  data() {
    return {
      typedTitle: ["Web", "Full stack"],
    };
  },
};
</script>

<style scoped>

p {
  font-size: 2.5em;
  font-weight: 500;
}

@media (min-width: 960px) {
  .bg-sam {
    background: url("/sam99s.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: bottom;
  }
}
</style>
