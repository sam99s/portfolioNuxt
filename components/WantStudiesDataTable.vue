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
  name: "WantStudiesDataTable",
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
          width: "50%",
        },
        {
          text: "Between",
          value: "between",
          align: "center",
          width: "50%",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
