import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import TranslateHeader from '../../components/TranslateHeader';
import InputArea from '../../components/InputArea';
import ResultArea from '../../components/ResultArea';
export default class TranslationPage extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            areaValue: '',
            result: '123'
        };
    }
    changeHandle = (text) => {
        this.setState({
            areaValue: text
        });
    };
    submitHandle = () => {
        this.setState({
            result: this.state.areaValue
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <TranslateHeader/>
                <InputArea
                    areaValue={this.state.areaValue}
                    submitHandle={this.submitHandle}
                    clearHandle={()=>this.setState({areaValue: '' })}
                    changeHandle={this.changeHandle}/>
                <ResultArea result={this.state.result}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(247,247,247)',
    },
});

