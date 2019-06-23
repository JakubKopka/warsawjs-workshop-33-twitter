<template>
    <b-card class="m-3">
        <b-card-text>
            {{ tweet.body }}
        </b-card-text>
    </b-card>
</template>

<script>
    export default {
        name: 'tweet',
        props: {
            tweet: {
                id: String,
                body: String
            }
        }
    };
</script>

<style scoped>

</style>
