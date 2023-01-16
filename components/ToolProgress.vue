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
        <button v-if="item.link" @click="openModal(item)">
          <v-icon size="1rem">{{ "mdi-cursor-default-click-outline" }}</v-icon>
          View certificate
        </button>
        <span v-else>{{ "Soon" }}</span>
      </template>
    </v-data-table>

    <v-dialog
      v-if="modalFlag"
      v-model="modalFlag"
      @keydown.esc="modalFlag = false"
      transition="dialog-bottom-transition"
    >
      <CertificateImageModal
        @close="modalFlag = false"
        :item="certificateItem"
      />
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

<style lang="scss" scoped>
button {
  text-decoration: none;
  color: #40e5a1;
}

button:hover {
  color: #5dfaff;
  cursor: pointer;
  @keyframes pulse {
    from {
      transform: none;
    }
    50% {
      transform: scale(1.4);
    }
    to {
      transform: none;
    }
  }
  i {
    color: yellow;
    animation: pulse 1.2s linear infinite;
    transform-origin: center;
  }
}

::v-deep .v-dialog {
  max-width: 40% !important;
}

@media (min-width: 430px) and (max-width: 630px) {
  ::v-deep .v-dialog {
    max-width: 60% !important;
  }
}

@media (max-width: 429px) {
  ::v-deep .v-dialog {
    max-width: 90% !important;
  }
}
</style>
