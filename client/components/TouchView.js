import React, { Component } from 'react'
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native'


class TouchView extends Component{

    constructor(props) {
        super(props);
    };

    static get defaultProps() {
        return {
            onPress: ()=>{}
        }
    }
    render(){

        return (
            <TouchableHighlight onPress={this.props.onPress} activeOpacity={0.5} underlayColor="transparent">
                <View flexDirection="row" alignItems="center">
                    {this.props.children}
                </View>
            </TouchableHighlight>
        )
    }

}

export default TouchView