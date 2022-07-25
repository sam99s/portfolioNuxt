<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="px-0">
        <StudiesDataTable :items="items" />
      </v-col>
      <v-col cols="12" class="text-center">
        <p>You can review the titles obtained by going to the skills section</p>
        <v-btn outlined elevation="2" color="#40e5a1" to="/skills" router exact
          >Skills</v-btn
        >
      </v-col>
      <v-row class="mt-5 text-center">
        <v-col cols="12" md="6">
          <h3>Previous studies</h3>
          <PreviousStudies :items="previousItems" />
        </v-col>
        <v-col cols="12" md="6">
          <h3>In the future I would like to learn...</h3>
          <WantStudiesDataTable :items="wantItems" />
          <h4 class="my-5">Have I attended college?</h4>
          <p>
            Yes, I attended the National Technological University - Córdoba
            Regional Faculty. In the same, I studied for two years (2017 - 2018)
            the career of Engineering in Information Systems.
          </p>
          <p>
            Those years I discovered my passion for programming and creating
            systems and organizations. For that reason, I decided to take a
            little over a year to find out where I was headed.
          </p>
          <p>
            The rest is a great story to hear, you can do that by contacting me.
          </p>
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
    </v-row>
  </v-container>
</template>

<script>
import StudiesDataTable from "../components/StudiesDataTable.vue";
import WantStudiesDataTable from "../components/WantStudiesDataTable.vue";
import PreviousStudies from "../components/PreviousStudies.vue";
export default {
  data() {
    return {
      name: "studiesTable",
      items: [
        {
          subject: ".NET Developer",
          institution: "Platzi",
          since: "2022",
          until: "2023",
          priorKnowledge: true,
          currentlyState: "Studying",
          objetive: "Sr. dev",
        },
        {
          subject: "SQL",
          institution: "Platzi",
          since: "2022",
          until: "2023",
          priorKnowledge: true,
          currentlyState: "Studying",
          objetive: "Others",
        },
        {
          subject: "NUXT JS",
          institution: "Platzi",
          since: "2022",
          until: "2022",
          priorKnowledge: true,
          currentlyState: "Practicing",
          objetive: "Others",
        },
        {
          subject: "English",
          institution: "Platzi",
          since: "2022",
          until: "2023",
          priorKnowledge: true,
          currentlyState: "Studying",
          objetive: "IELTS",
        },
      ],
      previousItems: [
        {
          subject: "HTML",
          year: 2020,
          frequency: "Always",
        },
        {
          subject: "CSS",
          year: 2020,
          frequency: "Always",
        },
        {
          subject: "GIT",
          year: 2020,
          frequency: "Always",
        },
        {
          subject: "Sass",
          year: 2020,
          frequency: "Often",
        },
        {
          subject: "Bootstrap",
          year: 2020,
          frequency: "Often",
        },
        {
          subject: "JavaScript",
          year: 2020,
          frequency: "Always",
        },
        {
          subject: "Linux",
          year: 2020,
          frequency: "Sometimes",
        },
        {
          subject: "PUG",
          year: 2020,
          frequency: "Hardly ever",
        },
        {
          subject: "Wordpress",
          year: 2021,
          frequency: "Sometimes",
        },
        {
          subject: "React JS",
          year: 2021,
          frequency: "Often",
        },
        {
          subject: "Firebase Database",
          year: 2021,
          frequency: "Hardly ever",
        },
        {
          subject: "VUE JS",
          year: 2021,
          frequency: "Always",
        },
        {
          subject: "Vuetify",
          year: 2021,
          frequency: "Always",
        },
        {
          subject: "SQL",
          year: 2022,
          frequency: "usually",
        },
        {
          subject: "Postman",
          year: 2022,
          frequency: "usually",
        },
      ],
      wantItems: [
        {
          subject: "NEXT JS",
          between: "2023-2024",
        },
        {
          subject: "React Native",
          between: "2023-2024",
        },
        {
          subject: "Flutter",
          between: "2024-2025",
        },
        {
          subject: "Software Engineering",
          between: "2025-2030",
        },
      ],
    };
  },
  components: { StudiesDataTable, WantStudiesDataTable, PreviousStudies },
};
</script>

<style scoped></style>
