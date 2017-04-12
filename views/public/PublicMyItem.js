

import React, { Component } from 'react';
import {
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    View,
} from 'react-native';

export default class PublicMyItems extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight style={this.props.style} onPress={() => this.props.onPress()}>
                <View style={style.container}>
                    <Text style={{ color: "#343742", fontSize: 15 }}>{this.props.name}</Text>
                    <Image source={require('../../img/more.png')} style={{ position: 'absolute', right: 5 }}></Image>
                </View>
            </TouchableHighlight>
        );
    }
}

var style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    }
});