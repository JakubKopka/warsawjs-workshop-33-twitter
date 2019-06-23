<template>
    <div>
        <Tweet v-for="item in tweets"
               :key="item.id"
               :tweet="item">
        </Tweet>

    </div>
</template>

<script>
    import Tweet from './tweet';
    export default {
        name: 'TweetList',
        components: {
            Tweet
        },
        props:{
            tweets: Array
        },
        mounted() {
            console.log(this.tweets)
        }
    };

</script>


<style scoped>

</style>
