<template>
  <v-container class="mx-0 px-0">
    <a :href="link" target="_blank" v-if="link">
      <v-card outlined>
        <v-img :src="backgroundImage"></v-img>
        <v-card-actions>
          <v-col cols="12" class="text-center">
            <span>
              <v-icon color="green">{{ "mdi-open-in-new" }}</v-icon>
              {{ title }}</span
            >
          </v-col>
        </v-card-actions>
      </v-card>
    </a>
    <v-card v-else outlined>
      <v-img :src="backgroundImage"></v-img>
      <v-card-actions>
        <v-col cols="12" class="text-center">
          <span>{{ title }}</span>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProyectCard",
  props: {
    title: {
      type: String,
      requided: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #40e5a140;
}
a {
  text-decoration: none;
}
</style>
