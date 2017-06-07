import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import LoginComponent from '../../components/LoginComponent';
import PersonBtn from '../../components/PersonPage_btn';
import Sep from '../../components/Separated';
export default class PersonPage extends React.PureComponent{
    render() {
        return (
            <View style={styles.back}>
                <LoginComponent/>
                <View>
                    <PersonBtn iconName={'bubbles'} title={'消息中心'} badge={1}/>
                    <Sep/>
                    <PersonBtn iconName={'user-following'} title={'我的关注'} />
                    <PersonBtn iconName={'star'} title={'我的收藏'} badge={12}/>
                    <Sep/>
                    <PersonBtn iconName={'settings'} title={'设置'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    back:{
        backgroundColor: 'rgb(247,247,247)',
        flexDirection: 'column',
        flex:1
    },
    content:{
        backgroundColor: 'white',
        height: 200
    }
});

