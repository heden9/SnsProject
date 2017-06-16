import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import AudioBtnGroup from '../../components/AudioBtnGroup';
import Sep from '../../components/Separated';
import CollectionBtn from '../Collection';
export default class WordItem extends React.PureComponent{
    render(){
        const result = this.props.result;
        return (
            <View style={[styles.container,{width: WindowInfo.width}]}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                        <Text style={styles.title}>{result.query}</Text>
                        <CollectionBtn isCollected={this.props.isCollected} onPress={()=>this.props.collectHandle(result)}/>
                    </View>
                    <Sep height={6}/>
                    {
                        result.basic && result.basic.explains.map((item, index)=>{
                            return <ExplainItem key={index} data={item}/>
                        })
                    }
                    <Sep height={10}/>
                    <View style={{flexDirection: 'row'}}>
                        <AudioBtnGroup speakUrl={result.speakUrl}/>
                        <Text style={{marginLeft: 10}}>{result.basic['uk-phonetic'] ? `英[${result.basic['uk-phonetic']}]` : ''}</Text>
                        <Text style={{marginLeft: 10}}>{result.basic['us-phonetic'] ? `美[${result.basic['us-phonetic']}]` : ''}</Text>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        minHeight: 100,
        justifyContent: 'center',
        padding: 20,
        // shadowColor: 'black',
        // shadowOpacity: .1,
        // shadowOffset: {width:1,height:1},
        // shadowRadius: 1
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