import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { getTranslate } from '../../../fetch/Translate/translate';
import InputArea from '../../../components/InputArea';
import ResultArea from './ResultArea';
import Sep from '../../../components/Separated';
import UserInfo from '../../../mobx/store';
import { observer } from 'mobx-react';
import TranHeader from '../../../components/TranslateHeader';
@observer
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
                this.setState({
                    result: data,
                    isLoading: false
                });
            })
            .catch((err)=>{
                console.warn(err);
            });
    };
    singHandle = () => {
        const {navigate} = this.props.navigation;
        navigate('subpage1');
    };
    collectHandle = () => {
        const obj = this.state.result;
        const flag = !UserInfo.localMyCollect.get(this.state.result.query);
        UserInfo.changeCollect(obj,flag);
    };
    render() {
        return (
            <View style={styles.container}>
                <TranHeader />
                <InputArea
                    areaValue={this.state.areaValue}
                    submitHandle={this.submitHandle}
                    clearHandle={()=>this.setState({areaValue: '' })}
                    singHandle={this.singHandle}
                    changeHandle={this.changeHandle}/>
                <Sep/>
                <ResultArea result={this.state.result} isLoading={this.state.isLoading} collectHandle={this.collectHandle} isCollected={!!UserInfo.localMyCollect.get(this.state.result.query)} />
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
