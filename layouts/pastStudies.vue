<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>Certifications from previous years</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>Coderhouse - 2021</h3>
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
    <v-row>
      <v-col cols="12">
        <h3>Platzi - 2020</h3>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col>
          <h4>Web development</h4>
        </v-col>
      </v-row>
      <ExhibitionTitlesPlatzi
        :titles="platzi.certificates.pdw2020"
        :text1="platzi.text.pdw2020.text1"
        :text2="platzi.text.pdw2020.text2"
        :text3="platzi.text.pdw2020.text3"
        :showButtons="true"
      />
      <v-row>
        <v-col>
          <h4>JavaScript developer</h4>
        </v-col>
      </v-row>
      <ExhibitionTitlesPlatzi
        :titles="platzi.certificates.pjs2020"
        :text1="platzi.text.pjs2020.text1"
        :text2="platzi.text.pjs2020.text2"
        :text3="platzi.text.pjs2020.text3"
        :showContactButton="true"
      />
    </v-container>
  </v-container>
</template>

<script>
import CardImage from "../components/CardImage.vue";
import ExhibitionTitlesPlatzi from "../components/ExhibitionTitlesPlatzi.vue";
export default {
  components: { CardImage, ExhibitionTitlesPlatzi },
  data: () => ({
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
    platzi: {
      certificates: {
        pdw2020: [
          {
            id: "1p2020",
            url: "/platzi2020/desarrolloWeb/basicEngineerSoftware.png",
          },
          {
            id: "2p2020",
            url: "/platzi2020/desarrolloWeb/designSystem.png",
          },
          {
            id: "3p2020",
            url: "/platzi2020/desarrolloWeb/devtools.png",
          },
          {
            id: "4p2020",
            url: "/platzi2020/desarrolloWeb/frontend.png",
          },
          {
            id: "5p2020",
            url: "/platzi2020/desarrolloWeb/frontendDev.png",
          },
          {
            id: "6p2020",
            url: "/platzi2020/desarrolloWeb/gitAndGitHub.png",
          },
          {
            id: "7p2020",
            url: "/platzi2020/desarrolloWeb/gridLayout.png",
          },
          {
            id: "8p2020",
            url: "/platzi2020/desarrolloWeb/htmlPractic.png",
          },
          {
            id: "9p2020",
            url: "/platzi2020/desarrolloWeb/packageNpm.png",
          },
          {
            id: "10p2020",
            url: "/platzi2020/desarrolloWeb/responsiveMobile.png",
          },
          {
            id: "11p2020",
            url: "/platzi2020/desarrolloWeb/responsiveWeb.png",
          },
          {
            id: "12p2020",
            url: "/platzi2020/desarrolloWeb/sassCourse.png",
          },
          {
            id: "13p2020",
            url: "/platzi2020/desarrolloWeb/terminalCourse.png",
          },
          {
            id: "14p2020",
            url: "/platzi2020/desarrolloWeb/v8engine.png",
          },
          {
            id: "15p2020",
            url: "/platzi2020/desarrolloWeb/webDevelopment.png",
          },
          {
            id: "16p2020",
            url: "/platzi2020/desarrolloWeb/webDevelopmentPro.png",
          },
        ],
        pjs2020: [
          {
            id: "1p2020",
            url: "/platzi2020/javascriptDev/asincronismo.png",
          },
          {
            id: "2p2020",
            url: "/platzi2020/javascriptDev/baseJs.png",
          },
          {
            id: "3p2020",
            url: "/platzi2020/javascriptDev/basicsJs.png",
          },
          {
            id: "4p2020",
            url: "/platzi2020/javascriptDev/dataStructure.png",
          },
          {
            id: "5p2020",
            url: "/platzi2020/javascriptDev/ecma6.png",
          },
          {
            id: "6p2020",
            url: "/platzi2020/javascriptDev/frontendDev.png",
          },
          {
            id: "7p2020",
            url: "/platzi2020/javascriptDev/jQuery.png",
          },
          {
            id: "8p2020",
            url: "/platzi2020/javascriptDev/prework.png",
          },
          {
            id: "9p2020",
            url: "/platzi2020/javascriptDev/preworkWindows.png",
          },
          {
            id: "10p2020",
            url: "/platzi2020/javascriptDev/scopeJs.png",
          },
          {
            id: "11p2020",
            url: "/platzi2020/javascriptDev/spaJs.png",
          },
          {
            id: "12p2020",
            url: "/platzi2020/javascriptDev/spappJs.png",
          },
        ],
      },
      text: {
        pdw2020: {
          text1:
            'While working in the field of sales, I decided to sign up for Platzi. From the first day I have maintained the motto of "Never stop learning" and every day my brain applies it.',
          text2:
            "I started in Web Development school. Obtaining a wide range of knowledge that I was able to apply instantly. Within a few months this had its fruits since I began to have my first personal projects and I also began to venture into the world of work.",
          text3:
            "To this day I follow one of the greatest pieces of advice that a great colleague gave me and that is to start. One can plan many things, but the world of IT is so amazing that plans can change in a matter of seconds. If this is your case, you can start with a free month in said academy and you will see the gratitude you will feel in a few months for having made the decision.",
        },
        pjs2020: {
          text1:
            'While working in the field of sales, I decided to sign up for Platzi. From the first day I have maintained the motto of "Never stop learning" and every day my brain applies it.',
          text2:
            "I started in Web Development school. Obtaining a wide range of knowledge that I was able to apply instantly. Within a few months this had its fruits since I began to have my first personal projects and I also began to venture into the world of work.",
          text3:
            "To this day I follow one of the greatest pieces of advice that a great colleague gave me and that is to start. One can plan many things, but the world of IT is so amazing that plans can change in a matter of seconds. If this is your case, you can start with a free month in said academy and you will see the gratitude you will feel in a few months for having made the decision.",
        },
      },
    },
  }),
};
</script>

<style scoped></style>
