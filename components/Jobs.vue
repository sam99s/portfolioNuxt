<template>
  <v-row class="mb-8">
    <v-col cols="12">
      <h3>{{ title }}</h3>
      <h4>{{ position }}</h4>
      <span>{{ subtitle }}</span>
    </v-col>
    <v-col cols="12" sm="6" align-self="center">
      <v-img :src="jobImg" max-height="280px" contain></v-img>
    </v-col>

    <v-col cols="12" sm="6">
      <v-row>
        <v-col cols="12" class="text-center">
          <p>{{ text }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align-self="center">
          <v-img :src="jobGif" max-height="160px" contain></v-img>
        </v-col>
        <v-col cols="12" v-if="additionalText" class="text-center">
          <p>{{ additionalText }}</p>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" v-if="tasks && tasksValidation()">
      <v-card>
        <v-card-title>Relevant tasks performed</v-card-title>
        <v-card-text class="d-flex flex-wrap">
          <v-col cols="12" sm="6" md="4" align-self="center">
            <ul>
              <li v-if="tasks.task1">{{ tasks.task1 }}</li>
              <li v-if="tasks.task2">{{ tasks.task2 }}</li>
              <li v-if="tasks.task3">{{ tasks.task3 }}</li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <ul>
              <li v-if="tasks.task4">{{ tasks.task4 }}</li>
              <li v-if="tasks.task5">{{ tasks.task5 }}</li>
              <li v-if="tasks.task6">{{ tasks.task6 }}</li>
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <ul>
              <li v-if="tasks.task7">{{ tasks.task7 }}</li>
              <li v-if="tasks.task8">{{ tasks.task8 }}</li>
              <li v-if="tasks.task9">{{ tasks.task9 }}</li>
            </ul>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" v-if="site" class="text-center">
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
    position: {
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
      default: null,
    },
    site: {
      type: String,
      required: null,
    },
  },
  created() {
    this.tasksValidation();
  },
  methods: {
    tasksValidation() {
      return Object.keys(this.tasks).length;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

h4{
  color: var(--secondary);
  font-size: 100%;
}
</style>
