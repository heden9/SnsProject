import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { getTranslate } from '../../../fetch/Translate/translate';
import InputArea from '../../../components/InputArea';
import ResultArea from '../../../components/ResultArea';
import Sep from '../../../components/Separated';

export default class TranslationPage extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            areaValue: '',
            isLoading: false,
            result: ''
        };
    }
    static currentSubmit = '';
    changeHandle = (text) => {
        this.setState({
            areaValue: text
        });
    };
    submitHandle = () => {
        if(!this.state.areaValue)
            return;
        if(TranslationPage.currentSubmit == this.state.areaValue)
            return;
        this.setState({
            isLoading: true
        });
        TranslationPage.currentSubmit = this.state.areaValue;
        const result = getTranslate(this.state.areaValue,'');
        result
            .then((res)=>res.json())
            .then((json)=>{
                const data = json;
                console.log(data);
                this.setState({
                    result: data,
                    isLoading: false
                });
            })
            .catch((err)=>{
                console.log(err);
            });
    };
    singHandle = () => {
        const {navigate} = this.props.navigation;
        navigate('subpage1');
    };
    render() {
        return (
            <View style={styles.container}>
                <InputArea
                    areaValue={this.state.areaValue}
                    submitHandle={this.submitHandle}
                    clearHandle={()=>this.setState({areaValue: '' })}
                    singHandle={this.singHandle}
                    changeHandle={this.changeHandle}/>
                <Sep/>
                <ResultArea result={this.state.result} isLoading={this.state.isLoading}/>
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
