import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    InteractionManager
} from 'react-native';
import UserInfo from '../../../mobx/store';
import WordItem from '../../../components/WordItem';
import Sep from '../../../components/Separated';
export default class Collection extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            data: []
        };
    }
    collectHandle = (data) => {
        UserInfo.changeCollect(data,!data.isCollected);
        this.setState({
            data: UserInfo.localMyCollect.values()
        })
    };
    componentDidMount(){
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                data: UserInfo.localMyCollect.values()
            })
        });
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.data.length == 0 ?
                        <Text>Loading...</Text>:
                        <FlatList
                            data={this.state.data.reverse()}
                            ItemSeparatorComponent={()=><Sep height={5}/>}
                            extraData={this.state}
                            keyExtractor={(item, index) => index}
                            renderItem={({item,index}) =>
                                <WordItem result={item} isCollected={!!item.isCollected} collectHandle={this.collectHandle}/>
                            }
                        />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

