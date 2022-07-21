<template>
  <v-card>
    <v-card-title>Learning path</v-card-title>
    <v-card-subtitle v-if="institution">
      {{ institution.name }}
    </v-card-subtitle>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :hide-default-footer="true"
      :items-per-page="100"
      dense
    >
      <template v-slot:[`item.studying`]="{ item }">
        <v-icon v-if="item.studying" color="blue">{{ progressCheck }}</v-icon>
        <span v-else>{{ "" }}</span>
      </template>
      <template v-slot:[`item.approved`]="{ item }">
        <v-icon v-if="item.approved" color="#40e5a1">{{ check }}</v-icon>
        <span v-else>{{ "" }}</span>
      </template>
      <template v-slot:[`item.link`]="{ item }">
        <btn v-if="item.link" @click="openModal(item)"> View certificate </btn>
        <span v-else>{{ "Soon" }}</span>
      </template>
    </v-data-table>

    <v-dialog
      v-if="modalFlag"
      v-model="modalFlag"
      max-width="40%"
      @keydown.esc="modalFlag = false"
      transition="dialog-bottom-transition"
    >
      <CertificateImageModal @close="modalFlag = false" :item="certificateItem"/>
    </v-dialog>
  </v-card>
</template>

<script>
import CertificateImageModal from "./CertificateImageModal.vue";
export default {
  name: "ToolProgress",
  components: { CertificateImageModal },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    institution: {
      type: Object,
      default: null,
    },
    check: {
      type: String,
      default: "mdi-check-circle-outline",
    },
    progressCheck: {
      type: String,
      default: "mdi-progress-check",
    },
  },
  data() {
    return {
      modalFlag: false,
      certificateItem: {},
    };
  },
  methods: {
    openModal(item) {
      this.certificateItem = item;
      this.modalFlag = true;
    },
  },
};
</script>

<style scoped>
btn {
  text-decoration: none;
  color: #40e5a1;
}

btn:hover {
  color: #5dfaff;
  cursor: pointer;
}
</style>
