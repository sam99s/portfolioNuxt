<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="mainImage" contain height="200px" :alt="'image-'+{title}"></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

    <v-card-actions>
      <a :href="proyectLink" target="_blank" v-if="proyectLink">
        <v-btn color="#40e5a1" text outlined> Final project </v-btn>
      </a>

      <v-spacer></v-spacer>

      <v-btn v-if="text" icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-col cols="12" class="text-center" v-if="site">
          <p class="ma-0 pa-0">
            Site:
            <a :href="site" target="_blank"><br />{{ site }} </a>
          </p>
        </v-col>
        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    mainImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    proyectLink: {
      type: String,
      default: null,
    },
    site: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}

::v-deep .v-image__image--contain {
    background-size: cover !important;
}
</style>
