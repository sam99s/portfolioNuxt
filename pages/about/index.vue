<template>
    <v-container>
        <AboutMe />
        <Myself />
    </v-container>
</template>

<script>
import Myself from '../../layouts/myself.vue';
import AboutMe from '../../layouts/aboutMe.vue';
export default {
    components: { Myself, AboutMe }
}
</script>

<style scoped>

</style>