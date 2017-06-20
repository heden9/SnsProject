import React from 'react';
import {
    ScrollView,
    Text
} from 'react-native';
import WordItem from '../../../../components/WordItem';
import { observer } from 'mobx-react';
@observer
export default class ResultArea extends React.PureComponent{
    render(){
        const result = this.props.result;
        if(result && result.errorCode != 0){
            err = '出错了';
        }else if(!result && !this.props.isLoading){
            err = '';
        }else{
            err = 'LOADING..';
        }
        return(
            <ScrollView
                bounces={false}
                >
                {
                    !this.props.isLoading && result ?
                        <WordItem  {...this.props}/>
                        :   <Text>{err}</Text>
                }
            </ScrollView>
        );
    }
}

