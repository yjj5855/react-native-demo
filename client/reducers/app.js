import { Map, List } from 'immutable'

function app(state = Map({}), aciton) {

    switch (aciton.type){


        case 'UPDATE_SELECTEDTAB':
            return state.set('selectedTab', aciton.tabName)
        case 'DDCONFIG_SUCCESS':
            return state.set('ddConfig', aciton.ddConfig)
        case 'DDCONFIG_ERROR':
            return state.set('ddConfig', false)

        case 'UPDATE_USERINFO':
            let userType = '';
            if(aciton.userInfo.type == 0){
                userType = 'boss'
                state = state.set('showWage', true)
                state = state.set('showCompanyManagement', true)
            }else{
                userType = 'user'
                if(aciton.userInfo.type == 2){
                    state = state.set('showWage', true)
                    state = state.set('showCompanyManagement', true)
                }else if(aciton.userInfo.type == 1){
                    state = state.set('showCompanyManagement', true)
                }
            }
            return state.set(userType, aciton.userInfo)
        default:
            return state;
    }


}


export default app;