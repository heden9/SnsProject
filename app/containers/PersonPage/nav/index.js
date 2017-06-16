import React from 'react';
import {StackNavigator} from "react-navigation";
import PersonHome from '../home';
import Message from '../message';
import Collection from '../collection';
import LoginPage from '../loginPage';
const PersonHomePage = ({ navigation }) => (
    <PersonHome navigation={navigation} />
);
const MessagePage = ({ navigation }) => (
    <Message navigation={navigation} />
);
const CollectionPage = ({ navigation }) => (
    <Collection navigation={navigation} />
);
const Login = ({ navigation }) => (
    <LoginPage navigation={navigation} />
);
export default TranslateNav = StackNavigator({
    Home: {
        screen: PersonHomePage,
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'transparent',
                marginTop: -20,
                height: 0
            },
            headerBackTitle: null,
            gesturesEnabled: false,
        },
    },
    MessageP1: {
        screen: MessagePage,
        navigationOptions: {
            title: '消息中心',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400',
                alignSelf:'center'
            },
            gesturesEnabled: false,
        }
    },
    Collection1: {
        screen: CollectionPage,
        navigationOptions: {
            title: '我的收藏',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400',
                alignSelf:'center'
            },
            gesturesEnabled: false,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: '登录',
            // headerTintColor: 'black',
            headerStyle: {
                // backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400',
                alignSelf:'center'
            },
            gesturesEnabled: false,
        }
    }
},{
    headerMode: 'screen',
});
