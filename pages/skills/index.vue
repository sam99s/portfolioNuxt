<template>
  <v-container>
    <h2>Skills & tools</h2>
    <v-row>
      <v-col cols="12">
        <p>
          This is the section dedicated to the technical. In it you will find
          detailed information about my work tools. Among them you can see how
          long they have been incorporated and you will have the possibility to
          access my learning routes, estimated time and the certificates
          obtained.
        </p>
      </v-col>
    </v-row>
    <!-- Animation seccion -->
    <v-row>
      <v-col cols="12" md="6">
        <SplitCarousel :interval="2000" :showArrows="false" class="my-5">
          <SplitCarouselItem v-for="item in items" :key="item.key">
            <img :src="item.picture" alt="tool" />
          </SplitCarouselItem>
        </SplitCarousel>
        <p>
          Without a doubt, all developers have more facilities for a specific
          field, in relation to their peers. Currently, that area I feel is from
          the Front End side, specifically with JavaScript Vanilla and VUE JS.
        </p>
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <v-container class="d-flex justify-content-between">
          <v-row>
            <v-col cols="12" sm="6">
              <v-img src="/sam99s2021.png" height="70%" contain></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="pl-0">
              <ul>
                <li class="my-3">
                  My greatest strength: <br />
                  <v-icon color="#efd81d">{{
                    "mdi-language-javascript"
                  }}</v-icon>
                  JavaScript
                </li>
                <li class="my-3">
                  My current approach: <br />
                  <v-icon color="#9638ad">{{ "mdi-language-csharp" }}</v-icon>
                  .NET
                </li>
                <li class="my-3">
                  My tool lost in the time: <br />
                  <v-icon color="#366996">{{ "mdi-language-python" }}</v-icon>
                  Python
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" class="py-0 text-center">
        <p>
          In fact, this site is made with
          <span class="text-color__primary">NUXT JS</span>, that is, based on
          VUE JS and JavaScript, and you can visit its code by clicking the
          following button, to go to the GitHub site.
        </p>
        <a href="https://github.com/sam99s" target="_blank">
          <v-btn outlined elevation="2" color="#40e5a1">Go to repository</v-btn>
        </a>
      </v-col>
    </v-row>
    <!-- Summary -->
    <v-row class="pt-5">
      <h4>Summary of my academic history</h4>
      <v-row class="d-flex justify-content-between">
        <v-col cols="12" md="5">
          <p>
            At the end of high school, I made the decision to start studying
            Engineering at the UTN - FRC. I have loved technology since I was
            very young, although it was always on par with sports. Ultimately,
            it won and I choose to enter the world of IT.
          </p>
          <p>
            Realizing I didn't have a clear goal, I decide to take a year to
            find myself.
          </p>
          <p>
            When 2020 started, I knew software was a part of me. And from that
            moment, my head does not stop thinking about producing code.
          </p>
          <p>
            With Python fundamentals since 2017, move on to another
            object-oriented language... JavaScript.
          </p>
          <p>
            Throughout the year, study at Platzi. Then in 2021 I took 3 courses
            at Coderhouse and finally I returned to Platzi throughout this year
            to specialize in my passions.
          </p>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="6">
          <v-timeline dense>
            <v-timeline-item color="#40e5a1" class="text-center"
              >2017<br />
              Information systems engineering</v-timeline-item
            >
            <v-timeline-item color="#40e5a1" class="text-center"
              >2018<br />
              Information systems engineering</v-timeline-item
            >
            <v-timeline-item color="#40e5a1" class="text-center"
              >2019<br />
              Reflective and working year</v-timeline-item
            >
            <v-timeline-item color="#40e5a1" class="text-center"
              >2020<br />
              Web Developer</v-timeline-item
            >
            <v-timeline-item color="#40e5a1" class="text-center"
              >2021<br />
              Front-End Developer</v-timeline-item
            >
            <v-timeline-item color="#40e5a1" class="text-center"
              >2022<br />
              Full Stack Developer</v-timeline-item
            >
          </v-timeline>
        </v-col>
      </v-row>
    </v-row>
    <v-container class="my-8">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2>What am I currently studying?</h2>
        </v-col>
      </v-row>
      <CurrentlyStudy
        :title="studies.dotnet.title"
        :studyImg="studies.dotnet.studyImg"
        :text1="studies.dotnet.text1"
        :text2="studies.dotnet.text2"
        :headers="studies.dotnet.headers"
        :items="studies.dotnet.items"
        :institution="studies.dotnet.institution"
      />
    </v-container>
  </v-container>
</template>

<script>
import SplitCarousel from "../../components/SplitCarousel.vue";
import SplitCarouselItem from "../../components/SplitCarouselItem.vue";
import CurrentlyStudy from "../../layouts/currentlyStudy.vue";
// Documentation: https://github.com/Aaron00101010/vue-split-carousel/tree/1.x

