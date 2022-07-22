<template>
  <v-row>
    <v-col cols="12">
      <h3>{{ title }}</h3>
      <span>{{ subtitle }}</span>
    </v-col>
    <v-col cols="12" md="6" align-self="center">
      <v-img :src="jobImg"></v-img>
    </v-col>

    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <p>{{ text }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align-self="center">
          <v-img :src="jobGif"></v-img>
        </v-col>
        <v-col cols="12" v-if="additionalText">
          <p>{{ additionalText }}</p>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-card>
        <v-card-title>Relevant tasks performed</v-card-title>
        <v-card-text class="d-flex">
          <v-col cols="12" sm="6" md="4">
            <ul>
              <li>{{ tasks.task1 }}</li>
              <li>{{ tasks.task2 }}</li>
              <li>{{ tasks.task3 }}</li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ul>
              <li>{{ tasks.task4 }}</li>
              <li>{{ tasks.task5 }}</li>
              <li>{{ tasks.task6 }}</li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul>
              <li>{{ tasks.task7 }}</li>
              <li>{{ tasks.task8 }}</li>
              <li>{{ tasks.task9 }}</li>
            </ul>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col v-if="site">
      <a :href="site" target="_blank">
        <v-btn outlined elevation="2" color="#40e5a1">Go to site</v-btn>
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Jobs",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    jobImg: {
      type: String,
      required: true,
    },
    jobGif: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    additionalText: {
      type: String,
      default: null,
    },
    tasks: {
      type: Object,
      required: true,
    },
    site: {
      type: String,
      required: null,
    },
  },
};
</script>

<style scoped></style>
