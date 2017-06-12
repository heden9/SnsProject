import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl
} from 'react-native';
import AudioBtnGroup from '../../components/AudioBtnGroup';
import Sep from '../../components/Separated';
import ImgBtn from '../../components/ImgBtn';
import collect from '../../static/img/collection.png';
import collectO from '../../static/img/collection_o.png';
export default class ResultArea extends React.PureComponent{
    constructor(props, context){
        super(props,context);
        this.state = {
            isCollected: false
        };
    }
    collectHandle = () => {
        this.setState({
            isCollected: !this.state.isCollected
        })
    };
    render(){
        const result = this.props.result.errorCode == 0 ? this.props.result : '';
        let err =  '您还未翻译哦';
        if(result && result.errorCode != 0){
            err = '出错了';
        }else{
            err = '您还未翻译哦';
        }
        return(
            <ScrollView
                bounces={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.isLoading}
                    />
                }>
                <View style={[styles.container,{width: WindowInfo.width}]}>
                    {
                        result ?
                            <View style={{flexDirection: 'column'}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                    <Text style={styles.title}>{result.query}</Text>
                                    <ImgBtn url={collect} url2={collectO} active={this.state.isCollected} onPress={this.collectHandle}/>
                                </View>
                                <Sep height={6}/>
                                {
                                    result.basic && result.basic.explains.map((item, index)=>{
                                        return <ExplainItem key={index} data={item}/>
                                    })
                                }
                                <Sep height={10}/>
                                <View style={{flexDirection: 'row'}}>
                                    {
                                        !this.props.isLoading?
                                            <AudioBtnGroup speakUrl={result.speakUrl}/>
                                            : <Text></Text>
                                    }
                                    <Text style={{marginLeft: 10}}>{result.basic['uk-phonetic'] ? `英[${result.basic['uk-phonetic']}]` : ''}</Text>
                                    <Text style={{marginLeft: 10}}>{result.basic['uk-phonetic'] ? `美[${result.basic['us-phonetic']}]` : ''}</Text>
                                </View>
                            </View>
                            : <Text>{err}</Text>
                    }
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowOffset: {width:1,height:1},
        shadowRadius: 1
    },
    title: {
        fontSize: 20,
    }
});

const ExplainItem = (props) => {
    return (
        <View>
            <Sep height={6}/>
            <Text>{props.data}</Text>
        </View>
    )
};