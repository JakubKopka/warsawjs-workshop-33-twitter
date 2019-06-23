<template>

    <!--    <b-card-->
    <!--            :title="tweet.author.name"-->
    <!--    &lt;!&ndash;            :sub-title="created_time"&ndash;&gt;-->
    <!--    :sub-title="created_time"-->
    <!--    :img-src="tweet.author.avatar_url"-->
    <!--    img-left-->
    <!--    class="m-3"-->
    <!--    >-->
    <b-card
            :title="tweet.author.name"
            :sub-title="tweet.created_time | myDate"
            :img-src="tweet.author.avatar_url"
            img-left
            class="m-3"
    >
        <b-card-text>
            {{tweet.body}}
        </b-card-text>
    </b-card>

</template>

<script>
    import { myDate }from '@/helpers/my-date'

    export default {
        name: 'tweet',
        props: {
            tweet: {
                id: String,
                body: String
            }
        },
        computed: {
            created_time(){
                const d = new Date(this.tweet.created_time)
                return d.toLocaleString('pl-PL');
            }
        },
        filters: {
            myDate(value) {
                return myDate(value)
            }
        }
    };
</script>

<style scoped>

</style>
