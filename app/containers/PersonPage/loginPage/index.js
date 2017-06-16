import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { observer } from 'mobx-react';
@observer
export default class LoginPage extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 12,margin: 10}}>登录后可多端同步、享受更多的学习资源</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center'
    }
});