import React from 'react';
import {StackNavigator} from "react-navigation";
import TranslatePage from '../homepage';
import Translatesubpage from '../subpage';
const TranslateHomePage = ({ navigation }) => (
    <TranslatePage navigation={navigation} />
);
const TranslateSubpage = ({ navigation }) => (
    <Translatesubpage navigation={navigation} />
);
export default TranslateNav = StackNavigator({
    Home: {
        screen: TranslateHomePage,
        navigationOptions: {
            title: '中英互译',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400',
                alignSelf:'center'
            },
            headerBackTitle: null,
            gesturesEnabled: true,
        },
    },
    subpage1: {
        screen: TranslateSubpage,
        navigationOptions: {
            title: '语音翻译',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#42b5fb',
                height: 55
            },
            headerTitleStyle: {
                fontWeight: '400',
                alignSelf:'center'
            },
            gesturesEnabled: true,
        }
    }
},{
    headerMode: 'screen'
});
