import React from 'react';
import { StackNavigator } from 'react-navigation';

import FeedList from './screens/FeedList.js';
import FeedDetail from './screens/FeedDetail.js';
import EntryDetail from './screens/EntryDetail.js';
import AddFeed from './screens/AddFeed.js';

import store from './store';

const Navigator = StackNavigator({
  FeedList: {screen: FeedList },
  FeedDetail: {screen: FeedDetail },
  EntryDetail: {screen: EntryDetail },
  AddFeed: {screen: AddFeed }
});

export default class App extends React.Component {
    constructor(){
        super();
    } 
    render() {
        return <Navigator screenProps={{ store }}/>;
        }
}