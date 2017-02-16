import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    BackAndroid,
    Image,
} from 'react-native';
import { Flex, List, WhiteSpace, Modal } from 'antd-mobile';
import { _localStorage } from '../../common/bbPlugin'
import Avatar from '../../components/Avatar'
import ListItem from '../../components/ListItem'
import { styles } from '../../styles/styles'


const _style = StyleSheet.create({
    item: {
        height: 50,
    },
    itemTitle: {
        color: '#333',
        fontSize: 15,
    },
    itemTitleGray: {
        color: '#aaa',
        fontSize: 15,
        marginRight: 13
    },
    itemImage: {
        width:20,
        height:20,
        marginRight: 16.5,
    },

    itemBig: {
        height: 80,
    },
    itemAvatar: {
        width: 55,
        height: 55,
        marginRight: 15,
    }
});


class Personal extends React.Component {

    constructor(){
        super();
        this.state = {
            showModal: false
        }
    }

    render() {
        const infoJson = _localStorage.getItem('infoJson');
        const boss = this.props.$$app.get('boss');
        const user = this.props.$$app.get('user');
        let userInfo = null;
        if(boss){
            userInfo = boss
        }else{
            userInfo = user
        }
        const {routes} = this.context
        return (
            <View>
                <List.Item
                    style={_style.itemBig}
                    thumb={
                        <Avatar style={_style.itemAvatar} nick={'张三'} size="lg" />
                    }
                    arrow="horizontal"
                    extra={<View style={{height: 80}}></View>}
                    onClick={() => { console.log('头像') }}
                >
                    <Flex>
                        <Text style={_style.itemTitle}>张三</Text>
                        <View style={{width:0.5,backgroundColor:'#aaa',height:15,marginHorizontal : 10}}></View>
                        <Text style={_style.itemTitleGray}>产品规划部</Text>
                        <Text style={_style.itemTitleGray}>产品经理</Text>
                    </Flex>
                    <List.Item.Brief>智者千虑，必有一失；愚者千虑，必有一得</List.Item.Brief>
                </List.Item>
                <WhiteSpace size="lg"/>

                <List>
                    <List.Item
                        style={_style.item}
                        thumb={<Image style={_style.itemImage} source={require('../../../img/personal-me.png')}/>}
                        arrow="horizontal"
                        onClick={() => {
                            console.log('个人信息')
                        }}
                    >
                        <Text style={_style.itemTitle}>个人信息</Text>
                    </List.Item>
                    <List.Item
                        arrow="horizontal"
                        thumb={<Image style={_style.itemImage} source={require('../../../img/personal-gz.png')}/>}
                        onClick={()=>{

                        }}
                    >
                        <Text style={_style.itemTitle}>工资查询</Text>
                    </List.Item>
                    <List.Item arrow="horizontal"
                               thumb={<Image style={_style.itemImage} source={require('../../../img/personal-sb.png')}/>}
                               onClick={()=>{

                               }}
                    >
                        <Text style={_style.itemTitle}>社保查询</Text>
                    </List.Item>
                    <List.Item arrow="horizontal"
                               thumb={<Image style={_style.itemImage} source={require('../../../img/personal-yb.png')}/>}
                               onClick={()=>{

                               }}
                    >
                        <Text style={_style.itemTitle}>医保查询</Text>
                    </List.Item>
                    <List.Item arrow="horizontal"
                               thumb={<Image style={_style.itemImage} source={require('../../../img/personal-gjj.png')}/>}
                               onClick={()=>{

                               }}
                    >
                        <Text style={_style.itemTitle}>公积金查询</Text>
                    </List.Item>
                </List>
                <WhiteSpace size="lg"/>
                
                <List>
                    <List.Item
                        arrow="horizontal"
                        thumb={<Image style={_style.itemImage} source={require('../../../img/personal-setting.png')}/>}
                        onClick={()=>{
                            
                        }}
                    >
                        <Text style={_style.itemTitle}>设置</Text>
                    </List.Item>
                    <List.Item
                        arrow="horizontal"
                        thumb={<Image style={_style.itemImage} source={require('../../../img/personal-help.png')}/>}
                        onClick={()=>{

                        }}
                    >
                        <Text style={_style.itemTitle}>帮助</Text>
                    </List.Item>
                    <List.Item arrow="horizontal"
                        thumb={<Image style={_style.itemImage} source={require('../../../img/personal-feedback.png')}/>}
                        onClick={()=>{

                        }}
                    >
                        <Text style={_style.itemTitle}>反馈</Text>
                    </List.Item>
                </List>
                <WhiteSpace size="lg"/>

            </View>
        )
    }
}

export default Personal