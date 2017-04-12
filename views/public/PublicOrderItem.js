
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    PixelRatio,
} from 'react-native';

let data;

export default class PublicOrderItem extends Component{

    constructor(props){
        super(props);
        data = this.props.data;
    }

    render(){
        return (
            <View style = {style.container}>
                <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                    <Image source={require('../../img/icon-xcfu.png')}></Image>
                    <Text style={{color:'#343742',marginLeft:5}}>{data.activityName}</Text>
                    <View style={{flex:1}}></View>
                    <Text style={{color:'#ef3c42',}}>已完成</Text>
                </View>
                <View style={{marginLeft:10,backgroundColor:'#ebeaef',height:1/PixelRatio.get()}}></View>
                <View style={{padding:10}}>
                    <Text style={{color:'#868686',}}>订单编号:{data.orderId}</Text>
                    <Text style={{color:'#868686',marginTop:5}}>服务时间:{data.date}</Text>
                </View>
                <View style={{marginLeft:10,backgroundColor:'#ebeaef',height:1/PixelRatio.get()}}></View>

                <View style={{padding:20,flexDirection:'row',justifyContent:'flex-end'}}>
                    <Image source={require('../../img/btn-ckxq.png')}></Image>
                </View>
            </View>
        );
    };
}

var style = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:'white',
    }
});