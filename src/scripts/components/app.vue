<template>
    <div>
      <TweetList :tweets="tweets"/>
    </div>
</template>

<script>
    import TweetList from "@/components/tweet-list";
    export default {
        name: 'App',
        components: {
            TweetList
        },
        data(){
            return {
                tweets:
                    [
                    {id:"eloelo320", body: "Elo elo 321 to jest body"},
                    {id:"kuba", body: "kuba to jest body"},
                    {id:"test", body: "test to jest body"},
                    {id:"xyz", body: "xyz to jest body"},
                    ]
            }
        }
    };
</script>

<style scoped>

</style>
