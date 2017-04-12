import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    PixelRatio,
    TouchableWithoutFeedback,
} from 'react-native';
import PublicMyItem from './public/PublicMyItem';

/**
 * 我的
 */
export default class My extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <View style={{ height: 50, backgroundColor: '#3f84fe', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>我的</Text>
                </View>

                <View style={{ height: 184, alignItems: 'center' }}>
                    <Image source={require('../img/ic_my_banner.png')}></Image>
                    <View style={{ position: 'absolute', top: 10, alignItems: 'center' }}>
                        <Image source={require('../img/ic_shop_icon.png')}></Image>
                        <Text style={{ fontSize: 15, color: 'white', marginTop: 10 }}>上海美容堂汽车服务有限公司</Text>
                    </View>
                </View>

                <ScrollView style={{ marginBottom: 50 }}>
                    <PublicMyItem name='商户二维码' style={{ marginTop: 10 }} onPress={() => alert('商户二维码')}></PublicMyItem>
                    <PublicMyItem name='打款记录' style={{ marginTop: 10 }} onPress={() => alert('打款记录')}></PublicMyItem>
                    <View style={{ marginLeft: 5, height: 1 / PixelRatio.get(), backgroundColor: '#eaebef' }}></View>
                    <PublicMyItem name='联系业务员' onPress={() => alert('联系业务员')}></PublicMyItem>
                    <PublicMyItem name='合作机构' style={{ marginTop: 10 }} onPress={() => alert('合作机构')}></PublicMyItem>
                    <PublicMyItem name='关于我们' style={{ marginTop: 10 }} onPress={() => alert('关于我们')}></PublicMyItem>
                    <View style={{ marginLeft: 5, height: 1 / PixelRatio.get(), backgroundColor: '#eaebef' }}></View>
                    <PublicMyItem name='意见反馈' onPress={() => alert('意见反馈')}></PublicMyItem>
                    <View style={{ marginLeft: 5, height: 1 / PixelRatio.get(), backgroundColor: '#eaebef' }}></View>
                    <PublicMyItem name='重置密码' onPress={() => alert('重置密码')}></PublicMyItem>
                    <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableWithoutFeedback onPress={() => alert('退出登录')}>
                            <Image source={require('../img/tcdl_btn.png')} ></Image>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>

            </View>
        );
    };
}

var style = StyleSheet.create({
    container: {
        flex: 1,
    }
});