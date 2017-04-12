

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio,
    TouchableWithoutFeedback,
    ToastAndroid,
    ScrollView,
    AsyncStorage,
} from 'react-native';
import PublicIndexItem from './public/PublicIndexItem';
import PublicOrderMangerLayout from './public/PublicOrderMangerLayout';
import NetUtils from '../net/NetUtils';
import OrderManager from './OrderManager';


/**
 * 首页
 */
export default class Index extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //加载数据
        var url = 'http://192.168.2.112:8042/ShengDaAutoPlatform/remit!clerkDetail';
        var service = "clerkDetail";
        var userInfo;
        AsyncStorage.getItem("userInfo", (error, result) => {
            if (error) {

            } else {
                userInfo = eval('(' + result + ')');
                var params = "service=clerkDetail&pageSize=10&page=1&userId=" + userInfo.userId;
                NetUtils.post(url, service, params, (result) => {
                    ToastAndroid.show(result.resultDesc, ToastAndroid.SHORT);
                });
            }
        });
    };

    saoYisao() {
        ToastAndroid.show("扫一扫", ToastAndroid.SHORT);
    };
    shuChuanma() {
        ToastAndroid.show("输串码", ToastAndroid.SHORT);
    };
    callPhone() {
        ToastAndroid.show("打电话", ToastAndroid.SHORT);
    };

    orderManager() {
        let navigator = this.props.navigator;
        if(navigator){
            navigator.push({
                name:'订单管理',
                component:OrderManager,
                params:{
                    itemType:'4',
                },
            });
        }
    };
    orderStatistics() {
        ToastAndroid.show("订单统计", ToastAndroid.SHORT);
    };
    partnerList() {
        ToastAndroid.show("合作机构", ToastAndroid.SHORT);
    };

    render() {
        return (
            <View style={style.container}>

                <View style={style.toolBar}>
                    <Text style={{ fontSize: 18, color: 'white', flex: 1, textAlign: 'center' }} >盛大商户端</Text>
                    <TouchableWithoutFeedback style={{ paddingLeft: 5, paddingRight: 5, }} onPress={() => this.callPhone()}>
                        <Image source={require('../img/ic_phone.png')}></Image>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.header} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableWithoutFeedback onPress={() => this.saoYisao()}>
                            <Image source={require('../img/ic_saoyisao.png')} ></Image>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={{ height: 88, width: 1 / PixelRatio.get(), backgroundColor: 'white' }}></View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableWithoutFeedback onPress={() => this.shuChuanma()}>
                            <Image source={require('../img/ic_shuchuanma.png')}></Image>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <ScrollView style={style.scrollview}>
                    <PublicIndexItem leftName="订单管理" rightName='查看全部订单' showLine='true' onPress={() => this.orderManager()}></PublicIndexItem>
                    <PublicOrderMangerLayout {...this.props} layoutType="1"></PublicOrderMangerLayout>

                    <View style={{ marginTop: 10 }}>
                        <PublicIndexItem leftName="订单统计" rightName='' showLine='false' onPress={() => this.orderStatistics()}></PublicIndexItem>
                    </View>

                    <Image source={require('../img/index-banner.png')} style={{ marginTop: 10 }}></Image>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <PublicIndexItem leftName="合作机构" rightName='查看所有机构' showLine='true' onPress={() => this.partnerList()}></PublicIndexItem>
                        <PublicOrderMangerLayout {...this.props} layoutType="2" ></PublicOrderMangerLayout>
                    </View>

                </ScrollView>

            </View>

        );
    };
}

var style = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolBar: {
        height: 50,
        backgroundColor: '#3f84fe',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#3f84fe',
        height: 165,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollview: {
        backgroundColor: '#ebeaf0',
        marginBottom: 50,
    },
});