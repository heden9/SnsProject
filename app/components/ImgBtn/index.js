import React from 'react';
import {
    Image,
    LayoutAnimation,
    TouchableWithoutFeedback
} from 'react-native';
export default class ImgBtn extends React.PureComponent{
    componentWillReceiveProps(){
        const CustomAnimation = {
            duration: 400,
            update: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: .6
            }
        };
        LayoutAnimation.configureNext(CustomAnimation);
    }
    render(){
        return(
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                {
                    this.props.active ?
                        <Image source={this.props.url2} style={{width: 18,height: 18 ,marginTop: -2, marginRight: -2 }} />
                        :<Image source={this.props.url} style={{width: 15,height: 15}} />
                }
            </TouchableWithoutFeedback>
        );
    }
}