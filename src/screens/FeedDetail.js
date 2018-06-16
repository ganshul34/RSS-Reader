import React from 'react';
import { Container, Content, List, ListItem, Text, Button, Icon, Spinner } from 'native-base';
import { observer} from 'mobx-react/native';
import { selectEntry, fetchFeed, removeFeed} from '../actions';
import {ActivityIndicator} from 'react-native';

@observer
export default class FeedDetail extends React.Component{
    static navigationOptions = (props) => ({
        title: props.screenProps.store.selectedFeed.title,
  headerRight: <Button 
      transparent
      onPress={()=> {
          removeFeed(props.navigation.state.params.feedUrl);
          props.navigation.goBack();
        }
      }><Icon name='trash'/></Button>
    });
}
