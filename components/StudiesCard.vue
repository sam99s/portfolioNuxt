<template>
  <v-container>
    <v-row>
      <v-card class="d-flex" elevation="3">
        <v-col cols="12" md="8">
          <v-card-title>{{ title }}</v-card-title>
          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
          <v-card-text>{{ text }}</v-card-text>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="3" class="pa-0 d-flex align-items-center">
          <v-img :src="image"></v-img>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "StudiesCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card__subtitle {
  color: #40e5a1;
}
</style>
