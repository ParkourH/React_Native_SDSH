
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import OrderManager from '../OrderManager';


/**
 * 首页 订单管理,合作机构的layout
 */

const orderManagerNames = ['今日订单', '昨日订单', '三日订单', '一周订单',];
const orderManagerIcons = [require('../../img/icon-j.png'),
require('../../img/icon-z.png'),
require('../../img/icon-s.png'),
require('../../img/icon-yz.png')];

const partnerNames = ['广发个金','浦发银行','中国银行','江苏邮政','北京银行'];
const partnerIcons = [require('../../img/yh-icon-gfyh.png'),
require('../../img/yh-icon-pfyh.png'),
require('../../img/yh-icon-zgyh.png'),
require('../../img/yh-icon-jsyc.png'),
require('../../img/yh-icon-bjyh.png'),];


export default class PublicOrderMangerLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                {this.addItems()}
            </View>
        );
    };

    addItems() {
        let layoutType = this.props.layoutType;
        if(layoutType === "1"){
            return this.addOrderManagerLayout();
        }else{
            return this.addPartnerLayout();
        }    
    };

    addPartnerLayout(){
        let items = new Array();
        partnerNames.map((value,index) => {
            var name = partnerNames[index];
            var icon = partnerIcons[index];
            var item = <TouchableWithoutFeedback key={index} onPress={() => {
                    //合作机构
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={icon}></Image>
                    <Text style={{ marginTop: 5, color: '#3d404e', fontSize: 12 }}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
            items.push(item);
        });

        return items;
    };

    addOrderManagerLayout(){
        let items = new Array();
        orderManagerNames.map((value,index) => {
            let name = orderManagerNames[index];
            let icon = orderManagerIcons[index];
            let item = <TouchableWithoutFeedback key={index} onPress={() => this.startPageOrderManager(index)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={icon}></Image>
                    <Text style={{ marginTop: 5, color: '#3d404e', fontSize: 12 }}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
            items.push(item);
        });

        return items;
    };

    startPageOrderManager(itemType){     
        let navigator = this.props.navigator;
        if(navigator){
            navigator.push({
                name:'订单管理',
                component:OrderManager,
                params:{
                    itemType:itemType,
                }
            });
        }
    };
}

var style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});