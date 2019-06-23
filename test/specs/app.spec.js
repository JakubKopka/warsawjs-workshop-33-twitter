//@ts-check
import { assert } from 'chai';
import App from "@/components/app";
import TweetList from "@/components/tweet-list"
import Tweet from "@/components/tweet"
import { mount } from '@vue/test-utils';
// import nock from 'nock'

suite('App', () => {
    it('should plus 2 and 2', () => {
        const input = 2 + 2;
        const output = 4;
        assert.equal(input, output);

    });

    // it('should plus 2 and 3', () => {
    //     const input = 2 + 3;
    //     const output = 8;
    //     assert.equal(input, output);
    //
    // });

    it('should render single TweetList item', () => {
        const wrapper = mount(App, {
            stubs:{
                Tweet: true
            }
        });
        assert.ok(wrapper.contains(TweetList));
    });

    it.skip('should fetch tweets via HTTP request', async () => {
        const wrapper = mount(App, {
            stubs: {
                TweetList: true // mokowanie
                // "b-card" : true,
                // "b-card-text" : true
            }
        });

        assert.isFunction(wrapper.vm.fetchTweets)
        const ft = wrapper.vm.fetchTweets;

        nock("http://127.0.0.1:3000")
            .get("/tweets").reply(200, [{id: 'id', body: 'body'}])

        const response = await ft();
        assert.lengthOf(response, 1)
    })


});
