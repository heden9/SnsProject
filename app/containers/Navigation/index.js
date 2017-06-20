import React from 'react';
import {StackNavigator} from "react-navigation";
import RouterMap from '../../router/routerMap';
import LoginPage from '../../containers/PersonPage/loginPage';
import MessagePage from '../../containers/PersonPage/message';
import CollectionPage from '../../containers/PersonPage/collection';
const Router = ({ navigation }) => (
    <RouterMap navigation={navigation} />
);
const Login = ({ navigation }) => (
    <LoginPage navigation={navigation} />
);
const Message = ({ navigation }) => (
    <MessagePage navigation={navigation} />
);
const Collection = ({ navigation }) => (
    <CollectionPage navigation={navigation} />
);
export default SSNav = StackNavigator({
    Home: {
        screen: Router,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                backgroundColor: 'transparent',
                marginTop: -20,
                height: 0
            },
            headerBackTitle: null,
            gesturesEnabled: false,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: '登录',
            // headerTintColor: 'black',
            headerStyle: {
                elevation: 1,
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400'
            },
            gesturesEnabled: false,
        }
    },
    Message: {
        screen: Message,
        navigationOptions: {
            title: '消息中心',
            headerTintColor: 'white',
            headerStyle: {
                elevation: 1,
                backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400'
            },
            gesturesEnabled: false,
        }
    },
    Collection: {
        screen: Collection,
        navigationOptions: {
            title: '我的收藏',
            headerTintColor: 'white',
            headerStyle: {
                elevation: 1,
                backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400',
            },
            gesturesEnabled: false,
        }
    }
},{
    headerMode: 'screen',
});


if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        debug: () => {},
        error: () => {},
    };
}