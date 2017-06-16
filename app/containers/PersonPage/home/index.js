import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import LoginComponent from '../../../components/LoginComponent';
import PersonBtn from '../../../components/PersonPage_btn';
import Sep from '../../../components/Separated';
import UserInfo from '../../../mobx/store';
export default class PersonPage extends React.PureComponent{
    enterHandle = (str) => {
        const {navigate} = this.props.navigation;
        navigate(str);
    };
    render() {
        console.log(this.props);
        return (
            <ScrollView style={styles.back}>
                <LoginComponent onPress={() => this.enterHandle('Login')}/>
                <View>
                    <PersonBtn iconName={'bubbles'} title={'消息中心'} badge={1} onPress={() =>this.enterHandle('Message')}/>
                    <Sep/>
                    <PersonBtn iconName={'user-following'} title={'我的关注'} />
                    <PersonBtn iconName={'star'} title={'我的收藏'} badge={12} onPress={() =>this.enterHandle('Collection')}/>
                    <Sep/>
                    <PersonBtn iconName={'settings'} title={'设置'} />
                </View>
            </ScrollView>
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

