import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Platform,
    Image,
} from 'react-native';
import { Badge, Flex } from 'antd-mobile'
import AvatarService from '../common/ddAvatar'

const sizeStyle = {
    md: 40,
    lg: 55,
    xlg: 100,
}
const fontSize = {
    md: 14,
    lg: 20,
    xlg: 30,
}

class Avatar extends Component{

    constructor(props) {
        super(props);
    };

    static get defaultProps() {
        return {
            src: false,
            nick: '',
            name: '',
            size: 'md'
        }
    }

    getUserAvatar = function(){
        const user = AvatarService.getAvatar(this.props.nick, this.props.name);
        return user
    }

    render(){
        let avatar = <View></View>;
        if(this.props.size == 'lg'){

        }else{

        }
        if(!this.props.src || this.props.src == ''){
            const user = this.getUserAvatar();
            avatar = (
                <Flex justify="center" style={{backgroundColor:user.color,width:sizeStyle[this.props.size],height:sizeStyle[this.props.size],borderRadius:100}}>
                    <Text style={{textAlign: 'center',color:'#fff',fontSize: fontSize[this.props.size]}}>{user.name || '12'}</Text>
                </Flex>
            )
        }else{
            avatar = (<Image source={this.props.src} style={{width:sizeStyle[this.props.size],height:sizeStyle[this.props.size]}}/>)
        }

        return (
            <View style={this.props.style}>{avatar}</View>
        )
    }

}

export default Avatar