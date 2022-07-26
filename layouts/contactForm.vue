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
                name="name"
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
                name="email"
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
                name="subject"
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
                name="message"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
        <v-row>
          <v-col cols="12" class="text-end py-0">
            <input
              type="submit"
              form="form"
              id="buttonSandForm"
              class="my-2"
              value="Send Message!"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" class="pb-16 pl-16 contact-image__display">
        <v-img src="/sam99sss.png" contain max-height="58vh"/>
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
      if (!this.valid) {
        alert("Fill in the fields correctly");
      } else {
        emailjs.init("tKBuPFz2_fbLbimqT");
        const btn = document.getElementById("buttonSandForm");

        document
          .getElementById("form")
          .addEventListener("submit", function (event) {
            event.preventDefault();

            btn.value = "Sending...";

            const serviceID = "default_service";
            const templateID = "template_h2gchs8";

            emailjs.sendForm(serviceID, templateID, this).then(
              () => {
                btn.value = "Send Message!";
                alert("Sent!");
              },
              (err) => {
                btn.value = "Send Message!";
                alert(JSON.stringify(err));
              }
            );
          });
      }
    },
  },
};
</script>

<style scoped>
#buttonSandForm {
  color: white;
  text-decoration: none;
  margin: 4px 2px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  padding: 16px 32px;
  cursor: pointer;
}

#buttonSandForm:hover {
  background-color: #40e5a1;
  color: black;
  transition: 0.4s;
}
::v-deep .v-text-field__details {
  margin-bottom: 1px !important;
}

@media (max-width: 959px) {
  .contact-image__display {
    display: none;
  }
}

@media (max-width: 959px) and (min-width: 601px) {
  .contact-form__width {
    max-width: 75vw;
  }
}
</style>
