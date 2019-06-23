<template>
    <div>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
        <Tweet></Tweet>
    </div>
</template>

<script>
    import Tweet from './tweet';
    export default {
        name: 'TweetList',
        components: { Tweet }
    };

</script>


<style scoped>

</style>
