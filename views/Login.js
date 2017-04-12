

import React, { Component } from 'react';
import {
    StyleSheet,
    ToastAndroid,
    View,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
import NetUtils from '../net/NetUtils';
import Home from './Home';

/**
 * 登录界面
 */
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    /**
    * 登录
    * @param {*} username 
    * @param {*} password  md5加密
    */
    onLogin(username, password) {
        var url = 'http://192.168.2.112:8042/ShengDaAutoPlatform/client!businessUserLogin';
        var params = "service=businessUserLogin&businessUserName=" + username + "&businessPassword=" + NetUtils.MD5(password);
        var service = "businessUserLogin";
        NetUtils.post(url, service, params, (result) => {
            //存储数据
            AsyncStorage.setItem("userInfo", JSON.stringify(result), (error) => {
                if (error) {
                    alert('数据保存失败');
                } else {
                    //跳转到主界面
                    let navigator = this.props.navigator;
                    if (navigator) {
                        navigator.push({
                            name: '主界面',
                            component: Home,
                        });
                    }
                }
            })
        });
    }

    render() {
        return (
            <View style={style.container}>

                <View style={{ marginTop: 80, alignItems: 'center' }}>
                    <Image source={require('../img/ic_login_banner.png')}></Image>
                </View>

                <TextInput
                    secureTextEntry={true}
                    style={{ marginTop: 50 }}
                    placeholder='请输入帐号'
                    value={this.state.username}
                    onChangeText={text => this.setState({
                        username: text
                    })}
                >
                </TextInput>

                <TextInput
                    placeholder='请输入密码'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={text => this.setState({
                        password: text
                    })}
                >
                </TextInput>

                <TouchableHighlight
                    style={style.textCenter}
                    underlayColor='gray'
                    onPress={() => this.onLogin(this.state.username, this.state.password)}>
                    <Text style={style.button}>登录</Text>
                </TouchableHighlight>

            </View>
        );
    };
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F83FE',
        paddingLeft: 30,
        paddingRight: 30
    },
    button: {
        color: '#3F83FE',
        fontSize: 20,
    },
    textCenter: {
        height: 50,
        marginTop: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});