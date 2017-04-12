import React , { Component } from 'react';
import {
    View,
    Image, 
    BackAndroid,
    Platform,
} from 'react-native';
import Login from './Login';

/**
 * 启动界面
 */

let navigator;

export default class Splash extends Component{

    constructor(props){
        super(props);
        navigator = this.props.navigator;
    }


    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnMount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid() {
        if (navigator) {
            let routes = navigator.getCurrentRoutes();
            if (routes.length > 3) {
                navigator.pop();
                return true;
            }
        }
        return false;
    }

    componentDidMount(){
        setTimeout(() => {
            const navigator = this.props.navigator;
            if(navigator){
                navigator.push({
                    name:'登录界面',
                    component:Login,
                    params:{
                        data:'login test',
                    }
                });
            }
        },2000);
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Image source={require('../img/ic_splash.png')}></Image>
            </View>
        );
    }
}