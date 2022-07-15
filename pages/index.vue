<template>
  <v-container>
    <WallpaperSam />
    <Proyects />
  </v-container>
</template>

<script>
import WallpaperSam from '../components/WallpaperSam.vue';
import Proyects from '../layouts/proyects.vue';
export default {
    name: "IndexPage",
    components: { WallpaperSam, Proyects }
}
</script>
