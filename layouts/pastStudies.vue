<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>Certifications from previous years</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h4>Coderhouse - 2021</h4>
      </v-col>
      <v-col cols="12" md="4" contain>
        <CardImage
          :mainImage="coderhouse.dw.img"
          :title="coderhouse.dw.title"
          :subtitle="coderhouse.dw.subtitle"
          :proyectLink="coderhouse.dw.proyectLink.repository"
          :text="coderhouse.dw.description"
        />
      </v-col>
      <v-col cols="12" md="4" contain>
        <CardImage
          :mainImage="coderhouse.js.img"
          :title="coderhouse.js.title"
          :subtitle="coderhouse.js.subtitle"
          :proyectLink="coderhouse.js.proyectLink.repository"
          :site="coderhouse.js.proyectLink.site"
          :text="coderhouse.js.description"
        />
      </v-col>
      <v-col cols="12" md="4" contain>
        <CardImage
          :mainImage="coderhouse.jsx.img"
          :title="coderhouse.jsx.title"
          :subtitle="coderhouse.jsx.subtitle"
          :proyectLink="coderhouse.jsx.proyectLink.repository"
          :text="coderhouse.jsx.description"
        />
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="12" md="6">
        <v-carousel v-model="model" height="300px">
          <v-carousel-item v-for="(color, i) in colors" :key="color">
            <v-sheet :color="color" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">Slide {{ i + 1 }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import CardImage from "../components/CardImage.vue";
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    coderhouse: {
      dw: {
        img: "/coderhouse/dwCoderhouse.png",
        title: "Web development",
        subtitle: "Sass, Bootstrap, HTML & CSS, ",
        proyectLink: {
          repository:
            "https://github.com/sam99s/Football-Knowledge/tree/master",
          site: "",
        },
        description:
          "The project called Football Knowledge, focuses on knowing the present of football (at that time), the best players today and the history of the greatest glory of this sport... the World Cup and all its stories.",
      },
      js: {
        img: "/coderhouse/javascirptCoderhouse.png",
        title: "JavaScript Developer",
        subtitle: "Javascript Vanilla & jQuery",
        proyectLink: {
          repository: "https://github.com/sam99s/dragon-ball-online",
          site: "https://dragon-ball-online.vercel.app/",
        },
        description:
          "A great test for my manifested logic... Coderhouse's great Javascript course. He himself made me get the best of me, making an effort to collect data and apply all the data structure that he knew and that I learned in it. At this point, I started to get familiar with jQuery and more concepts of the language. I was very happy with my final project, which made me finish first in the ranking of scores. To this day, Javascript has become a part of me, to the point of thinking about my daily tasks in this language 🤪.",
      },
      jsx: {
        img: "/coderhouse/reactCoderhouse.png",
        title: "Front-End with React JS",
        subtitle: "React js, React Router & Firebase",
        proyectLink: {
          repository: "https://github.com/sam99s/react-ecommerce",
          site: "",
        },
        description:
          "I was able to achieve the React JS title at the end of September 2021, with a grade of 10 and finishing first in the ranking of the course carried out at the Coderhouse academy. It brought me a lot of happiness, as it tried the best of me on the Front side and made me interact with the databases in a very precise way so that everything works correctly.",
      },
    },
  }),
  components: { CardImage },
};
</script>

<style scoped></style>
