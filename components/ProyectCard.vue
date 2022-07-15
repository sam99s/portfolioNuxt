<template>
    <v-container class="mx-0 px-0">
        <v-card>
            <v-img
             :src="backgroundImage"
            >
                <v-card-title>
                    {{ title }}
                </v-card-title>
            </v-img>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "ProyectCard",
    props: {
        title: {
            type: String,
            requided: true
        },
        backgroundImage: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.v-card__title{
    justify-content: center;
    align-self: center;
    height: 100%;
}
</style>
