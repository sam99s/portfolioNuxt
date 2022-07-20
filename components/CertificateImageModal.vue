<template>
  <v-card class="mx-auto">
    <v-card-title>{{ item.title }}</v-card-title>

    <v-img :src="item.link"></v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon @click="close"> Close </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CertificateImageModal",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
