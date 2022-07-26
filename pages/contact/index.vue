<template>
    <v-container class="footer-contact__overflow">
        <ContactForm />
    </v-container>
</template>

<script>
import ContactForm from '../../layouts/contactForm.vue';
export default {
    components: { ContactForm }
}
</script>

<style scoped>
.footer-contact__overflow{
    overflow-x: hidden;
}
</style>