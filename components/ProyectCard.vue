<template>
  <v-container class="mx-0 px-0 proyect-container__width">
    <a :href="link" target="_blank" v-if="link">
      <v-card outlined class="proyect-card__decoration">
        <v-card-text>
          <v-img :src="backgroundImage" class="proyect-card__hover"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-col cols="12" class="text-center title-span__size">
            <span>
              <v-icon color="green">{{ "mdi-open-in-new" }}</v-icon>
              {{ title }}</span
            >
          </v-col>
        </v-card-actions>
      </v-card>
    </a>
    <v-card v-else outlined>
      <v-img :src="backgroundImage"></v-img>
      <v-card-actions>
        <v-col cols="12" class="text-center title-span__size">
          <span>{{ title }}</span>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProyectCard",
  props: {
    title: {
      type: String,
      requided: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #40e5a140;
}

a {
  text-decoration: none;
}

.proyect-card__decoration{
  border: #38a97a 1px solid;
  box-shadow: 10px 5px 5px #38a97a;
}

.proyect-card__decoration:hover{
  box-shadow: 20px 5px 5px #38a97a80;
  background: #38a97a40;
  transition: 1s;
}

.proyect-card__hover:hover{
  transform: scale(1.1);
  transition: 1s;
}

@media (min-width: 960px) {
  .proyect-container__width {
    max-width: 80%;
  }
  span {
    font-size: 0.87rem;
  }
}

@media (max-width: 959px) and (min-width: 601px) {
  .proyect-container__width {
    max-width: 60%;
  }
}

@media (max-width: 760px) {
  .title-span__size {
    padding: 1px 3px;
  }
}

@media (min-width: 451px) and (max-width: 599px) {
  span {
    font-size: 16px;
  }
}

@media (max-width: 450px) {
  span {
    font-size: 8px;
  }
}
</style>
