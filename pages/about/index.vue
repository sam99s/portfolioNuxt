<template>
    <v-container>
        <AboutMe />
        <Myself />
        <StudiesTable />
    </v-container>
</template>

<script>
import Myself from '../../layouts/myself.vue';
import AboutMe from '../../layouts/aboutMe.vue';
import StudiesTable from '../../layouts/studiesTable.vue';
export default {
    components: { Myself, AboutMe, StudiesTable }
}
</script>

<style scoped>

</style>