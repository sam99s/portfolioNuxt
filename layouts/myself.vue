<template>
  <v-container class="px-0 pb-4">
    <h2>Who is Sam99s?</h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-row class="d-flex">
          <v-col cols="12" sm="4" class="myself-image">
            <v-img src="/sam99ss.png" class="myself-image__size"></v-img>
          </v-col>
          <v-col cols="12" sm="8" class="d-flex align-center px-8 myself-text">
            <p>
              My nickname is Sam, my year of birth is 1999 and also my last name
              starts with the letter "s". This is the combination that I like
              the most to represent myself in the IT industry.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <p class="myself-text">
            My technological strengths are based on JavaScript and are going to
            get bigger in cross-platform development.
          </p>
          <p class="myself-text">
            Until the beginning of September, I was working on the migration of the desktop software to the web. Use of Vue.js and .NET as main technologies.
          </p>
        </v-row>
      </v-col>

      <v-col cols="12" md="6" align-self="center">
        <v-row>
          <h2 class="text-center">
            What am I studying and what do I want to study?
          </h2>
          <v-img src="/presentToFuture.png"></v-img>
        </v-row>
      </v-col>

      <v-col cols="12" sm="6" contain>
        <CardImage
          :mainImage="studies.dotnet.image"
          :title="studies.dotnet.title"
          :subtitle="studies.dotnet.subtitle"
          :text="studies.dotnet.text"
          v-if="isHome"
        />
      </v-col>

      <v-col cols="12" sm="6" contain>
        <CardImage
          :mainImage="studies.databases.image"
          :title="studies.databases.title"
          :subtitle="studies.databases.subtitle"
          :text="studies.databases.text"
          v-if="isHome"
        />
      </v-col>

      <v-col cols="12" class="text-center" v-if="isHome">
        <v-btn outlined elevation="2" color="#40e5a1" to="/skills" router exact
          >more information</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StudieProgressBar from "../components/StudieProgressBar.vue";

export default {
  name: "myself",
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    StudieProgressBar,
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
        databases: {
          title: "Databases",
          subtitle: "Platzi 2022 - 2023",
          text: "In the field, there are mainly 2 types of database engines, relational and non-relational. Each one is more suitable depending on the use case. My focus will be mainly on SQL (relational), but I will also learn the non-relational type of database to a lesser extent.",
          image: "/studies/databases/logo.jpg",
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

@media (max-width: 599px) {
  .myself-text {
    padding: 0 !important;
  }
  .myself-image {
    display: flex;
    justify-content: center;
  }
  .myself-image__size {
    max-width: 150px;
    height: auto;
    object-fit: contain;
  }
}

@media (max-width: 959px) and (min-width: 600px) {
  .myself-image {
    display: flex;
    justify-content: center;
  }
  .myself-image__size {
    max-width: 100px;
    height: auto;
    object-fit: contain;
  }
}
</style>
