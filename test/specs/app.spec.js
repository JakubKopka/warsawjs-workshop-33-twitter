//@ts-check
import { assert } from 'chai';
import App from "@/components/app";
import TweetList from "@/components/tweet-list"
import Tweet from "@/components/tweet"
import { mount } from '@vue/test-utils';


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
        const wrapper = mount(App);
        assert.ok(wrapper.contains(TweetList));
    });

});
