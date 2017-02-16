import { getOrgUrl, getParamByName, _localStorage } from '../common/bbPlugin'
export function updateSelectedTab(tabName){
    return{
        type: 'UPDATE_SELECTEDTAB',
        tabName
    }
}

export function ddConfigSuccess(ddConfig) {
    return{
        type: 'DDCONFIG_SUCCESS',
        ddConfig
    }
}

export function ddConfigError() {
    return{
        type: 'DDCONFIG_ERROR',
    }
}

export function updateCode(code) {
    return{
        type: 'DDCONFIG_ERROR',
        code
    }
}

export function getUserInfo() {
    const infoJson = _localStorage.getItem('infoJson') || {};
    const uuid = infoJson.empId || 0;
    return {
        type: 'GET_USERINFO',
        payload: {
            request:{
                url:  getOrgUrl() +'/empl/'+uuid
            }
        }
    }
}

export function updateUserInfo(userInfo) {
    return {
        type: 'UPDATE_USERINFO',
        userInfo
    }
}

export function signOutApp() {
    const infoJson = _localStorage.getItem('infoJson') || {};
    return {
        type: 'SIGN_OUT_APP',
        payload: {
            request:{
                method: 'delete',
                url:  getOrgUrl() +'/loginOut',
                data: {
                    corpId: getParamByName('corpid'),
                    userId: infoJson.dingUserId,
                }
            }
        }
    }
}