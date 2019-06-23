//@ts-check
import { assert } from 'chai';
import TweetList from "@/components/tweet-list"
import Tweet from "@/components/tweet"
import { mount } from '@vue/test-utils';


suite('App', () => {

    it('should render Tweet item in TweetList', () => {
        const wrapper = mount(TweetList, {
            propsData:{
              tweets: [
                  {id:'dfsfsdfsf', body: 'dfsfsddf'},
                  {id:'sdfsdf', body: 'okokok'}
              ]
            },
            stubs:{
                "b-card" : true,
                //"b-card" : '<p>Lorem ipsum</p>',
                "b-card-text" : true
            }
        });
        assert.ok(wrapper.contains(Tweet));
    });
});
