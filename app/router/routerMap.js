import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import TranslationPage from '../containers/TranslationPage';
import PersonPage from '../containers/PersonPage';
export default class Router extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            selectedTab: 'TranslationPage'
        };
    }
    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'TranslationPage'}
                    title="翻译"
                    renderIcon={()=><Icon name="address-book" size={21} color="grey" />}
                    renderSelectedIcon={() => <Icon name="address-book-o" size={24} color='#42b5fb' />}
                    selectedTitleStyle={style.selectedTitleStyle}
                    onPress={() => this.setState({ selectedTab: 'TranslationPage' })}>
                    { <TranslationPage/> }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Moments'}
                    title="圈子"
                    renderIcon={()=><Icon name="dot-circle-o" size={21} color="grey" />}
                    renderSelectedIcon={() => <Icon name="compass" size={24} color='#42b5fb' />}
                    selectedTitleStyle={style.selectedTitleStyle}
                    onPress={() => this.setState({ selectedTab: 'Moments' })}>
                    { <TranslationPage/> }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'PersonPage'}
                    title="我的"
                    renderIcon={()=><Icon name="user-o" size={21} color="grey" />}
                    renderSelectedIcon={() => <Icon name="user" size={25} color='#42b5fb' />}
                    selectedTitleStyle={style.selectedTitleStyle}
                    onPress={() => this.setState({ selectedTab: 'PersonPage' })}>
                    { <PersonPage/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const style = StyleSheet.create({
    selectedColor: {
        color: '#42b5fb',
    }
});