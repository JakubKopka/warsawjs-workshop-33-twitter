//@ts-check
import { assert } from 'chai';
import TweetList from "@/components/tweet-list"
import Tweet from "@/components/tweet"
import { mount } from '@vue/test-utils';


suite('App', () => {

    it('should render Tweet item in TweetList', () => {
        const wrapperTweetList = mount(TweetList)
        assert.ok(wrapperTweetList.contains(Tweet));
    });
});
