import {getOrgUrl} from '../common/bbPlugin'
import storage from '../common/storage'

//yjj

//公出申请
export function businessOutApply(data) {
    return {
        type: 'APPLY_BUSINESS_OUT',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + '/apply-busi-out.json',
                data: {detail: data}
            }
        }
    }
}

//查询公出详情信息
export function getBusinessOutDetail(id) {
    return {
        type: 'GET_BUSINESS_OUT',
        payload: {
            request: {
                url: getOrgUrl() + `/busi-outRecord/${id}.json`,
            }
        }
    }
}

//撤销公出详情信息
export function removeBusinessOut(id) {
    return {
        type: 'DELETE_BUSINESS_OUT',
        payload: {
            request: {
                method: 'delete',
                url: getOrgUrl() + `/busi-outRecord/${id}.json`,
            }
        }
    }
}

//公出签到
export function signInBusinessOut(form) {
    return {
        type: 'SIGN_BUSINESS_OUT',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + `/busi-outRecord/sign.json`,
                data: form
            }
        }
    }
}

//公出驳回
export function rejectBusinessOut(data) {
    return {
        type: 'REJECT_BUSINESS_OUT',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + `/busi-outRecords/reply.json`,
                data: {
                    ...data,
                    isRefuse: true,
                }
            }
        }
    }
}

//审批中心列表
export function getApprovalList(data, timestamp) {
    return {
        type: 'GET_APPROVAL_LIST',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + `/audit/list.json`,
                data: {
                    "pageIndex": data.pageIndex,
                    "pageLength": data.pageLength,
                    "type": data.type,
                    "timestamp": timestamp
                }
            }
        }
    }
}

//审批中心 tab切换
export function selectApprovalTab(tabIndex) {
    return {
        type: 'UPDATE_APPROVAL_TAB',
        tabIndex,
    }
}

//请假驳回
export function rejectLeave(data) {
    return {
        type: 'REJECT_LEAVE',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + `/leave/reply.json`,
                data: data
            }
        }
    }
}

//补签驳回
export function rejectSign(data) {
    return {
        type: 'REJECT_SIGN',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + `/makeuptime/reply.json`,
                data: data
            }
        }
    }
}

//获取考勤中心首页
export function getAttendanceData(data) {
    return {
        type: 'GET_ATTENDANCE',
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + `/statisics/${data.date}/${data.deptUuid}.json`,
                deptUuid: data.deptUuid
            }
        }
    }
}

//更新考勤中心选择
export function updateAttendanceSelect(data) {
    return {
        type: 'UPDATE_ATTENDANCE_SELECTED',
        data,
    }
}

//班步列表
export function getCategoryDetail(category, data) {
    return {
        type: 'GET_CATEGORY_DETAIL',
        category,
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + '/msg/detail/' + category,
                params: {
                    start: data.pageIndex-1,
                    length: data.pageLength,
                    draw: 1,
                }
            },
        }
    }
}

//班步首页
export function getCategoryList(categoryList, data) {
    return {
        type: 'GET_CATEGORY_LIST',
        categoryList,
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + '/msg/index/' + categoryList,
            },
        }
    }
}

//反馈
export function feedback(text) {
    return {
        type: 'FEEDBACK',
        payload: {
            request: {
                method: 'post',
                url: getOrgUrl() + '/feedback.json',
                data: {
                    detail: text
                }
            },
        }
    }
}


//zj
let date = new Date();
let sjc = date.getTime();

//员工首页
export async function userHome() {
  let local = await storage.getItem('approvalListData.timestamp')
  console.log('员工首页', local)
    return {
        type: 'USER_HOME_INITIAL',
        payload: {
            request: {
                url: getOrgUrl() + '/index'
            }
        }
    }
}
//上班签到
export function userPastIn(data, cb) {
    return {
        type: 'USER_PASTIN',
        payload: {
            request: {
                method: 'post',
                data: {detail: data},
                url: getOrgUrl() + '/signin.json'
            },
            callBack: cb
        }
    }
}
//下班签退
export function userPastOut(data, cb) {
    return {
        type: 'USER_PASTOUT',
        payload: {
            request: {
                method: 'post',
                data: {detail: data},
                url: getOrgUrl() + '/signout.json'
            },
            callBack: cb
        }
    }
}

