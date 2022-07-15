<template>
  <v-container class="px-0 pt-0 pb-4 bg-sam">
    <v-row>
      <v-col cols="12" class="pa-0">
        <h1>
          Hi!,<br />
          I'm Samuel Schulz<br />
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="text-center my-8">
        <v-btn
         outlined
         elevation="2"
         color="#40e5a1"
         to="/contact"
         router
         exact
        >Contact me!</v-btn>
      </v-col>
      <v-spacer />
      <v-col cols="4" class="pa-0">
        <p>Welcome to my portfolio</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "WallpaperSam",
  components: {
  },
  data() {
    return {
      typedTitle: ["Web", "Full stack"],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 3em;
}

.bg-sam {
  background: url("/sam99s.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  background-position-y: bottom;
}

p {
  font-size: 3.5em;
  font-weight: 500;
}
</style>
