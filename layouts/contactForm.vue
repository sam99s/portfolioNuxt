<template>
  <v-container class="contact-form__width">
    <h2 class="mb-5">Contact me</h2>
    <v-row>
      <v-col cols="12" md="6" class="text-center">
        <v-form
          ref="form"
          form="form"
          id="form"
          @submit.prevent="send()"
          v-model="valid"
        >
          <v-row>
            <v-col cols="12" md="6" class="py-0 px-1">
              <v-text-field
                v-model="name"
                label="Name"
                dense
                outlined
                type="String"
                :maxlength="20"
                :rules="[rules.required]"
                class="py-1 px-1"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0 px-1">
              <v-text-field
                v-model="email"
                label="Email"
                dense
                outlined
                type="String"
                :maxlength="30"
                :rules="[rules.required, rules.email]"
                class="py-1 px-1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-0 px-1">
              <v-text-field
                v-model="subject"
                label="Subject"
                dense
                outlined
                type="String"
                :maxlength="15"
                :rules="[rules.required]"
                class="py-1 px-1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-0 px-1">
              <v-textarea
                outlined
                label="Message"
                rows="6"
                no-resize
                :value="message"
                v-model="message"
                :rules="[rules.required, rules.maxLength(message, 300)]"
                class="py-1 px-1"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
        <v-row>
          <v-col cols="12" class="text-end py-0">
            <v-btn
              type="submit"
              form="form"
              color="#40e5a195"
              :disabled="!valid"
              class="my-2"
              >Send Message!</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" class="pb-16 pl-16 contact-image__display">
        <v-img src="/sam99sss.png" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rules from "@/utils/rules.js";

export default {
  name: "contact",
  data() {
    return {
      valid: true,
      rules: rules,
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },

  methods: {
    send() {
      console.log("name: ", this.name);
    },
  },
};
</script>

<style scoped>
::v-deep .v-text-field__details {
  margin-bottom: 1px !important;
}

@media (max-width: 959px) {
  .contact-image__display{
    display: none;
  }
}

@media (max-width: 959px) and (min-width: 601px) {
  .contact-form__width{
    max-width: 75vw;
  }
}
</style>
