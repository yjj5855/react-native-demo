import React from 'react'
import { Router, Actions, Scene } from 'react-native-router-flux';
import { styles } from './styles/styles'

import Main from './page/Main'
import Home from './page/home'

const scenes = Actions.create(
    <Scene key="root" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}>
        <Scene key="main" component={ Main } title="主页"/>
        <Scene key="home" {...getSceneProps(Home)} passProps={true} component={Home} initial/>
    </Scene>
);

export default scenes

//
// var tabSceneMenu = {
//     backTitle: '返回',
//     onBack: ()=>{ console.log('onBack') },
//     backButtonImage: require('../img/ic_busi.png'),
//     backButtonTextStyle: { color: '#000'},
//     renderTitle: this.renderTitle,
//     // onLeft :()=>{ console.log('onLeft') },
//     // leftButtonImage:leftImage,
//     // getLeftTitle:this.getLeftTitle,
//     // getRightTitle:this.getRightTitle,
//     // onRight :()=>{ console.log('onRight') }
// }

function getSceneProps(component) {
    return {
        // getTitle: component.getTitle,
        renderTitle: component.renderTitle,
    }
}