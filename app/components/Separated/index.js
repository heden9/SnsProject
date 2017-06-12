import React from 'react';
import {
    View
} from 'react-native';

export default function Separated (props){
    return(
        <View style={{height: props.height || 15}}></View>
    );
}