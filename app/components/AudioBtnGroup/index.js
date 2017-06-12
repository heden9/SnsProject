import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import Video from 'react-native-video';
import ImgBtn from '../ImgBtn';
import happy from '../../static/img/happy.png';
export default class AudioBtnGroup extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            rate: 0,
            isPaused: true
        };
    }
    singHandle = () => {
        this.setState({
            rate: 1,
            isPaused: false
        });
        this.refs.video && this.refs.video.seek(0);
    };
    _iosVideo = () => {
        return (
            <Video
                ref='video'
                source={{ uri: this.props.speakUrl }}
                rate={this.state.rate}
                volume={1.0}
                paused={false}
                repeat={false}
            />
        );
    };
    _androidVideo = () => {
        return (
            <Video
                source={{ uri: this.props.speakUrl }}
                rate={1.0}
                volume={1.0}
                paused={this.state.isPaused}
                repeat={false}
                onEnd={()=>{
                    this.setState({
                        isPaused: true
                    })
                }}
            />
        );
    };
    renderVideo = () => {
        if(Platform.OS === 'ios'){
            return this._iosVideo();
        }else{
            return this._androidVideo();
        }
    };
    render(){
        return(
            <View style={{}}>
                <ImgBtn url={happy} onPress={this.singHandle}/>
                {
                   this.renderVideo()
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

});