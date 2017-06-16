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
import shutUp from '../../static/img/shutUp.png';
export default class AudioBtnGroup extends React.PureComponent{
    constructor(props, context){
        super(props, context);
        this.state = {
            rate: 0,
            isPaused: true,
            isLoading: false,
            mute: true,
            volume: 0
        };
    }
    componentWillReceiveProps(){
        this.setState({
            rate: 0,
            isPaused: true,
            mute: true,
            volume: 0
        })
    }
    singHandle = () => {
        this.setState({
            rate: 1,
            isPaused: false,
            mute: false,
            volume: 1
        });
        this.refs.video && this.refs.video.seek(0);
    };
    loadSuccess = () => {
        this.setState({
            isLoading: true
        })
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
                onLoad={this.loadSuccess}
                onError={()=>console.log('load error!')}
            />
        );
    };
    _androidVideo = () => {
        return (
            <Video
                source={{ uri: this.props.speakUrl }}
                rate={1.0}
                volume={this.state.volume}
                mute={this.state.mute}
                paused={this.state.isPaused}
                repeat={false}
                onEnd={()=>{
                    this.setState({
                        isPaused: true
                    })
                }}
                onLoad={this.loadSuccess}
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
            <View>
                {
                    this.state.isLoading?
                        <ImgBtn url={happy} onPress={this.singHandle}/>
                        :<ImgBtn url={shutUp}/>
                }
                {this.renderVideo()}
            </View>
        );
    }
}
