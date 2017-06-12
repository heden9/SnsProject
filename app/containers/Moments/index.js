import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export default class Moments extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <Text>THIS IS MOMENTS</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});