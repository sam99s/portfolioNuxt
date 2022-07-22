<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p>
          My work experience currently consists of two stages in the IT field.
          Meanwhile, my projects are distributed throughout my career, having
          created several since 2020. In them you can see applied technologies
          such as .NET, VUE JS, REACT JS, SQL, among others, by entering the
          corresponding repositories.
        </p>
      </v-col>
    </v-row>
    <Jobs
      :title="jobs.macena.title"
      :subtitle="jobs.macena.subtitle"
      :jobImg="jobs.macena.jobImg"
      :jobGif="jobs.macena.jobGif"
      :text="jobs.macena.text"
      :additionalText="jobs.macena.additionalText"
      :tasks="jobs.macena.tasks"
      :site="jobs.macena.site"
    />
  </v-container>
</template>

<script>
import Jobs from "../components/Jobs.vue";
export default {
  name: "myExperience",
  components: { Jobs },
  data() {
    return {
      jobs: {
        macena: {
          title: "Macena",
          subtitle: "Nov 2021 - Currently",
          jobImg: "",
          jobGif: "",
          text: "",
          additionalText: "",
          tasks: {
            task1: "",
            task2: "",
            task3: "",
            task4: "",
            task5: "",
            task6: "",
            task7: "",
            task8: "",
            task9: "",
          },
          site: "",
        },
      },
    };
  },
};
</script>

<style scoped></style>
