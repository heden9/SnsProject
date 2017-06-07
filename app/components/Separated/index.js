import React from 'react';
import {
    View
} from 'react-native';

export default class Separated extends React.PureComponent{
    render(){
        return(
            <View style={{height: this.props.height || 15}}></View>
        );
    }
}