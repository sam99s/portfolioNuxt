<template>
  <v-container>
    <h2>My proyects</h2>
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="E-commerce"
            backgroundImage="/experience/candado.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Depordev"
            backgroundImage="/experience/Depordev/logo.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Dragon Ball Online"
            backgroundImage="/experience/DragonBallOnline/logo.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard title="Soon" backgroundImage="/experience/candado.png" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Top Secret"
            backgroundImage="/experience/candado.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Con Palmeras"
            backgroundImage="/experience/ConPlameras/ConPalmeras.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="API REST"
            backgroundImage="/experience/candado.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Football Knowledge"
            backgroundImage="/experience/FootballKnowledge/logo.png"
          />
        </v-col>
      </v-row>

      <v-row v-if="moreFlag">
        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Task List"
            backgroundImage="/experience/TaskList/logo.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="Chat Lan"
            backgroundImage="/experience/ChatLan/logo.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard
            title="API REST"
            backgroundImage="/experience/candado.png"
          />
        </v-col>

        <v-col cols="12" md="4" lg="3">
          <ProyectCard title="Blog" backgroundImage="/experience/candado.png" />
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
          <v-btn
            outlined
            color="#40e5a1"
            elevation="2"
            @click="moreFlag = !moreFlag"
            >More +</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ProyectCard from "../components/ProyectCard.vue";
export default {
  name: "Proyects",
  components: { ProyectCard },

  data: () => ({
    moreFlag: false,
  }),
};
</script>

<style scoped></style>
