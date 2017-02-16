import React from 'react'
import { Flex, TextareaItem, Button } from 'antd-mobile'


const RejectBox = React.createClass({

    getInitialState() {
        return {
            type: this.props.type || '',
            reasons: {
                '': [],
                businessOut: ['暂缓','工作无法排期','没有必要'],
                leave: ['时间过长','影响工作','不符公司规定'],
                sign: ['理由不充分','时间异常']
            },
            reason: '',
        }
    },

    onReasonChange(value){
        this.setState({reason: value}, ()=>{
            this.props.onChange && this.props.onChange(this.state.reason)
        })
    },

    render(){

        return (
            <div>
                <Flex>
                    {this.state.reasons[this.state.type].map((item, index)=> (
                        <Flex.Item
                            key={index} style={{padding:'0.2rem 0.1rem'}}
                            onClick={ this.onReasonChange.bind(null, item) }
                        >
                            <Button style={{fontSize:'0.32rem'}}>{item}</Button>
                        </Flex.Item>
                    ))}
                </Flex>
                <TextareaItem className="border-bottom-none"
                              placeholder="请输入驳回理由"
                              value={this.state.reason}
                              onChange={ this.onReasonChange }
                              rows={5}
                />
            </div>
        )
    }

})

export default RejectBox