


import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    AsyncStorage,
    RefreshControl,
    TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';
import NetUtils from '../net/NetUtils';
import PublicOrderItems from './public/PublicOrderItem';

/**
 * 订单管理
 */

let userId;
const lds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
let ldsData = lds.cloneWithRows([]);
let pageIndex = 1;


export default class OrderManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            dataSource: ldsData,
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3f84fe' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>订单管理</Text>
                    <TouchableHighlight style={{ position: 'absolute', left: 15 }} onPress={() => this.props.navigator.goBack()}>
                        <Image source={require('../img/icon_back.png')}></Image>
                    </TouchableHighlight>
                </View>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.requestNetWord(pageIndex = 1)}
                        ></RefreshControl>
                    }
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <PublicOrderItems data={rowData}></PublicOrderItems>}
                ></ListView>
            </View>
        );
    }

    componentDidMount() {
        //加载数据
        AsyncStorage.getItem("userInfo", (error, result) => {
            if (error) {

            } else {
                let json = eval("(" + result + ")");
                userId = json.userId;
                this.requestNetWord(1);
            }
        });
    };

    requestNetWord(pageIndex) {
        let querydate = this.getQueryDate();
        let url = "http://192.168.2.112:8042/ShengDaAutoPlatform/client!businessQueryOrder";
        let service = "businessQueryOrder";
        let params = "service=businessQueryOrder&shopId=" + userId + "&orderType=5&querydate=" + querydate + "&page=" + pageIndex + "&pageSize=10";
        NetUtils.post(url, service, params, (result) => {
            if (pageIndex === 1) {
                ldsData = lds.cloneWithRows(result.orders);
                this.setState({
                    refreshing: false,
                    dataSource: ldsData,
                });
            } else {
                //append
                ldsData = ldsData.concat(result.orders);
                this.setState({
                    refreshing: false,
                    dataSource: ldsData,
                });
            }
        });
    }

    getQueryDate() {
        let type = this.props.params.itemType;
        let currentTime = parseInt(NetUtils.getCurrentDateFormat());
        if (type == 0) {
            return currentTime + "";
        } else if (type == 1) {
            return (currentTime - 1) + "";
        } else if (type == 2) {
            return (currentTime - 3) + "";
        } else if (type == 3) {
            return (currentTime - 7) + "";
        } else if (type == 4) {
            return "";
        }
    }
}