<template>
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
            <a :href="institution.site" target="_blank">
              <v-img :src="institution.logo"></v-img>
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <StudieProgressBar
              :valueProp="averageProgress"
              :title="`${title} progress`"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="12" md="8" class="px-0">
      <ToolProgress
        :headers="headers"
        :items="items"
        :institution="institution"
      />
    </v-col>
  </v-row>
</template>

<script>
import ToolProgress from "../components/ToolProgress.vue";
import StudieProgressBar from "../components/StudieProgressBar.vue";
export default {
  name: "currentlySudy",
  components: { ToolProgress, StudieProgressBar },
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
  data() {
    return {
      averageProgress: null,
    };
  },

  created() {
    this.calculateAverage();
  },

  methods: {
    calculateAverage() {
      let numerator = 0;
      const longDenominator = this.items.length;
      this.items.forEach((x) => {
        if (x.approved) numerator++;
      });
      this.averageProgress = (numerator * 100) / longDenominator;
    },
  },
};
</script>

<style></style>
