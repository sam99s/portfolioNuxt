<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="px-0">
        <StudiesDataTable :items="items" />
      </v-col>
      <v-col cols="12">
        <p>You can review the titles obtained by going to the skills section</p>
        <v-btn outlined elevation="2" color="#40e5a1" to="/skills" router exact
          >Skills</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StudiesDataTable from "../components/StudiesDataTable.vue";
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
    };
  },
  components: { StudiesDataTable },
};
</script>

<style scoped></style>
