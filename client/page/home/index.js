import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import { View, Image, Text, Alert, TouchableHighlight } from 'react-native'
import { Icon, TabBar, Flex, Popover } from 'antd-mobile'
import connectRedux from '../../connectRedux'
import Banbu from './Banbu'
// import BossHome from './BossHome'
import UserHome from './UserHome'
import Personal from './personal'
import {styles} from '../../styles/styles'

class Home extends Component{
    static selectedTab = 'home'
    static renderTitle = function () {
        let navbar = <View></View>
        if(Home.selectedTab == 'home'){
            navbar = (
                <Flex.Item>
                    <Popover
                        overlayStyle={{marginTop: 44, width: 200, backgroundColor: '#fff'}}
                        overlay={[
                            (<Popover.Item key="4" value="scan" ><Text>上海云才网络科技有限公司</Text></Popover.Item>),
                            (<Popover.Item key="5" value="special"><Text>上海云才网络科技有限公司1122143</Text></Popover.Item>),
                            (<Popover.Item key="6" value="buttonct"><Text>上海云才网络科技有限公司2</Text></Popover.Item>),
                        ]}
                        onSelect={ ()=>{ console.log('onSelect') }}
                    >
                        <View style={{height:44, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.navbarTitle}>上海云才网络科技有限公司</Text>
                            <View style={{width: 5}}></View>
                            <Image source={require('../../../img/ic_unfold.png')} style={{width:15,height:8}}/>
                        </View>
                    </Popover>
                </Flex.Item>
            )
        }else if (Home.selectedTab === 'banbu') {
            navbar = (
                <Flex.Item>
                    <Text style={styles.navbarTitle}>班步</Text>
                </Flex.Item>
            )
        }else if (Home.selectedTab === 'member') {
            navbar = (
                <Flex.Item>
                    <Text style={styles.navbarTitle}>我的</Text>
                </Flex.Item>
            )
        }
        return (
            <Flex style={styles.navbar}>
                {navbar}
            </Flex>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
        }
    }

    setSelectedTab = function(tabName) {
        this.props.updateSelectedTab(tabName)
        this.setTitle(tabName)
    }
    setTitle = function(tabName){
        let title = '';
        switch (tabName){
            case 'home':
                title = '首页'
                break;
            case 'member':
                title = '我的'
                break;
            case 'banbu':
                title = '消息'
                break;
        }
        Home.selectedTab = tabName
        Actions.refresh({ selectedTab: tabName })
    }
    getHomeByUserType = function(){

        const user = this.props.$$app.get('user');
        const boss = this.props.$$app.get('boss');

        // if(boss !== null){
        //     return (<BossHome {...this.props}/>)
        // }
        // if(user !== null){
        //     return (<UserHome {...this.props}/>)
        // }

        return (<View><UserHome {...this.props}/></View>)
    }
    componentDidMount(){
        let {selectedTab} = this.props.$$app.toJS();
        this.setTitle(selectedTab)
    }
    render(){

        let {selectedTab} = this.props.$$app.toJS();

        return (
            <View style={styles.content}>
                <TabBar
                    unselectedTintColor="#acacac"
                    tintColor="#1ab394"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="消息"
                        key="班步"
                        icon={require('../../../img/tabbar-icon-banbu.png')}
                        selectedIcon={require('../../../img/tabbar-icon-banbu-active.png')}
                        selected={selectedTab === 'banbu'}
                        onPress={this.setSelectedTab.bind(this,'banbu')}
                    >
                        <Banbu {...this.props}/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('../../../img/tabbar-icon-home.png')}
                        selectedIcon={require('../../../img/tabbar-icon-home-active.png')}
                        title="首页"
                        key="首页"
                        selected={selectedTab === 'home'}
                        onPress={this.setSelectedTab.bind(this,'home')}
                    >
                        {this.getHomeByUserType()}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('../../../img/tabbar-icon-me.png')}
                        selectedIcon={require('../../../img/tabbar-icon-me-active.png')}
                        title="我的"
                        key="我的"
                        selected={selectedTab === 'member'}
                        onPress={this.setSelectedTab.bind(this,'member')}
                    >
                        <Personal {...this.props}/>
                    </TabBar.Item>
                </TabBar>
            </View>

        )
    }
}

export default connectRedux(Home);