<template>
  <v-container>
    <h2>My proyects</h2>
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="E-commerce"
            backgroundImage="/experience/candado.png"
            link=""
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Depordev"
            backgroundImage="/experience/Depordev/logo.png"
            link="https://github.com/sam99s/react-ecommerce"
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Dragon Ball Online"
            backgroundImage="/experience/DragonBallOnline/logo.png"
            link="https://github.com/sam99s/dragon-ball-online"
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Soon"
            backgroundImage="/experience/candado.png"
            link=""
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Top Secret"
            backgroundImage="/experience/candado.png"
            link=""
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Con Palmeras"
            backgroundImage="/experience/ConPlameras/ConPalmeras.png"
            link=""
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="API REST"
            backgroundImage="/experience/candado.png"
            link=""
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Football Knowledge"
            backgroundImage="/experience/FootballKnowledge/logo.png"
            link="https://github.com/sam99s/Football-Knowledge/tree/master"
          />
        </v-col>
      </v-row>

      <v-row v-if="moreFlag">
        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Task List"
            backgroundImage="/experience/TaskList/logo.png"
            link="https://github.com/sam99s/tasks-list"
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Chat Lan"
            backgroundImage="/experience/ChatLan/logo.png"
            link="https://github.com/sam99s/Chat-With-Websockets"
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="API REST"
            backgroundImage="/experience/candado.png"
            link=""
          />
        </v-col>

        <v-col cols="6" md="3" class="d-flex justify-center">
          <ProyectCard
            title="Blog"
            backgroundImage="/experience/candado.png"
            link=""
          />
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
          <v-btn
            outlined
            color="#40e5a1"
            elevation="2"
            @click="moreFlag = !moreFlag"
            >{{ showButton }}</v-btn
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
  watch: {
    moreFlag() {
      if (this.moreFlag) this.showButton = "Minus -";
      else this.showButton = "More +";
    },
  },

  data: () => ({
    moreFlag: false,
    showButton: "More +",
  }),
};
</script>

<style scoped></style>