//补打卡
export function userPastBU(data, cb) {
    return {
        type: 'USER_PASTBU',
        payload: {
            request: {
                method: 'post',
                data: data,
                url: getOrgUrl() + '/apply-makeuptime.json'
            },
            callBack: cb
        }
    }
}

//假期类型
export function getHolidayType() {
    return {
        type: 'GET_HOLIDAY_TYPE',
        payload: {
            request: {
                method: 'GET',
                url: getOrgUrl() + '/leave-setting.json'
            },
        }
    }
}

//提交请假申请
export function submitOffApply(data) {
    return {
        type: 'SUBMIT_OFF_APPLY',
        payload: {
            request: {
                method: 'POST',
                data: {detail: data},
                url: getOrgUrl() + '/apply-leave.json'
            },
        }
    }
}

//提交请假图片
export function updateWorkOffImg(id, file) {
    return {
        type: 'UPDATE_WORK_OFF',
        payload: {
            request: {
                method: 'POST',
                data: {
                    file : file
                },
                url: getOrgUrl() + `/apply-leave/${id}/upload.json`
            },
        }
    }
}

//获取请假详情
export function getOffWorkDetail(data) {
    return {
        type: 'GET_OFF_DETAIL',
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + '/apply-leave/' + data + '.json'
            },
        }
    }
}

//撤销请假
export function cancelOffWork(data) {
    return {
        type: 'CANCEL_OFF_WORK',
        payload: {
            request: {
                method: 'DELETE',
                url: getOrgUrl() + '/apply-leave/' + data + '.json'
            },
        }
    }
}

//班步首页
export async function messageList() {
    let local = await storage.getItem('approvalListData.timestamp')
    let past = local ? local['1'] : '0';
    let outWork = local ? local['2'] : '0';
    let offWork = local ? local['3'] : '0';
    return {
        type: 'MESSAGE_LIST',
        payload: {
            request: {
                method: 'get',
                url: `${getOrgUrl()}/msg/index/COMP_ANNOUNCEMENTS,WISH_REMIND,APPROVAL,ATTENDANCE,DEPARTMENT_TRENDS,DOCUMENT,BAMBOO_TRENDS?WORK_OUT=${outWork}&ASK_FOR_LEAVE=${offWork}&CLOCK_OUT=${past}&CLOCK_IN=${past}`
            },
        }
    }
}

//补签详情
export function pastBuDetail(uuid) {
    return {
        type: 'PAST_BU_DETAIL',
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + '/makeuptime/' + uuid + '.json'
            },
        }
    }
}

//同意补签
export function pastAgree(uuid, isRefuse) {
    return {
        type: 'PAST_BU_DETAIL',
        payload: {
            request: {
                method: 'post',
                data: {
                    uuid,
                    isRefuse
                },
                url: getOrgUrl() + '/makeuptime/reply.json'
            },
        }
    }
}

//祝福列表
//start表示页码  length表示每次返回的数据长  draw不用管
export function benedictionIndex(pageNum = 0) {
    return {
        type: 'BENEDICTION_INDEX',
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + '/msg/detail/WISH_REMIND?start=' + pageNum + '&length=10&draw=1'
            },
        }
    }
}

//新人 生日 周年 生日贺卡 周年贺卡

//祝福详情
export function benedictionDetail(uuid) {
    return {
        type: 'BENEDICTION_DETAIL',
        payload: {
            request: {
                method: 'get',
                url: getOrgUrl() + '/support/detail/' + uuid
            },
        }
    }
}

//祝福图标
export function benedictionIcon(uuid, icon) {
    return {
        type: 'BENEDICTION_ICON',
        payload: {
            request: {
                method: 'POST',
                url: getOrgUrl() + '/support/sources/' + uuid + '/' + icon
            },
        }
    }
}