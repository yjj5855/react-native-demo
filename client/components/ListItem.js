import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Platform,
    Image,
} from 'react-native';
import { Badge, Flex } from 'antd-mobile'
import Avatar from './Avatar'

export const style = StyleSheet.create({
    box: {
        height: 65,
        // marginLeft: 15,
        paddingRight:15,
        paddingVertical:9,
        backgroundColor: '#fff',
    },
    boxBorder: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#dcdcdc',
    },
    title: {
        fontSize: 15,
        color: '#333',
        marginBottom: 6
    },
    subTitle: {
        fontSize: 13,
        color: '#7b7b7b'
    }
});

class ListItem extends Component{

    static get defaultProps () {
        return {
            img: false,
            nick: '',
            name: '',

            title: '',
            desc: '',
            oneline: true,
            hasBorder: true
        };
    }

    render(){

        let title = typeof this.props.title === 'string'
            ? <Text style={style.title}>{this.props.title}</Text>
            : this.props.title

        return (
            <Flex>
                <View style={{width:15,height: 65, backgroundColor: '#fff'}}></View>
                <Flex.Item>
                    <Flex style={[style.box, this.props.hasBorder?style.boxBorder:{}]} onClick={this.props.onClick}>
                        <View style={{width: 40,marginRight: 10}}>
                            <Avatar src={this.props.img} nick={this.props.nick} name={this.props.name} />
                        </View>
                        <Flex.Item>
                            {title}
                            <Text style={style.subTitle} numberOfLines={this.props.oneline == true ? 1 : 0}>
                                {this.props.desc || ' '}
                            </Text>
                        </Flex.Item>
                        <View>{this.props.children}</View>
                    </Flex>
                </Flex.Item>

            </Flex>

        )
    }

}

export default ListItem


export function getCategoryPathAndIcon(category, uuid){
    let path, image;
    switch (category) {
        case '0':
            path = '/boss-company-management'
            image = require('../../img/icon-category-0.png')
            break;
        case '1': //公司公告
            path = '/category/COMP_ANNOUNCEMENTS'
            image = require('../../img/icon-category-1.png')
            break;
        case '2': //祝福提醒
            path = '/category/WISH_REMIND'
            image = require('../../img/icon-category-2.png')
            break;
        case '3': //审批中心
            path = '/approval-center'
            image = require('../../img/icon-category-3.png')
            break;
        case '4': //考勤中心
            path = '/attendance-center'
            image = require('../../img/icon-category-4.png')
            break;
        case '5': //部门动态
            path = '/category-list/DEPT_EMPLOYEE_ENTRY,DEPT_EMPLOYEE_RESIGN,INTERVIEW'
            image = require('../../img/icon-category-5.png')
            break;
        case '6': //云档案
            path = null
            image = require('../../img/icon-category-6.png')
            break;
        case '7': //班步动态
            path = '/category/BAMBOO_TRENDS'
            image = require('../../img/icon-category-7.png')
            break;

        case '8': //生日祝福
            image = require('../../img/icon-category-8.png')
            break;
        case '10': //新人入职
            image = require('../../img/icon-category-10.png')
            break;

        case '20': //面试提醒
            path = '/category/INTERVIEW'
            image = require('../../img/icon-category-20.png')
            break;
        case '29': //员工入职
            path = '/category/DEPT_EMPLOYEE_ENTRY'
            image = require('../../img/icon-category-29.png')
            break;
        case '30': //员工离职
            path = '/category/DEPT_EMPLOYEE_RESIGN'
            image = require('../../img/icon-category-30.png')
            break;

    }
    return {
        path,
        image
    }
}