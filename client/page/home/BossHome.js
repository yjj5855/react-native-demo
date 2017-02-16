import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform,
} from 'react-native';
import { List, Flex, WhiteSpace, Badge } from 'antd-mobile'
import ECharts from '../../components/native-echarts'
// import style from './BossHome.scss'
import ListItem, { getCategoryPathAndIcon } from '../../components/ListItem'

class Home extends Component{

    componentDidMount(){

        const homeTopDesc = this.props.$$boss.get('homeTopDesc').toJS();
        if(homeTopDesc.compEmplCount == 0 ){
            this.props.getTopCount()
        }

        const pie_bmtj = this.props.$$boss.get('pie_bmtj').toJS();
        if(pie_bmtj.failed !== false ){
            this.props.getPie_bmtj()
        }

        const line_cdtj = this.props.$$boss.get('line_cdtj').toJS();
        if(line_cdtj.failed !== false ){
            this.props.getLine_cdtj()
        }

        const withRemind = this.props.$$boss.get('withRemind').toJS();
        if(withRemind.length == 0) {
            this.props.getWishRemindMsg()
        }

    }

    render(){
        const $$pie_bmtj = this.props.$$boss.get('pie_bmtj');
        const $$line_cdtj = this.props.$$boss.get('line_cdtj');
        const homeTopDesc = this.props.$$boss.get('homeTopDesc').toJS();
        const withRemind = this.props.$$boss.get('withRemind').toJS();

        return (
            <View style={{height: window.innerHeight+'px',overflow:'auto',paddingBottom:50}}>

                <Flex style={{background:'#fff',borderBottom:'1px #ddd solid'}}>
                    <Flex.Item>
                        <Link to="/boss-employ-management">
                        <Flex direction="row" className="grid-item">
                            <img src="./img/boss-syq.png" />
                            <View className="grid-item-right">
                                <Text className="text_gray">试用期/总人数</Text>
                                <Text className="text_small">{homeTopDesc.trialCount}人/{homeTopDesc.compEmplCount}人</Text>
                            </View>
                        </Flex>
                        </Link>
                    </Flex.Item>
                    <Flex.Item style={{marginLeft:0,borderLeft: '1px #ddd solid'}}>
                        <Link to="/boss-labor-relations">
                        <Flex direction="row" className="grid-item">
                            <img src="./img/boss-xrrs.png" />
                            <View className="grid-item-right">
                                <Text className="text_gray">新人人数/离职人数</Text>
                                <Text className="text_small">{homeTopDesc.newEmplCount}人/{homeTopDesc.leaveOfficeCount}人</Text>
                            </View>
                        </Flex>
                        </Link>
                    </Flex.Item>
                </Flex>
                <Flex style={{background:'#fff'}}>
                    <Flex.Item>
                        <Link to="/boss-salary-management">
                        <Flex direction="row" className="grid-item">
                            <img src="./img/boss-bygz.png" />
                            <View className="grid-item-right">
                                <Text className="text_gray">本月工资成本</Text>
                                <Text className="text_small">{homeTopDesc.thisMonthTotalWages|| '0'}元</Text>
                            </View>
                        </Flex>
                        </Link>
                    </Flex.Item>
                    <Flex.Item style={{marginLeft:0,borderLeft: '1px #ddd solid'}}>
                        <Link to="/">
                        <Flex direction="row" className="grid-item">
                            <img src="./img/boss-zzgw.png" />
                            <View className="grid-item-right">
                                <Text className="text_gray">在招岗位/待招岗位</Text>
                                <Text className="text_small">{homeTopDesc.recruitingPostCount}人/{homeTopDesc.theNumberToBeRecruited}人</Text>
                            </View>
                        </Flex>
                        </Link>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />

                <View style={{background:'#fff'}}>
                    <div style={{padding:15,borderBottom: '1px #ddd solid'}}>部门统计</div>
                    <ECharts id="boss_bmtj" option={$$pie_bmtj.toJS()}>
                        <Text>{homeTopDesc.compEmplCount || '--'}</Text>
                        <Text>全部</Text>
                    </ECharts>
                </View>
                <WhiteSpace size="lg" />

                <View style={{background:'#fff'}}>
                    <div style={{padding:15,borderBottom: '1px #ddd solid'}}>迟到统计</div>
                    <ECharts option={$$line_cdtj.toJS()}>

                    </ECharts>
                </View>
                <WhiteSpace size="lg" />

                <View style={{background:'#fff'}}>
                    <Text style={{padding:15,borderBottom: '1px #ddd solid'}}>祝福提醒</Text>

                    {withRemind.map((item, index)=>
                        <Link to={`/category/WISH_REMIND/${item.uuid}`} key={item.uuid} >
                            <ListItem title={item.title} desc={item.subTitle} img={getCategoryPathAndIcon(item.category).icon_url}>
                                <View>
                                    <Text>{item.showDate}</Text>
                                    <Text style={{textAlign:'right'}}>
                                        &nbsp;
                                    </Text>
                                </View>
                            </ListItem>
                        </Link>
                    )}
                </View>
                <WhiteSpace size="lg" />

            </View>
        )

    }
}

export default Home;