import React from 'react'
import { List, Icon, Flex, SwipeAction } from 'antd-mobile'
import { _localStorage } from '../common/bbPlugin'

const ListItem = React.createClass({

    getInitialState() {
        return {
            address_list: _localStorage.getItem('address_list') || []
        }
    },

    setStar(e, index) {
        e.stopPropagation();
        let item = this.state.address_list[index];
        item.star = !item.star;

        let tmp_list = [
            ...this.state.address_list.slice(0,index),
            item,
            ...this.state.address_list.slice(index+1)
        ];
        this.setState({
            address_list: tmp_list
        });
        _localStorage.setItem('address_list', tmp_list)
    },
    deleteAddress(index){

        let tmp_list = [
            ...this.state.address_list.slice(0, index),
            ...this.state.address_list.slice(index+1)
        ]
        this.setState({
            address_list: tmp_list
        });
        _localStorage.setItem('address_list', tmp_list)
    },
    setCompany(item){
        this.props.onAddressChange && this.props.onAddressChange(item)
    },

    getAddressList(list, star = true){
        let dom, count = 0;
        dom = list.map((item, index)=>{
            let flag;
            if(star){
                flag = true
            }else{
                flag = false
            }
            if(item.star == flag || (flag == false && !item.star)) {
                count++;
                return (
                    <SwipeAction
                        key={index}
                        style={{ backgroundColor: 'gray' }}
                        autoClose
                        left={[]}
                        right={[
                            {
                                text: '取消',
                                onPress: () => console.log('取消'),
                                style: { backgroundColor: '#ddd', color: 'white' },
                            },
                            {
                                text: '删除',
                                onPress: () => { this.deleteAddress(index) },
                                style: { backgroundColor: '#F4333C', color: 'white' },
                            },
                        ]}
                    >
                        <List.Item wrap multipleLine className="left-60"
                                   extra={<Icon onClick={(e)=>{ this.setStar(e,index) }} type={star?'star':'star-o'} style={{padding:'.2rem',color: star?'orange':''}}/>}
                                   onClick={this.setCompany.bind(null, item)}>
                            {item.company}
                            <List.Item.Brief><Icon type="environment-o"/>&nbsp;{item.address}</List.Item.Brief>
                        </List.Item>
                    </SwipeAction>
                )
            }
        })
        return {
            dom : dom,
            count: count
        };
    },
    render(){

        const { address_list } = this.state;

        const use_list = this.getAddressList(address_list, true);
        const last_list = this.getAddressList(address_list, false);

        return (
            <div style={{height: window.innerHeight+'px',position: 'relative'}}>

                <span
                    style={{ position: 'absolute', right: 0, top: 0,padding: '.3rem' }}
                    onClick={ ()=>{ this.setCompany(false) } }
                >
                    <Icon type="cross"/>
                </span>

                <List
                    style={{display: use_list.count > 0 ? '': 'none'}}
                    className="popup-list"
                    renderHeader={() => '常用地址'}
                >
                    { use_list.dom }
                </List>

                <List
                    style={{display: last_list.count > 0 ? '': 'none'}}
                    className="popup-list"
                    renderHeader={() => '最近' }
                >
                    { last_list.dom }
                </List>

                <div
                    style={{display: last_list.count+use_list.count == 0 ? '': 'none',
                        textAlign:'center',color:'#aaa',fontSize:'0.28rem',paddingTop: '50%'}}>
                    您还没有常用地址
                </div>
            </div>
        )
    }

})

export default ListItem


export function addAddress(item) {
    let list = _localStorage.getItem('address_list') || [];
    let flag = false;
    for(let i=0; i<list.length ;i++){
        if(item.company == list.company){
            flag = true
        }
    }
    if(flag === false){
        list.unshift(item)
    }
    _localStorage.setItem('address_list',list)
}