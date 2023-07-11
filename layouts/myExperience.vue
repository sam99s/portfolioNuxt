<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <p>
          My work experience currently consists of two stages in the IT field.
          Meanwhile, my projects are distributed throughout my career, having
          created several since 2020. In them you can see applied technologies
          such as .NET, Vue.js, React.js, SQL, among others, by entering the
          corresponding repositories.
        </p>
      </v-col>
    </v-row>
    <!-- Lubee -->
    <Jobs
      :title="jobs.lubee.title"
      :position="jobs.lubee.position"
      :subtitle="jobs.lubee.subtitle"
      :jobImg="jobs.lubee.jobImg"
      :jobGif="jobs.lubee.jobGif"
      :text="jobs.lubee.text"
      :additionalText="jobs.lubee.additionalText"
      :tasks="jobs.lubee.tasks"
      :site="jobs.lubee.site"
    />
    <!-- Shifta -->
    <Jobs
      :title="jobs.shifta.title"
      :position="jobs.shifta.position"
      :subtitle="jobs.shifta.subtitle"
      :jobImg="jobs.shifta.jobImg"
      :jobGif="jobs.shifta.jobGif"
      :text="jobs.shifta.text"
      :additionalText="jobs.shifta.additionalText"
      :tasks="jobs.shifta.tasks"
      :site="jobs.shifta.site"
    />
    <!-- Macena -->
    <Jobs
      :title="jobs.macena.title"
      :position="jobs.macena.position"
      :subtitle="jobs.macena.subtitle"
      :jobImg="jobs.macena.jobImg"
      :jobGif="jobs.macena.jobGif"
      :text="jobs.macena.text"
      :additionalText="jobs.macena.additionalText"
      :tasks="jobs.macena.tasks"
      :site="jobs.macena.site"
    />
    <!-- Blue Digital -->
    <Jobs
      :title="jobs.blueDigital.title"
      :position="jobs.blueDigital.position"
      :subtitle="jobs.blueDigital.subtitle"
      :jobImg="jobs.blueDigital.jobImg"
      :jobGif="jobs.blueDigital.jobGif"
      :text="jobs.blueDigital.text"
      :additionalText="jobs.blueDigital.additionalText"
      :tasks="jobs.blueDigital.tasks"
      :site="jobs.blueDigital.site"
    />
    <!-- Personal Proyects -->
    <Proyects />
    <!-- Ending -->
    <v-row>
      <v-col cols="12" class="text-center my-8">
        <p>
          Throughout my life I was linked to labor terms. This is something that
          I carry implicitly, since from an early age I identified myself with
          productivity.
        </p>
        <p>
          Before definitely entering the world of IT, I spent 5 years in the
          world of sales, which taught me the value that I carry as a standard:
          perseverance.
        </p>
        <p>
          To this day, thanks to everything I have learned, I am determined to
          fight for my personal growth, responsibly fulfilling all the proposed
          objectives.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Jobs from "../components/Jobs.vue";
import Proyects from "./proyects.vue";
export default {
  name: "myExperience",
  components: { Jobs, Proyects },
  data() {
    return {
      jobs: {
        lubee: {
          title: "LUBEE",
          position: "Full Stack Developer",
          subtitle: "Feb 2023 - Currently",
          jobImg: "/experience/Lubee/Lubee.png",
          jobGif: "/experience/Lubee/LubeeGif.gif",
          text: "In Lubee, we build software solutions and applications with quality and speed. The use of technology allows to have control of what happens, secure, consolidated and consistent information to make intelligent decisions in real time.",
          additionalText:
            "In my role, I perform a multitasking role in more than 3 projects in parallel. Within these I use tools such as .NET 6.0, WPF, WooCommerce, Vue.js, MySQL, SQL Server, among others.",
          tasks: {
            task1: "Troubleshoot local to remote sales synchronization",
            task2: "Desktop application developer with .net",
            task3: "Database builder with mysql",
            task4: "WooCommerce Management",
            task5: "Development and maintenance of API's",
            task6: "Front End Development with Vue.js, piaf & Bootstrap-vue",
            task7: "Management of databases php admin, SQL server and MySQL",
            task8: "Create stored procedures",
            task9: "Creating image compression with JavaScript",
          },
          site: "https://lubee.com.ar/",
        },
        shifta: {
          title: "SHIFTA",
          position: "Software Engineer Ssr",
          subtitle: "Oct 2022 - Dic 2022",
          jobImg: "/experience/Shifta/shifta.png",
          jobGif: "/experience/Shifta/shiftaGif.gif",
          text: "Shifta creates great products and wonderful experiences by using innovative and emerging technologies. We combine the latest architectural standards, open source technologies and various business platforms with our proven expertise in delivering high quality software.",
          additionalText:
            "In my role, I developed a short API integration of HubSpot and Tiendanube with .NET",
          tasks: {
            // task1: "",
            // task2: "",
            // task3: "",
            // task4: "",
            // task5: "",
            // task6: "",
            // task7: "",
            // task8: "",
            // task9: "",
          },
          site: "https://www.weareshifters.com/en/",
        },
        macena: {
          title: "Macena",
          position: "Full Stack Developer",
          subtitle: "Nov 2021 - Sep 2022",
          jobImg: "/experience/macena/macenaWorks.png",
          jobGif: "/experience/macena/macenaGif.gif",
          text: "Macena is dedicated to health management for companies and institutions in the sector. Geclisa is health software for the management of clinics, sanatoriums and hospitals, while Gecros is a comprehensive management system for social, prepaid and mutual funds.",
          additionalText:
            "In my role, I worked with technologies like Vue.js, implementing Vuex and Vuetify from the client side. On the server side, develop different services with .NET and SQL Server.",
          tasks: {
            task1: "Configuration of digital totems",
            task2: "Shift rescheduling",
            task3: "Styles for live medical consultations",
            task4: "Shift configuration",
            task5: "Creating services for the API (CRUD)",
            /* task6: "", */
            task7: "Totem Home Screen Styles",
            task8: "Advanced settings",
            /* task9: "", */
          },
          site: "https://www.macena.com.ar/",
        },
        blueDigital: {
          title: "Blue Digital",
          position: "WordPress Designer",
          subtitle: "Abr 2021 - Jul 2021",
          jobImg: "/experience/blueDigital/logo.png",
          jobGif: "/experience/blueDigital/bd.gif",
          text: "It was a startup from the city of Córdoba, in which I learned a lot about managing Wordpress. I was here for a short period of time, around 3 months, as I had to continue my studies. For the same development two sites: bluedigital.com.ar & crautomotores.com.ar",
          tasks: {},
        },
      },
    };
  },
};
</script>

<style scoped></style>
