import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Badge from '../Badge';
export default class PersonPage extends React.PureComponent{
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor={'#eee'} style={styles.btnContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name={this.props.iconName} size={15} color={'grey'} style={{marginLeft: 10}}/>
                    <Text style={{marginLeft: 10,flex: 1}}>{this.props.title}</Text>
                    {
                        this.props.badge && this.props.badge > 0 ? <Badge num={this.props.badge}/> : <Text></Text>
                    }
                    <Icon name='arrow-right' size={15} style={{marginLeft: 5}} color={'#ccc'}/>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopWidth: .5,
        borderColor: '#eee',
        paddingHorizontal: 10,
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowOffset: {width:1,height:1},
        shadowRadius: 1
    },
});



