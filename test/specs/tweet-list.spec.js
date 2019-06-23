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
                  {
                      "id": "cb04b29c-fda8-5692-bae4-192ad82ad1f5",
                      "created_time": "Thu Nov 22 2018 00:19:03 GMT+0100 (czas środkowoeuropejski standardowy)",
                      "author": {
                          "id": "3cdcba8a-0452-55b2-9c14-56b1de5431e5",
                          "name": "Franco Pacocha",
                          "avatar_url": "https://s3.amazonaws.com/uifaces/faces/twitter/n3dmax/128.jpg"
                      },
                      "body": "Evabufa umo gor ureobutu jawawbut cet pi kid hiwu razlita tadazeov vubnaste vulomuke suprob fassiwe."
                  }

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
