import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginComponent extends React.PureComponent{
    render() {
        return (
            <View style={styles.header}>
                <View>
                    <Text style={{fontSize: 25,color: 'white'}}>登录</Text>
                    <Text style={{marginTop: 10,fontSize: 12,color: 'white'}}>立即登录，解锁更多实用功能</Text>
                </View>
                <View style={styles.HeadPortrait}>
                    <Icon name='user-circle' size={60} color={'#eee'}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#36c2fb',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    HeadPortrait:{
        overflow: 'hidden',
        width:60,
        height:60,
        backgroundColor: 'white',
        borderRadius: 50
    }
});

