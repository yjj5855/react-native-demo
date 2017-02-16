import React, { PropTypes } from 'react'
import { Badge, Flex, Icon } from 'antd-mobile'


const Component = React.createClass({

    getInitialState() {
        return {
            canChooseFuture: this.props.chooseFuture || false,
            currentYear: this.props.year || new Date().getFullYear(),
            currentMonth: this.props.mouth || (new Date().getMonth()+1),
        }
    },
    // shouldComponentUpdate(){
    //     return
    // },
    preMonth(){
        let state = {};

        if(this.state.currentMonth <= 1){
            state = {
                currentYear: this.state.currentYear - 1,
                currentMonth: 12,
            }
        }else{
            state = {
                currentMonth: this.state.currentMonth - 1,
            }
        }
        this.setState(state,()=>{
            this.props.onClickPreMonth && this.props.onClickPreMonth(this.state.currentYear,this.state.currentMonth)
        })
    },
    nextMonth(){
        if(!this.state.canChooseFuture &&
            this.state.currentYear == new Date().getFullYear() &&
            this.state.currentMonth == (new Date().getMonth()+1)){
            return
        }
        let state = {};

        if(this.state.currentMonth >= 12){
            state = {
                currentYear: this.state.currentYear + 1,
                currentMonth: 1,
            }
        }else{
            state = {
                currentMonth: this.state.currentMonth + 1,
            }
        }
        this.setState(state,()=>{
            this.props.onClickNextMonth && this.props.onClickNextMonth(this.state.currentYear,this.state.currentMonth)
        })
    },
    render(){

        return (
            <Flex style={{ height:'.8rem' ,background: '#fff' }}>
                <Flex.Item style={{textAlign:'right'}} onClick={this.preMonth}>
                    <Icon type="left" />
                </Flex.Item>
                <Flex.Item style={{textAlign:'center'}}>
                    {this.state.currentYear}年{this.state.currentMonth}月
                </Flex.Item>
                <Flex.Item style={{textAlign:'left'}} onClick={this.nextMonth}>
                    <Icon type="right" />
                </Flex.Item>
            </Flex>
        )
    }
})

export default Component

