

import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    BackAndroid,
    Platform,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Index from './Index';
import Insurance from './Insurance';
import My from './My';

/**
 * 主界面
 */



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
        };
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={{ height: 50, overflow: 'hidden' }}
                sceneStyle={{ paddingBottom: 0 }}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'index'}
                    title="首页"
                    renderIcon={() => <Image source={require('../img/ic_home_index.png')} />}
                    renderSelectedIcon={() => <Image source={require('../img/ic_home_index_pressed.png')} />}
                    onPress={() => this.setState({ selectedTab: 'index' })}>
                    {
                        <View style={{ flex: 1 }}>
                            <Index {...this.props} ></Index>
                        </View>
                    }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'insurance'}
                    title="保险"
                    renderIcon={() => <Image source={require('../img/ic_home_bx.png')} />}
                    renderSelectedIcon={() => <Image source={require('../img/ic_home_bx_pressed.png')} />}
                    onPress={() => this.setState({ selectedTab: 'insurance' })}>
                    {
                        <View style={{ flex: 1 }}>
                            <Insurance {...this.props}></Insurance>
                        </View>
                    }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    renderIcon={() => <Image source={require('../img/ic_home_my.png')} />}
                    renderSelectedIcon={() => <Image source={require('../img/ic_home_my_pressed.png')} />}
                    onPress={() => this.setState({ selectedTab: 'my' })}>
                    {
                        <View style={{ flex: 1 }}>
                            <My {...this.props}></My>
                        </View>
                    }
                </TabNavigator.Item>
            </TabNavigator>
        );
    };
}