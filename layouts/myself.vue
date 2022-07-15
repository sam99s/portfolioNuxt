<template>
  <v-container class="px-0 pb-4">
    <h2>Who is Sam99s?</h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-row class="d-flex">
          <v-col cols="12" md="4">
            <v-img src="/sam99ss.png"></v-img>
          </v-col>
          <v-col cols="12" md="8" class="d-flex align-center px-8">
            <p>
              My nickname is Sam, my year of birth is 1999 and also my last name
              starts with the letter "s". This is the combination that I like
              the most to represent myself in the IT industry.
            </p>
          </v-col>
        </v-row>
        <p>
          My technological strengths are based on JavaScript and are going to
          get bigger in cross-platform development.
        </p>
        <p>
          Currently, I am working on the migration of a desktop software to the
          web. Using VUE JS and .NET as main technologies.
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <v-row class="my-4">
          <span>.NET (C#)</span>
          <v-progress-linear
            :value="dotnet"
            height="7"
            rounded
            color="#5c2d91"
            background-color="#FFF"
          ></v-progress-linear>
        </v-row>

        <v-row class="my-4">
          <span>VUE JS</span>
          <v-progress-linear
            :value="vuejs"
            height="7"
            rounded
            color="#3fb27f"
            background-color="#FFF"
          ></v-progress-linear>
        </v-row>

        <v-row class="my-4">
          <span>React JS</span>
          <v-progress-linear
            :value="reactjs"
            height="7"
            rounded
            color="#5ed3f3"
            background-color="#FFF"
          ></v-progress-linear>
        </v-row>

        <v-row class="my-4">
          <span>JavaScript</span>
          <v-progress-linear
            :value="javascript"
            height="7"
            rounded
            color="#f7df1e"
            background-color="#FFF"
          ></v-progress-linear>
        </v-row>

        <v-row class="my-4">
          <span>English</span>
          <v-progress-linear
            :value="english"
            height="7"
            rounded
            color="red"
            background-color="#FFF"
          ></v-progress-linear>
        </v-row>

        <v-row>
          <h2 class="text-center">What am I studying and what do I want to study?</h2>
        </v-row>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "myself",
  components: {},
  data() {
    return {
      dotnet: 25,
      vuejs: 75,
      reactjs: 35,
      javascript: 80,
      english: 40,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1.2rem;
}
</style>
