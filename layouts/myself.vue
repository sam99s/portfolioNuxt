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
        <StudieProgressBar
          :valueProp="dotnet"
          :colorProp="'#5c2d91'"
          :title="'.NET (C#)'"
        />
        <StudieProgressBar
          :valueProp="vuejs"
          :colorProp="'#3fb27f'"
          :title="'VUE JS'"
        />
        <StudieProgressBar
          :valueProp="reactjs"
          :colorProp="'#5ed3f3'"
          :title="'React JS'"
        />
        <StudieProgressBar
          :valueProp="javascript"
          :colorProp="'#f7df1e'"
          :title="'JavaScript'"
        />
        <StudieProgressBar
          :valueProp="english"
          :colorProp="'red'"
          :title="'English'"
        />

        <v-row>
          <h2 class="text-center">
            What am I studying and what do I want to study?
          </h2>
        </v-row>
      </v-col>

      <StudiesCard
        :title="studies.dotnet.title"
        :subtitle="studies.dotnet.subtitle"
        :text="studies.dotnet.text"
        :image="studies.dotnet.image"
        v-if="isHome"
      />

      <StudiesCard
        :title="studies.nuxt.title"
        :subtitle="studies.nuxt.subtitle"
        :text="studies.nuxt.text"
        :image="studies.nuxt.image"
        v-if="isHome"
      />

      <v-col cols="12" class="text-center" v-if="isHome">
        <v-btn 
        outlined 
        elevation="2" 
        color="#40e5a1" 
        to="/skills" 
        router 
        exact
        >more information</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StudieProgressBar from "../components/StudieProgressBar.vue";
import StudiesCard from "../components/StudiesCard.vue";

export default {
  name: "myself",
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },
  components: {
    StudieProgressBar,
    StudiesCard,
  },
  data() {
    return {
      dotnet: 25,
      vuejs: 75,
      reactjs: 35,
      javascript: 80,
      english: 45,
      studies: {
        dotnet: {
          title: "Backend with C# and .NET",
          subtitle: "Platzi 2022",
          text: "Efficient framework, created by Microsoft, for modern software development with languages ​​like C# based on the Object Orientation paradigm.",
          image: "/studies/dotnet/principal.png",
        },
        nuxt: {
          title: "NUXT JS",
          subtitle: "Platzi 2022 - 2023",
          text: "Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js. This website is made in this technology",
          image: "/studies/nuxt/principal.png",
        },
      },
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1.2rem;
}

.v-card__subtitle {
  color: #40e5a1;
}
</style>
