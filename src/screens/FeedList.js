import React from 'react';
import {} from 'native-base';
import { observer } from 'mobx-react/native';
import {} from '../actions';

@observer
export default class FeedList extends React.Component{
    static navigationOptions = (props) => ({
        title: 'My Feeds',
        headerRight: <Button 
      transparent
        onPress{ () => props.navigation.navigate('Add Feed')}>
            <Icon name='add'/>
          </Button>                                  
    })

}