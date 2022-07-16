<template>
  <v-container>
    <WallpaperSam />
    <Proyects />
    <Myself />
    <ContactForm />
  </v-container>
</template>

<script>
import WallpaperSam from '../components/WallpaperSam.vue';
import Proyects from '../layouts/proyects.vue';
import Myself from '../layouts/myself.vue';
import ContactForm from '../layouts/contactForm.vue';
export default {
    name: "IndexPage",
    components: { WallpaperSam, Proyects, Myself, ContactForm }
}
</script>
