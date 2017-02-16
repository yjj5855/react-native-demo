import {Map, List, fromJS} from 'immutable'

function user(state = Map({}), aciton) {


    let data = {};
    switch (aciton.type) {

        //yjj
        //获取公出详情
        case 'GET_BUSINESS_OUT':
            return state;
        case 'GET_BUSINESS_OUT_SUCCESS':
            data = aciton.payload.data;
            return state.setIn(['businessOutDetail', data.uuid], data);
        case 'GET_BUSINESS_OUT_FAIL':
            return state;

        //公出签到
        case 'SIGN_BUSINESS_OUT_SUCCESS':
            data = aciton.payload.data;
            return state.setIn(['businessOutDetail', data.uuid], data);
        //公出驳回
        case 'REJECT_BUSINESS_OUT_SUCCESS':
            data = aciton.payload.data;
            return state.setIn(['businessOutDetail', data.uuid], data);

        //撤销公出信息
        case 'DELETE_BUSINESS_OUT':
            return state;
        case 'DELETE_BUSINESS_OUT_SUCCESS':
            data = aciton.payload.data;
            return state.deleteIn(['businessOutDetail', data.uuid]);
        case 'DELETE_BUSINESS_OUT_FAIL':
            return state;

        //获取审批中心 列表
        case 'UPDATE_APPROVAL_TAB':
            return state.setIn(['approvalListData', 'tabSelected'], String(aciton.tabIndex))
        case 'GET_APPROVAL_LIST':
            let type1 = aciton.payload.request.data.type;
            return state.setIn(['approvalListData', String(type1), 'loading'], true);
        case 'GET_APPROVAL_LIST_SUCCESS':
            let {pageIndex, type} = aciton.meta.previousAction.payload.request.data;
            let {summary, timestamp, pageData} = aciton.payload.data;

            let oldList = state.getIn(['approvalListData', String(type), 'pageData', 'list']);
            if (!(pageIndex == 1)) {
                //合并列表
                pageData.list = oldList.toJS().concat(pageData.list);
            }
            state = state.setIn(['approvalListData', 'summary'], fromJS(summary))
            state = state.setIn(['approvalListData', 'timestamp'], fromJS(timestamp))
            state = state.setIn(['approvalListData', String(type), 'pageData'], fromJS(pageData))
            state = state.setIn(['approvalListData', String(type), 'pageParam', 'pageIndex'], pageIndex + 1)
            return state.setIn(['approvalListData', String(type), 'loading'], false);
        case 'GET_APPROVAL_LIST_FAIL':
            let type3 = aciton.meta.previousAction.payload.request.data.type;
            return state.setIn(['approvalListData', String(type3), 'loading'], false);

        case 'UPDATE_ATTENDANCE_SELECTED':
            console.log(aciton, state);
            for (let key in aciton.data) {
                state = state.setIn(['attendanceData', 'selected', key], aciton.data[key])
            }
            return state;
        //考勤中心主页
        case 'GET_ATTENDANCE':
            return state;
        case 'GET_ATTENDANCE_SUCCESS':
            let detpId = aciton.meta.previousAction.payload.request.deptUuid;
            data = aciton.payload.data || {};

            if (data && detpId == '' && data.listOrg && data.listOrg[0]) {
                state = state.setIn(['attendanceData', 'selected', 'dept'], {
                    id: data.listOrg[0].id,
                    name: data.listOrg[0].name
                })
                state = state.setIn(['attendanceData', 'data'], fromJS(data))
            }
            return state;
        case 'GET_ATTENDANCE_FAIL':
            return state


        //班步列表
        case 'GET_CATEGORY_LIST':
            return state.setIn(['categoryListData', aciton.categoryList, 'loading'], true);
            break;

        case 'GET_CATEGORY_LIST_SUCCESS':
            const categoryList = aciton.meta.previousAction.categoryList;
            state = state.setIn(['categoryListData', categoryList, 'list'], fromJS(aciton.payload.data))
            return state.setIn(['categoryListData', categoryList, 'loading'], false);
            break;
        case 'GET_CATEGORY_LIST_FAIL':
            const categoryList_1 = aciton.meta.previousAction.categoryList;
            return state.setIn(['categoryListData', categoryList_1, 'loading'], false);
            break;


        //班步详情列表
        case 'GET_CATEGORY_DETAIL':
            return state.setIn(['categoryDetail', aciton.category, 'loading'], true);
            break;
        case 'GET_CATEGORY_DETAIL_SUCCESS':
            const category = aciton.meta.previousAction.category;
            let {start, length} = aciton.meta.previousAction.payload.request.params;
            let b_data = aciton.payload.data.data;

            //判断最后一页
            if (b_data.length < length) {
                state = state.setIn(['categoryDetail', category, 'pageData', 'hasNextPage'], false)
            }else{
                state = state.setIn(['categoryDetail', category, 'pageData', 'hasNextPage'], true)
            }

            let b_oldList = state.getIn(['categoryDetail', category, 'pageData', 'list']);
            if (!(start == 0)) {
                //合并列表
                b_data = b_oldList.toJS().concat(b_data);
            }
            state = state.setIn(['categoryDetail', category, 'pageData', 'list'], fromJS(b_data))
            state = state.setIn(['categoryDetail', category, 'pageParam', 'pageIndex'], start + 2 )

            return state.setIn(['categoryDetail', category, 'loading'], false);
            break;
        case 'GET_CATEGORY_DETAIL_FAIL':
            const category_1 = aciton.meta.previousAction.category;
            state = state.setIn(['categoryDetail', category_1, 'pageData', 'hasNextPage'], false)
            return state.setIn(['categoryDetail', category_1, 'loading'], false);
            break;




































































































































































































































        //zj
        //员工首页
        case 'USER_HOME_INITIAL':
            return state;
        case 'USER_HOME_INITIAL_SUCCESS':
            let userHomeInitial = state.get('userHome') ? state.get('userHome').toJS() : [];
            userHomeInitial = aciton.payload.data;

            userHomeInitial.map((item, index)=>{
                if(item.type == 'SIGN_IN'){
                    state = state.setIn(['defaultTime', 'signIn'], item.startDate);
                }else if(item.type == 'SIGN_OUT'){
                    state = state.setIn(['defaultTime', 'signOut'], item.startDate);
                }
            })


            return state.setIn(['userHome'], fromJS(userHomeInitial));
        case 'USER_HOME_INITIAL_FAIL':
            return state;

        //员工上班签到
        case 'USER_PASTIN':
            return state;
        case 'USER_PASTIN_SUCCESS':
            aciton.meta.previousAction.payload.callBack(aciton.payload);
            return state;
        case 'USER_PASTIN_FAIL':
            aciton.meta.previousAction.payload.callBack(aciton.error.message);
            return state;
        //员工下班打卡
        case 'USER_PASTOUT':
            return state;
        case 'USER_PASTOUT_SUCCESS':
            aciton.meta.previousAction.payload.callBack(aciton.payload);
            return state;
        case 'USER_PASTOUT_FAIL':
            aciton.meta.previousAction.payload.callBack(aciton.error.message);
            return state;

        // 员工补打卡
        case 'USER_PASTBU':
            return state;
        case 'USER_PASTBU_SUCCESS':
            aciton.meta.previousAction.payload.callBack(aciton.payload.data.message);
            return state;
        case 'USER_PASTBU_FAIL':
            aciton.meta.previousAction.payload.callBack(aciton.error.message);
            return state;

        //假期类型
        case 'GET_HOLIDAY_TYPE':
            return state;
        case 'GET_HOLIDAY_TYPE_SUCCESS':
            let getHolidayType = state.get('holidayType') ? state.get('holidayType').toJS() : [];
            getHolidayType = aciton.payload.data;
            return state.setIn(['holidayType'], fromJS(getHolidayType));
        case 'GET_HOLIDAY_TYPE_FAIL':
            return state;

        //请假申请
        case 'SUBMIT_OFF_APPLY':
            return state;
        case 'SUBMIT_OFF_APPLY_SUCCESS':
            let offWorkApply = state.get('offWorkApply') ? state.get('offWorkApply').toJS() : [];
            offWorkApply = aciton.payload;
            return state.setIn(['offWorkApply'], fromJS(offWorkApply));
        case 'SUBMIT_OFF_APPLY_FAIL':
            return state;
        //提交请假证明
        case 'UPDATE_WORK_OFF_SUCCESS':
            return state.setIn(['getOffWorkDetail', aciton.payload.data.uuid], fromJS(aciton.payload.data))
        //请假详情
        case 'GET_OFF_DETAIL':
            return state;
        case 'GET_OFF_DETAIL_SUCCESS':
            let getOffWorkDetail = state.get('getOffWorkDetail') ? state.get('getOffWorkDetail').toJS() : [];
            getOffWorkDetail = aciton.payload.data;
            return state.setIn(['getOffWorkDetail', aciton.payload.data.uuid], fromJS(getOffWorkDetail));
        case 'GET_OFF_DETAIL_FAIL':
            return state;
        //班步首页
        case 'MESSAGE_LIST':
            return state;
        case 'MESSAGE_LIST_SUCCESS':
            let messageList = state.get('messageList') ? state.get('messageList').toJS() : [];
            messageList = aciton.payload.data;
            return state.setIn(['messageList'], fromJS(messageList));
        case 'MESSAGE_LIST_FAIL':
            return state;

        //补签详情 PAST_BU_DETAIL
        case 'PAST_BU_DETAIL':
            return state;
        case 'PAST_BU_DETAIL_SUCCESS':
            let pastBuDetail = state.get('pastBuDetail') ? state.get('pastBuDetail').toJS() : [];
            pastBuDetail = aciton.payload.data;
            return state.setIn(['pastBuDetail', aciton.payload.data.uuid], fromJS(pastBuDetail));
        case 'PAST_BU_DETAIL_FAIL':
            return state;

        //祝福详情BENEDICTION_DETAIL
        case 'BENEDICTION_DETAIL':
            return state;
        case 'BENEDICTION_DETAIL_SUCCESS':
            let benedictionDetail = state.get('benedictionDetail') ? state.get('benedictionDetail').toJS() : {};
            benedictionDetail = aciton.payload.data;
            return state.setIn(['benedictionDetail'], fromJS(benedictionDetail));
        case 'BENEDICTION_DETAIL_FAIL':
            return state;

        default:
            return state;
    }
}


export default user;