export default {
  components: { SplitCarousel, SplitCarouselItem, CurrentlyStudy },
  data() {
    return {
      items: [
        {
          picture: "/tools/sqlLogo.png",
          key: 1,
        },
        {
          picture: "/tools/vueLogo.png",
          key: 2,
        },
        {
          picture: "/tools/dotnetLogo.png",
          key: 3,
        },
        {
          picture: "/tools/javascriptLogo.png",
          key: 4,
        },
        {
          picture: "/tools/nuxtLogo.png",
          key: 5,
        },
        {
          picture: "/tools/csharpLogo.png",
          key: 6,
        },
        {
          picture: "/tools/bootstrapLogo.png",
          key: 7,
        },
        {
          picture: "/tools/pugLogo.png",
          key: 8,
        },
        {
          picture: "/tools/postmanLogo.png",
          key: 9,
        },
        {
          picture: "/tools/firebaseLogo.png",
          key: 10,
        },
        {
          picture: "/tools/gitLogo.png",
          key: 11,
        },
        {
          picture: "/tools/htmlLogo.png",
          key: 12,
        },
        {
          picture: "/tools/linuxLogo.png",
          key: 13,
        },
        {
          picture: "/tools/reactLogo.png",
          key: 14,
        },
        {
          picture: "/tools/sassLogo.png",
          key: 15,
        },
        {
          picture: "/tools/vuetifyLogo.png",
          key: 16,
        },
        {
          picture: "/tools/wordpressLogo.png",
          key: 17,
        },
        {
          picture: "/tools/cssLogo.png",
          key: 18,
        },
      ],
      studies: {
        dotnet: {
          title: ".NET Developer",
          studyImg: "/skills/dotnet/dotnet.png",
          text1:
            "My main study path is focused on backend development. More precisely, it is about development in .NET with the C# language.",
          text2:
            "I decided to take this route in Platzi, to be more practical in my work with the technologies used and mainly, because of the power that this framework has.",
          headers: [
            {
              text: "Courses",
              value: "title",
              sortable: false,
              align: "start",
              width: "20%",
            },
            {
              text: "Studying",
              value: "studying",
              sortable: false,
              align: "center",
              width: "16%",
            },
            {
              text: "Approved",
              value: "approved",
              sortable: false,
              align: "center",
              width: "16%",
            },
            {
              text: "Start",
              value: "since",
              sortable: false,
              align: "center",
              width: "16%",
            },
            {
              text: "End",
              value: "until",
              sortable: false,
              align: "center",
              width: "16%",
            },
            {
              text: "Certificate",
              value: "link",
              sortable: false,
              align: "center",
              width: "16%",
            },
          ],
          items: [
            {
              title: "Basic programming",
              studying: false,
              approved: true,
              since: "07/2022",
              until: "07/2022",
              link: "/skills/dotnet/programacionBasica.png",
            },
            {
              title: "Introduction to Back-End Development",
              studying: false,
              approved: true,
              since: "06/2022",
              until: "06/2022",
              link: "/skills/dotnet/introBackend.png",
            },
            {
              title: "OOP",
              studying: false,
              approved: true,
              since: "06/2022",
              until: "06/2022",
              link: "/skills/dotnet/oop.png",
            },
            {
              title: "Git & GitHub",
              studying: false,
              approved: true,
              since: "08/2020",
              until: "08/2020",
              link: "/skills/dotnet/gitAndGithub.png",
            },
            {
              title: "Introduction to C#",
              studying: false,
              approved: true,
              since: "06/2022",
              until: "06/2022",
              link: "/skills/dotnet/introCsharp.png",
            },
            {
              title: ".NET Basics",
              studying: false,
              approved: true,
              since: "06/2022",
              until: "07/2022",
              link: "/skills/dotnet/fundamentosNET.png",
            },
            {
              title: "C# Basics with .NET Core 2.1",
              studying: false,
              approved: true,
              since: "07/2022",
              until: "07/2022",
              link: "/skills/dotnet/fundamentosCsharp.png",
            },
            {
              title: "C# with .NET Core 2.1",
              studying: true,
              approved: false,
              since: "07/2022",
              until: "07/2022",
              link: "",
            },
            {
              title: "Entity Framework Basics",
              studying: false,
              approved: false,
              since: "08/2022",
              until: "08/2022",
              link: "",
            },
            {
              title: "API's with .NET",
              studying: false,
              approved: false,
              since: "08/2022",
              until: "08/2022",
              link: "",
            },
            {
              title: "ASP.NET CORE",
              studying: false,
              approved: false,
              since: "08/2022",
              until: "09/2022",
              link: "",
            },
            {
              title: "Web development with Blazor and .NET",
              studying: false,
              approved: false,
              since: "09/2022",
              until: "09/2022",
              link: "",
            },
            {
              title: "Web Apps & Logic Apps in Azure",
              studying: false,
              approved: false,
              since: "10/2022",
              until: "10/2022",
              link: "",
            },
            {
              title: "Azure Devops: CI/CD Flows",
              studying: false,
              approved: false,
              since: "10/2022",
              until: "10/2022",
              link: "",
            },
          ],
          institution: {
            name: "Platzi",
            logo: "/platzi.png",
          },
        },
      },
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
