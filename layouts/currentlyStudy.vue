<template>
  <v-container class="mt-5 py-5">
    <v-row>
      <v-col cols="12" md="4">
        <h3>{{ title }}</h3>
        <v-container>
          <v-row>
            <v-col cols="12" align-self="center">
              <v-img :src="studyImg"></v-img>
            </v-col>
            <v-col cols="12">{{ text1 }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="12">{{ text2 }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-img :src="institution.logo"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="8">
        <ToolProgress
          :headers="headers"
          :items="items"
          :institution="institution"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ToolProgress from "../components/ToolProgress.vue";
export default {
  name: "currentlySudy",
  components: { ToolProgress },
  props: {
    title: {
      type: String,
      required: true,
    },
    studyImg: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    institution: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
