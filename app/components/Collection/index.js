import React from 'react';
import {
    View
} from 'react-native';
import ImgBtn from '../ImgBtn';
import collect from '../../static/img/collection.png';
import collectO from '../../static/img/collection_o.png';
export default function Collection (props) {
    return (
        <View>
            <ImgBtn url={collect} url2={collectO} active={props.isCollected} onPress={props.onPress}/>
        </View>
    );
}


