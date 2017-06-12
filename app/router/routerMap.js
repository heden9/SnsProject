import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import TranslationNav from '../containers/TranslationPage/nav';
import PersonPage from '../containers/PersonPage';
import Moments from '../containers/Moments';
export default class Router extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            selectedTab: 'TranslationPage',
            tabBarHeight: 50
        };
    }
    componentDidMount(){
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }
    selectHandle(PageName){
        const CustomAnimation = {
            duration: 400,
            update: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: .6
            }
        };
        LayoutAnimation.configureNext(CustomAnimation);
        this.setState({
            selectedTab: PageName ,
            //tabBarHeight: 50
        });
    };
    render(){
        return(
            <TabNavigator
                tabBarStyle={[{ height: this.state.tabBarHeight},style.tabBarStyle]}
                sceneStyle={{ paddingBottom: this.state.tabBarHeight }}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'TranslationPage'}
                    title="翻译"
                    renderIcon={()=><Icon name="address-book" size={21} color="grey" />}
                    renderSelectedIcon={() => <Icon name="address-book-o" size={24} color='#42b5fb' />}
                    selectedTitleStyle={style.selectedTitleStyle}
                    onPress={() => this.selectHandle('TranslationPage')}>
                    { <TranslationNav/> }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Moments'}
                    title="圈子"
                    renderIcon={()=><Icon name="dot-circle-o" size={21} color="grey" />}
                    renderSelectedIcon={() => <Icon name="compass" size={24} color='#42b5fb' />}
                    selectedTitleStyle={style.selectedTitleStyle}
                    onPress={() => this.selectHandle('Moments')}>
                    { <Moments/> }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PersonPage'}
                    title="我的"
                    renderIcon={()=><Icon name="user-o" size={21} color="grey" />}
                    renderSelectedIcon={() => <Icon name="user" size={25} color='#42b5fb' />}
                    selectedTitleStyle={style.selectedTitleStyle}
                    onPress={() => this.selectHandle('PersonPage')}>
                    { <PersonPage/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const style = StyleSheet.create({
    tabBarStyle: {
        overflow: 'hidden' ,
        paddingBottom: 3,
        borderTopWidth:1,
        borderColor: '#eee'
    },
    selectedColor: {
        color: '#42b5fb',
    }
});
global.WindowInfo = { height, width } = Dimensions.get('window');