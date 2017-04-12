import React, { Component } from 'react';
import {
    Text,
    View,
    WebView,
} from 'react-native';

/**
 * 保险
 */
export default class Insurance extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <WebView source={{ uri: 'http://m.ecpic.com.cn/mobilecar/sales/businessCollect/quickQuote?sourceType=FA&otherSource=4019&channel=01&isShow=1' }}></WebView>
            </View>
        );
    };
}