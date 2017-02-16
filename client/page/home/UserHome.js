import React, {Component} from 'react'
import { Actions } from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    BackAndroid,
    DeviceEventEmitter,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';
import { is } from 'immutable'
import {Button, List, Flex, WhiteSpace, Badge, Icon, ActionSheet, ListView, RefreshControl} from 'antd-mobile'
import moment from 'moment'
import TouchView from '../../components/TouchView'

moment.locale('zh-cn');

const styles = StyleSheet.create({
    btnSign: {
        position: 'relative',
        width: 92,
        height: 92,
        backgroundColor: '#1ab394',
        borderRadius: 92,
    },
    btnSignBorder: {
        position: 'absolute',
        left: 0.5,
        top: 0.5,
        backgroundColor: 'transparent',
        width: 91,
        height: 91,
        borderRadius: 91,
        borderWidth: 4,
        borderColor: '#fff',
        borderStyle: 'solid'
    },
    btnSignText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'transparent',
    },
    textTime: {
        textAlign: 'center',
        color: '#1ab394',
        fontSize: 20,
        marginBottom: 10
    },
    textDate: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 13,
        marginBottom: 10
    },
    textType: {
        textAlign: 'center',
        color: '#aaa',
        fontSize: 14
    },

    line: {
        position: 'absolute',
        left: 0,
        top: 9,
        right: 0,
        width: 375,
        height: 1,
        backgroundColor: '#dcdcdc',
    },

    gridTextNumber: {
        textAlign: 'center',
        fontSize: 20,
        color: '#535353',
        marginBottom: 15,
        fontWeight: '200'
    },
    gridImage: {
        width: 31,
        height: 31,
        marginBottom: 10,
    },
    gridTextDesc: {
        textAlign: 'center',
        fontSize: 13,
        color: '#7d7d7d'
    },
    gridLine: {
        backgroundColor: '#dcdcdc',
        width: 0.5,
        height: 50
    }

});

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    };

    componentDidMount() {
        console.log(Actions.main({}))
        // this.props.userHome().finally(()=>{
        //
        // })
    }
    renderRow = function(list, sectionID, rowID,){
        

        return (
            <Flex key={rowID}>
                
            </Flex>
        )
    }
    onRefresh = function(){
        if(this.state.refreshing){
            return;
        }
        this.setState({ refreshing: true });

        // this.props.userHome().then(()=>{
        //     this.setState({ refreshing: false });
        // })

    }
    render(){
        const userHome = this.props.$$user.get('userHome') ? this.props.$$user.get('userHome').toJS() : [];

        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{backgroundColor: '#fff',paddingBottom: 50}}>
                <Image style={{width: 375, height: 150}} source={require('../../../img/banner.png')}/>

                <Flex style={{padding: 15, paddingBottom: 0}}>
                    <Flex style={styles.btnSign} justify="center">
                        <Text style={styles.btnSignText}>签到</Text>
                        <View style={styles.btnSignBorder}></View>
                    </Flex>
                    <Flex.Item>
                        <Text style={styles.textTime}>15:26</Text>
                        <Text style={styles.textDate}>2017/01/12 腊月十五</Text>
                        <Text style={styles.textType}>常规考勤</Text>
                    </Flex.Item>
                    <Flex style={styles.btnSign} justify="center">
                        <Text style={styles.btnSignText}>签退</Text>
                        <View style={styles.btnSignBorder}></View>
                    </Flex>
                </Flex>

                <View style={{height: 69}}>
                    <Flex style={{paddingHorizontal: 15, marginTop: 13, marginBottom: 8, position: 'relative'}}>
                        <View style={styles.line}></View>

                        <Image style={{width: 18, height: 18}} source={require('../../../img/up.png')}/>
                        <Flex.Item></Flex.Item>
                        <Image style={{width: 18, height: 18}} source={require('../../../img/down.png')}/>
                    </Flex>
                    <Flex style={{paddingHorizontal: 15}}>
                        <Text style={{color:'#aaa',fontSize: 13}}>09:00</Text>
                        <Flex.Item></Flex.Item>
                        <Text style={{color:'#aaa',fontSize: 13}}>18:00</Text>
                    </Flex>
                </View>

                <Flex justify="center" style={{marginBottom: 37}}>
                    <Flex>
                        <Text style={{fontSize: 14, color: '#aaa'}}>当前不在考情范围内</Text>
                    </Flex>
                    <View style={{width: 13}}></View>
                    <TouchView onPress={Actions.main}>
                        <Text style={{fontSize: 14, color: '#1ab394'}}>刷新位置 </Text>
                        <Image style={{width: 14, height: 14}} source={require('../../../img/refresh.png')} />
                    </TouchView>

                </Flex>

                <Flex style={{marginBottom: 40}}>
                    <Flex.Item>
                        <Text style={styles.gridTextNumber}>21</Text>
                        <Text style={styles.gridTextDesc}>出勤天数</Text>
                    </Flex.Item>
                    <View style={styles.gridLine}></View>
                    <Flex.Item>
                        <Text style={styles.gridTextNumber}>0</Text>
                        <Text style={styles.gridTextDesc}>迟到天数</Text>
                    </Flex.Item>
                    <View style={styles.gridLine}></View>
                    <Flex.Item>
                        <Text style={styles.gridTextNumber}>1</Text>
                        <Text style={styles.gridTextDesc}>缺卡天数</Text>
                    </Flex.Item>
                </Flex>

                <Flex style={{marginBottom: 37}}>
                    <Flex.Item>
                        <Flex direction="column" justify="center">
                            <Image style={styles.gridImage} source={require('../../../img/ic_leave.png')}/>
                            <Text style={styles.gridTextDesc}>请假</Text>
                        </Flex>
                    </Flex.Item>
                    <View style={styles.gridLine}></View>
                    <Flex.Item>
                        <Flex direction="column" justify="center">
                            <Image style={styles.gridImage} source={require('../../../img/ic_busi.png')}/>
                            <Text style={styles.gridTextDesc}>公出</Text>
                        </Flex>
                    </Flex.Item>
                    <View style={styles.gridLine}></View>
                    <Flex.Item>
                        <Flex direction="column" justify="center">
                            <Image style={styles.gridImage} source={require('../../../img/ic_check.png')}/>
                            <Text style={styles.gridTextDesc}>补签</Text>
                        </Flex>
                    </Flex.Item>
                </Flex>

            </ScrollView>
        )

    }
}

export default Home;