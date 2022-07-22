<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-carousel
        height="200px"
        hide-delimiters
        interval="3000"
        :cycle="true"
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="title in titles"
          :key="title.id"
          transition="fade-transition"
        >
          <v-sheet height="100%" width="50%" class="sheet-margin__auto">
            <v-row>
              <v-col cols="12" class="text-center">
                <v-img :src="title.url"></v-img>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col cols="12" md="6">
      <p>
        {{ text1 }}
      </p>
      <p>
        {{ text2 }}
      </p>
    </v-col>
    <v-col cols="12" class="text-center">
      <p>
        {{ text3 }}
      </p>
      <v-row>
        <v-col cols="12" md="6" class="text-center" v-if="showButtons">
          <a href="https://platzi.com/r/Sam99s" target="_blank">
            <v-btn outlined elevation="2" color="#82c9ff"
              >Platzi inscription</v-btn
            >
          </a>
        </v-col>
        <v-col cols="12" md="6" class="text-center" v-if="showButtons">
          <a href="https://platzi.com/p/Sam99s/" target="_blank">
            <v-btn outlined elevation="2" color="#40e5a1"
              >Sam99s Platzi Profile</v-btn
            >
          </a>
        </v-col>
        <v-col cols="12" class="text-center" v-if="showContactButton">
          <v-btn
            outlined
            elevation="2"
            color="#40e5a1"
            to="/contact"
            router
            exact
            >Contact me!</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ExhibitionTitlesPlatzi",
  props: {
    titles: {
      type: Array,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
    },
    text3: {
      type: String,
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
    showContactButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.sheet-margin__auto {
  margin: auto;
}

a {
  text-decoration: none;
}
</style>
