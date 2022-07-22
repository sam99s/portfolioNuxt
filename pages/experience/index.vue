<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>My work experience and personal projects</h2>
      </v-col>
    </v-row>
    <MyExperience />
  </v-container>
</template>

<script>
import MyExperience from '../../layouts/myExperience.vue';
export default { components: { MyExperience } };
</script>

<style scoped></style>
