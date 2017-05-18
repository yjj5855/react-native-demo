import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    Platform,
    BackAndroid,
    DeviceEventEmitter,
} from 'react-native';
import { Router, Actions, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { store } from './client/store'
import scenes from './client/userScenes'
import storage from './client/common/storage'

const RouterWithRedux = connect()(Router);

export default class RootRouter extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" backgroundColor="#fff" />
                <Provider store={store}>
                    <RouterWithRedux scenes={scenes}/>
                </Provider>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => {
    let data = storage.getItem('hhh')
    console.log(data)
    return RootRouter
});