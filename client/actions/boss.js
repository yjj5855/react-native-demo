import {getOrgUrl} from '../common/bbPlugin'
let nowDate = new Date();
let nowYear = nowDate.getFullYear();
export function getWishRemindMsg() {
    return {
        type: 'WISH_REMIND',
        payload: {
            request: {
                url: getOrgUrl() + '/msg/index/WISH_REMIND'
            }
        }
    }
}
export function getTopCount(config) {
    return {
        type: 'TOP_COUNT',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/index'
            }
        }
    }
}

export function getTodoList(config) {
    return {
        type: 'TODO_LIST',
        payload: {
            request: {
                url: getOrgUrl() + '/notification/taskcount.json'
            }
        }
    }
}

export function getPie_bmtj(config) {
    return {
        type: 'PIE_BMTJ',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/dept-empl'
            }
        }
    }
}
export function getLine_mygzcb(config) {
    return {
        type: 'LINE_MYGZCB',
        payload: {
            request:{
                url: getOrgUrl()+'/statistica/empl-salaries'
            }
        }
    }
}

export function getBar_bmgzcb() {
    return {
        type: 'BAR_BMGZCB',
        payload: {
            request:{
                url: getOrgUrl()+'/statistica/dept-salaries'
            }
        }
    }
}
export function getBar_bmpjgz() {
    return {
        type: 'BAR_BMPJGZ',
        payload: {
            request:{
                url: getOrgUrl()+'/statistica/dept-salaries'
            }
        }
    }
}

export function getLine_cdtj(config) {
    return {
        type: 'LINE_CDTJ',
        payload: {
            request:{
                url: getOrgUrl()+'/statistica/late-times-and-no-begin-end-times'
            }
        }
    }
}


export function getLine_mypjcql(config) {
    return {
        type: 'LINE_MYPJCQL',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/'
            }
        }
    }
}

//在职统计
export function getPie_bossEmployIn() {
    return {
        type: 'PIE_BEIN',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/empl'
            }
        }
    }
}
//年龄统计
export function getPie_bossEmployAge() {
    return {
        type: 'PIE_BEage',
        payload: {
            request: {
                url: getOrgUrl() + '/empls/pieChart/age/' + nowYear + '.json'
            }
        }
    }
}
//学历统计
export function getPie_bossEmployEdu() {
    return {
        type: 'PIE_BEedu',
        payload: {
            request: {
                url: getOrgUrl() + '/empls/pieChart/education/' + nowYear + '.json'
            }
        }
    }
}
//性别统计
export function getPie_bossEmploySex() {
    return {
        type: 'PIE_BEsex',
        payload: {
            request: {
                url: getOrgUrl() + '/empls/pieChart/sex/' + nowYear + '.json'
            }
        }
    }
}
//婚姻统计
export function getPie_bossEmployMar() {
    return {
        type: 'PIE_BEmar',
        payload: {
            request: {
                url: getOrgUrl() + '/empls/pieChart/maritalStatus/' + nowYear + '.json'
            }
        }
    }
}
//生育统计
export function getPie_bossEmployBorn() {
    return {
        type: 'PIE_BEborn',
        payload: {
            request: {
                url: getOrgUrl() + '/empls/pieChart/fertStatus/' + nowYear + '.json'
            }
        }
    }
}
//在职时间统计
export function getPie_bossEmployYear(type) {
    return {
        type: type,
        payload: {
            request: {
                url: getOrgUrl() + '/empl-in-date-asc.json'
            }
        }
    }
}

//缺勤统计
export function getGrid_bossEmployWorkTime() {
    return {
        type: 'Grid_BENcome',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/abse-times'
            }
        }
    }
}

//迟到未打卡统计
export function getGrid_bossEmployLateNoCard() {
    return {
        type: 'Grid_BELNC',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/late-times-and-no-begin-end-times'
            }
        }
    }
}

//请假统计
export function getGrid_bossEmployOffWork() {
    return {
        type: 'Grid_BEOFW',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/leave-times'
            }
        }
    }
}

//公出统计
export function getGrid_bossEmployOutBuss() {
    return {
        type: 'Grid_BEOFB',
        payload: {
            request: {
                url: getOrgUrl() + '/statistica/busi-away-times'
            }
        }
    }
}

//今日公出统计
export function getGrid_bossEmployOutBussToday(type) {
    return {
        type: type,
        payload: {
            request: {
                url: getOrgUrl() + '/offic-busi-away-table.json?draw=1&start=0&length=4'
            }
        }
    }
}

//今日请假统计

export function getGrid_bossEmployOffWorkToday(type) {
    return {
        type: type,
        payload: {
            request: {
                url: getOrgUrl() + '/leave-record-list.json?draw=1&start=0&length=4'
            }
        }
    }
}

//生日祝福列表
export function getGrid_bossCompanyCulBirth(type) {
    return {
        type: type,
        payload: {
            request: {
                url: getOrgUrl() + '/publish-msg-list.json?draw=1&start=0&length=4&type=1'
            }
        }
    }
}
//司龄祝福列表
export function getGrid_bossCompanyCulBeDate(type) {
    return {
        type: type,
        payload: {
            request: {
                url: getOrgUrl() + '/publish-msg-list.json?draw=1&start=0&length=4&type=2'
            }
        }
    }
}