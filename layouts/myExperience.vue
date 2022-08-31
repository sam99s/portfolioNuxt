<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p>
          My work experience currently consists of two stages in the IT field.
          Meanwhile, my projects are distributed throughout my career, having
          created several since 2020. In them you can see applied technologies
          such as .NET, Vue.js, React.js, SQL, among others, by entering the
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
    <!-- Blue Digital -->
    <Jobs
      :title="jobs.blueDigital.title"
      :subtitle="jobs.blueDigital.subtitle"
      :jobImg="jobs.blueDigital.jobImg"
      :jobGif="jobs.blueDigital.jobGif"
      :text="jobs.blueDigital.text"
      :additionalText="jobs.blueDigital.additionalText"
      :tasks="jobs.blueDigital.tasks"
      :site="jobs.blueDigital.site"
    />
    <!-- Personal Proyects -->
    <Proyects />
    <!-- Ending -->
    <v-row>
      <v-col cols="12" class="text-center my-8">
        <p>
          Throughout my life I was linked to labor terms. This is something that
          I carry implicitly, since from an early age I identified myself with
          productivity.
        </p>
        <p>
          Before definitely entering the world of IT, I spent 5 years in the
          world of sales, which taught me the value that I carry as a standard:
          perseverance.
        </p>
        <p>
          To this day, thanks to everything I have learned, I am determined to
          fight for my personal growth, responsibly fulfilling all the proposed
          objectives.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Jobs from "../components/Jobs.vue";
import Proyects from "./proyects.vue";
export default {
  name: "myExperience",
  components: { Jobs, Proyects },
  data() {
    return {
      jobs: {
        macena: {
          title: "Macena",
          subtitle: "Nov 2021 - Sep 2022",
          jobImg: "/experience/macena/macenaWorks.png",
          jobGif: "/experience/macena/macenaGif.gif",
          text: "Macena is dedicated to health management for companies and institutions in the sector. Geclisa is health software for the management of clinics, sanatoriums and hospitals, while Gecros is a comprehensive management system for social, prepaid and mutual funds.",
          additionalText:
            "In my role, I worked with technologies like Vue.js, implementing Vuex and Vuetify from the client side. On the server side, develop different services with .NET and SQL Server.",
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
        blueDigital: {
          title: "Blue Digital",
          subtitle: "Abr 2021 - Jul 2021",
          jobImg: "/experience/blueDigital/logo.png",
          jobGif: "/experience/blueDigital/bd.gif",
          text: "It was a startup from the city of Córdoba, in which I learned a lot about managing Wordpress. I was here for a short period of time, around 3 months, as I had to continue my studies. For the same development two sites: bluedigital.com.ar & crautomotores.com.ar",
          tasks: {},
        },
      },
    };
  },
};
</script>

<style scoped></style>
