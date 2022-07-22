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
    <!-- Macena -->
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
          jobImg: "/experience/macena/macenaWorks.png",
          jobGif: "/experience/macena/macenaGif.gif",
          text: "At Macena we are dedicated to health management for companies and institutions in the sector. Geclisa is a health software for the management of clinics, sanatoriums and hospitals, while Gecros is a comprehensive management system for social, prepaid and mutual funds.",
          additionalText: "In my role, I currently work with technologies like VUE JS, implementing VUEX and Vuetify from the client side. On the server side we work with .NET technologies with C# and SQL Server.",
          tasks: {
            task1: "Configuration of digital totems",
            task2: "Shift rescheduling",
            task3: "Styles for live medical consultations",
            task4: "Shift configuration",
            task5: "Creating services for the API (CRUD)",
            /* task6: "", */
            task7: "Totem Home Screen Styles",
            task8: "Advanced settings",
            /* task9: "", */
          },
          site: "https://www.macena.com.ar/",
        },
      },
    };
  },
};
</script>

<style scoped></style>
