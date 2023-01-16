<template>
  <v-row class="my-4">
    <span>{{ title }}</span>
    <v-progress-linear
      :value="valueProp"
      height="7"
      rounded
      :color="colorProp"
      background-color="#FFF"
    ></v-progress-linear>
  </v-row>
</template>

<script>
export default {
    name: "StudieProgressBar",
    props: {
        valueProp: {
            type: Number,
            required: true
        },
        colorProp: {
            type: String,
            default: "#40e5a1"
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
