import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Platform
} from 'react-native';
import connectRedux from '../connectRedux'
import {styles} from '../styles/styles'

class Main extends Component {
    constructor(props) {
        super(props);
    };

    componentWillMount(){

        let userInfo = { type: 1 }
        if(userInfo){
            this.props.updateUserInfo(userInfo)
        }

    }

    render(){
        const { routes } = this.context;

        const app = this.props.$$app.toJS();

        return (
            <View style={styles.content}>
                <Text style={styles.textStyle}>hello world!!!</Text>
                <Text style={styles.textStyle}>{app.selectedTab}</Text>
            </View>
        )
    }
}

export default connectRedux(Main);