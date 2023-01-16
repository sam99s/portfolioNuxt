<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :hide-default-footer="true"
      :items-per-page="100"
    >
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "PreviousStudies",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Tool",
          value: "subject",
          sortable: false,
          align: "center",
          width: "40%",
        },
        {
          text: "Year",
          value: "year",
          align: "center",
          width: "30%",
        },
        {
          text: "Frequency",
          value: "frequency",
          align: "center",
          width: "30%",
        },
      ],
    };
  },
};
</script>

<style scoped></style>