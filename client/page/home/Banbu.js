import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    BackAndroid,
    DeviceEventEmitter,
} from 'react-native';
import {Badge, Flex, Button, ListView, RefreshControl, Tag} from 'antd-mobile';
import {is} from 'immutable'
import ListItem, {getCategoryPathAndIcon, style as listItemStyle} from '../../components/ListItem'
import {styles} from '../../styles/styles'

const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => !is(row1, row2) || row1 !== row2,
});

const _style = StyleSheet.create({
    date: {
        color: '#959595',
        fontSize: 11,
        marginBottom: 10
    },
    smallTag: {
        width: 27,
        height: 15,
        borderRadius: 7.5,
        borderWidth: 0.5,
        borderColor: '#1ab394',
        borderStyle: 'solid',
    },
    smallTagText: {
        fontSize: 10,
        color: '#1ab394',
        backgroundColor: 'transparent',
    }
});

class Banbu extends Component{

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    renderRow = function(item,s,index){

        const {path, image} = getCategoryPathAndIcon(item.category, item.uuid);

        if(!item.category){
            return (<View style={{height: 15,backgroundColor:'transparent'}}></View>)
        }
        const {routes} = this.context;

        if(item.category == '7'){
            item.title = (
                <Flex>
                    <Text style={listItemStyle.title}>{item.title}</Text>
                    <View style={{width:4}}></View>
                    <Flex justify="center" align="center" style={[_style.smallTag,{marginBottom:6}]}>
                        <Text style={_style.smallTagText}>官方</Text>
                    </Flex>
                </Flex>
            )
        }
        return (
            <ListItem
                onClick={()=>{ console.log(123) }} hasBorder={item.border}
                key={index} title={item.title} desc={item.subTitle || ' '} img={image}>
                <View>
                    <Text style={_style.date}>{item.showDate}</Text>
                    { item.count>0 ? <Image style={{alignSelf: 'flex-end'}} source={require('../../../img/red-point.png')}/> : <Text> </Text> }
                </View>
            </ListItem>
        )
    }
    onRefresh = function () {
        console.log(this)
        if(this.state.refreshing){
            return;
        }
        this.setState({ refreshing: true });

        this.props.messageList()
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                this.setState({ refreshing: false });
            })

    }
    componentWillMount(){
        this.props.messageList().catch((err)=>{
            console.log(err)
        })
    }
    render(){
        let messageList = this.props.$$user.get('messageList')?this.props.$$user.get('messageList').toJS():[];

        const showCompanyManagement = this.props.$$app.get('showCompanyManagement');
        messageList = [
            {
                category: "1",
                count: 1,
                data:[],
                showDate:"11:18",
                subTitle:"公司域名即日起更改为：www.hr.ibanbu.com",
                title: "公司公告"
            },
            {
                category: "2",
                count: 1,
                data:[],
                showDate:"10:22",
                subTitle:"销售一组张有学入职，快去送上祝福吧",
                title: "祝福提醒",
                border: false
            },
            {

            },
            {
                category: "5",
                count: 0,
                data:[],
                showDate:"",
                subTitle:"李晓华将于2016-06-01入职",
                title: "部门动态"
            },
            {
                category: "3",
                count: 1,
                data:[],
                showDate:"10:10",
                subTitle:"吴彦祖将于2016-06-01公出",
                title: "审批中心"
            },
            {
                category: "4",
                count: 0,
                data:[],
                showDate:"",
                subTitle:"",
                title: "考勤中心",
                border: false
            },
            {

            },
            {
                category: "6",
                count: 0,
                data:[],
                showDate:"",
                subTitle:"",
                title: "云档案",
                border: false
            },
            {

            },
            {
                category: "7",
                count: 0,
                data:[],
                showDate:"",
                subTitle:"",
                title: "班步动态",
                border: false
            },
        ]

        const data = dataSource.cloneWithRows(messageList)

        return (
            <View style={[{backgroundColor: '#f8f8f8'}]}>

                <ListView
                    style={{paddingBottom: 50}}
                    dataSource={data}
                    renderRow={this.renderRow.bind(this)}

                    refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                    />}
                />

            </View>
        )
    }
}

export default Banbu