import React,{ Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
export default class ImgBackground extends Component{
    render(){
        return(
            <Image source={{uri:this.props.url}} style={style.container} resizeMethod={'scale'}>
                <View style={{position: 'absolute',flex: 1}}>
                    {this.props.children}
                </View>
            </Image>
        );
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(54,57,66)',
    }
});