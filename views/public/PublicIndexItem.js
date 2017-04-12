

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    PixelRatio,
} from 'react-native';


/**
 * 首页item layout
 */
export default class PublicIndexItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {
                var press = this.props.onPress;
                if (press) {
                    press();
                }
            }}>

                <View>
                    <View style={style.container}>
                        <Image source={require('../../img/icon_jt.png')}></Image>
                        <Text style={style.leftText}>{this.props.leftName}</Text>
                        <View style={{ flex: 1 }}></View>
                        <Text style={style.rightText}>{this.props.rightName}</Text>
                        <Image source={require('../../img/sy-more.png')}></Image>
                    </View>

                    {this.showLine()}
                </View>
            </TouchableWithoutFeedback>
        );
    };

    showLine(){
       let showLine = this.props.showLine;
       if(showLine === 'true'){
            return <View style={{marginLeft:15,height:1/PixelRatio.get(),backgroundColor:'#eaebef'}}></View>
       }
    }
}

var style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    leftText: {
        color: 'black',
        fontSize: 15,
        marginLeft: 6,
    },
    rightText: {
        color: '#868686',
        fontSize: 12
    }
});