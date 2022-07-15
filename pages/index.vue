<template>
  <v-container>
    <WallpaperSam />
    <Proyects />
    <Myself />
  </v-container>
</template>

<script>
import WallpaperSam from '../components/WallpaperSam.vue';
import Proyects from '../layouts/proyects.vue';
import Myself from '../layouts/myself.vue';
export default {
    name: "IndexPage",
    components: { WallpaperSam, Proyects, Myself }
}
</script>
