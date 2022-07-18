<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
    :hide-default-footer="true"
    :items-per-page="100"
  >
    <template v-slot:[`item.priorKnowledge`]="{ item }">
      <v-icon v-if="item.priorKnowledge" color="#40e5a1">{{ check }}</v-icon>
      <v-icon v-else color="orange">{{ noCheck }}</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "StudiesDataTable",
  props: {
    items: {
      type: Array,
      required: true,
    },
    check: {
      type: String,
      default: "mdi-check-circle-outline",
    },
    noCheck: {
      type: String,
      default: "mdi-close-circle-outline",
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Technology / Language",
          value: "subject",
          sortable: false,
          align: "start",
          width: "16%",
        },
        {
          text: "Institution",
          value: "institution",
          sortable: false,
          align: "center",
          width: "14%",
        },
        {
          text: "Since",
          value: "since",
          sortable: true,
          align: "center",
          width: "14%",
        },
        {
          text: "Until",
          value: "until",
          sortable: true,
          align: "center",
          width: "14%",
        },
        {
          text: "Prior knowledge",
          value: "priorKnowledge",
          sortable: false,
          align: "center",
          width: "14%",
        },
        {
          text: "Currently state",
          value: "currentlyState",
          sortable: false,
          align: "center",
          width: "14%",
        },
        {
          text: "Objetive",
          value: "objetive",
          sortable: false,
          align: "center",
          width: "14%",
        },
      ],
    };
  },
};
</script>
