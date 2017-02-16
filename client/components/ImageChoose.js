import React from 'react'
import { ImagePicker } from 'antd-mobile'
import callJsApi from '../common/ddPlugin'

const ImageChoose = React.createClass({

    getDefaultProps : function () {
        return {
            list: [],
            url_key: '',
            count: 1,
        };
    },
    onImageClick(index){
        callJsApi('biz.util.previewImage',{
            urls: this.props.list.map((item)=> this.props.url_key == '' ? item : item[this.props.url_key] ),
            current: this.props.url_key == '' ? this.props.list[index] : this.props.list[index][this.props.url_key],
        })
    },

    render(){
        let files = this.props.list.map((item, index)=>{
            return {
                url: this.props.url_key == '' ? item : item[this.props.url_key]
            }
        });

        return <ImagePicker
            files={files}
            onChange={this.props.onChange}
            onImageClick={this.onImageClick}
            onAddImageClick={this.props.onAddImageClick}
            selectable={files.length < this.props.count}
        />
    }
})
export default ImageChoose