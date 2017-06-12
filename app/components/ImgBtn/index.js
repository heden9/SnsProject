import React,{ Component } from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
export default function ImgBtn(props){
    return(
        <TouchableWithoutFeedback onPress={props.onPress}>
            {
                props.active ?
                    <Image source={props.url2} style={{width: 18,height: 18 ,marginTop: -2, marginRight: -2 }} />
                    :<Image source={props.url} style={{width: 15,height: 15}} />
            }
        </TouchableWithoutFeedback>
    );
}