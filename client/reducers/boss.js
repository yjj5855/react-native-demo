import {Map, List, fromJS} from 'immutable'

function boss(state = Map({}), aciton) {


    let data = {}
    switch (aciton.type) {
        case 'TOP_COUNT':
            return state;
        case 'TOP_COUNT_SUCCESS':
            data = aciton.payload.data || {};
            return state.set('homeTopDesc', Map(data));
        case 'TOP_COUNT_FAIL':
            return state;

        //祝福提醒
        case 'WISH_REMIND':
            return state
        case 'WISH_REMIND_SUCCESS':
            data = aciton.payload.data || [];
            return state.set('withRemind', fromJS(data))
        case 'WISH_REMIND_FAIL':
            return state;

        //代办事项
        case 'TODO_LIST':
            return state;
        case 'TODO_LIST_SUCCESS':
            return state;
        case 'TODO_LIST_FAIL':
            return state;

        //迟到统计
        case 'LINE_CDTJ':
            return state.deleteIn(['line_cdtj', 'failed']);
        case 'LINE_CDTJ_SUCCESS':
            data = aciton.payload.data || {};
            let line_cdtj = state.get('line_cdtj');
            line_cdtj = line_cdtj.toJS()
            line_cdtj = {
                ...line_cdtj,
                failed: false,
                xAxis: {
                    ...line_cdtj.xAxis,
                    data: data.dates
                },
                series: [{
                    ...line_cdtj.series[0],
                    data: data.lateTimesAndNoBeginEndTimes
                }]
            }
            return state.updateIn(['line_cdtj'], value => fromJS(line_cdtj))
        case 'LINE_CDTJ_FAIL':
            return state.updateIn(['line_cdtj', 'failed'], value => true);

        //部门统计
        case 'PIE_BMTJ':
            return state.deleteIn(['pie_bmtj', 'failed']);
        case 'PIE_BMTJ_SUCCESS':
            data = aciton.payload.data || {};
            let bm_list = data.infoOrganizationDomains || [];
            let data_list = [];
            for (let i = 0; i < bm_list.length; i++) {
                data_list.push({
                    name: bm_list[i].name,
                    value: bm_list[i].empsCount
                })
            }
            let pie_bmtj = state.get('pie_bmtj');
            pie_bmtj = pie_bmtj.toJS()
            pie_bmtj = {
                ...pie_bmtj,
                failed: false,
                series: [{
                    ...pie_bmtj.series[0],
                    data: data_list
                }]
            }
            return state.updateIn(['pie_bmtj'], value => fromJS(pie_bmtj));
        case 'PIE_BMTJ_FAIL':
            state = state.updateIn(['pie_bmtj', 'failed'], value => true)
            return state;

        //每月平均出勤率
        case 'LINE_MYPJCQL':
            return state.deleteIn(['line_mypjcql', 'failed']);
        case 'LINE_MYPJCQL_SUCCESS':
            data = aciton.payload.data || {};
            return state
        case 'LINE_MYPJCQL_FAIL':
            return state.set('line_mypjcql', Map({failed: true}));

        //工资成本
        case 'LINE_MYGZCB':
            return state.deleteIn(['line_mygzcb', 'failed']);
        case 'LINE_MYGZCB_SUCCESS':
            data = aciton.payload.data || {};

            data.totalWages.forEach((value, i) => {
                data.totalWages[i] = (value / 10000).toFixed(2)
            })
            data.dates.forEach((value, i) => {
                data.dates[i] = value.substr(5)
            })
            let line_mygzcb = state.get('line_mygzcb');
            line_mygzcb = line_mygzcb.toJS()
            line_mygzcb = {
                ...line_mygzcb,
                failed: false,
                xAxis: {
                    ...line_mygzcb.xAxis,
                    data: data.dates
                },
                series: [{
                    ...line_mygzcb.series[0],
                    data: data.totalWages
                }]
            }
            return state.updateIn(['line_mygzcb'], value => fromJS(line_mygzcb))
        case 'LINE_MYGZCB_FAIL':
            return state.updateIn(['line_mygzcb', 'failed'], value => true)

        //部门工资成本
        case 'BAR_BMGZCB':
            return state.deleteIn(['bar_bmgzcb', 'failed']);
        case 'BAR_BMGZCB_SUCCESS':
            data = aciton.payload.data || {};
            let bar_bmgzcb_data = { xAxis:[], data:[] };
            data.infoOrganizationDomains.forEach((item, i) => {
                bar_bmgzcb_data.xAxis.push(item.name)
                bar_bmgzcb_data.data.push((item.totalWages/10000).toFixed(2))
            });

            let bar_bmgzcb = state.get('bar_bmgzcb');
            bar_bmgzcb = bar_bmgzcb.toJS()
            bar_bmgzcb.failed = false;
            bar_bmgzcb.xAxis[0].data = bar_bmgzcb_data.xAxis
            bar_bmgzcb.series[0].data = bar_bmgzcb_data.data
            return state.updateIn(['bar_bmgzcb'], value => fromJS(bar_bmgzcb))
        case 'BAR_BMGZCB_FAIL':
            return state.updateIn(['bar_bmgzcb', 'failed'], value => true)

        //部门平均工资
        case 'BAR_BMPJGZ':
            return state.deleteIn(['pie_bmpjgz', 'failed']);
        case 'BAR_BMPJGZ_SUCCESS':
            data = aciton.payload.data || {};
            let pie_bmpjgz_data = []
            data.infoOrganizationDomains.forEach((item, i) => {
                pie_bmpjgz_data.push({
                    name: item.name,
                    value: parseInt(item.averageWage)
                })
            });

            let pie_bmpjgz = state.get('pie_bmpjgz');
            pie_bmpjgz = pie_bmpjgz.toJS()
            pie_bmpjgz = {
                ...pie_bmpjgz,
                failed: false,
                series: [{
                    ...pie_bmpjgz.series[0],
                    data: pie_bmpjgz_data
                }]
            }
            return state.updateIn(['pie_bmpjgz'], value => fromJS(pie_bmpjgz))
        case 'BAR_BMPJGZ_FAIL':
            return state.updateIn(['pie_bmpjgz', 'failed'], value => true)

































































































































































































































































































































        //在职比例
        case 'PIE_BEIN':
            return state;
        case 'PIE_BEIN_SUCCESS':
            let I_state = state.get('payroll').toJS();
            let newData = [
                {value: aciton.payload.data.employeeCountWizard, name: '入职中'},
                {value: aciton.payload.data.employeeCountContractIsNotSigned, name: '合同未签订'},
                {value: aciton.payload.data.employeeCountTrial, name: '试用期'},
                {value: aciton.payload.data.employeeCountOfficial, name: '正式员工'}
            ];
            I_state.series[0].data = newData;
            return state.setIn(['payroll'], fromJS(I_state));
        case 'PIE_BEIN_FAIL':
            return state;

        //年龄比例
        case 'PIE_BEage':
            return state;
        case 'PIE_BEage_SUCCESS':
            let A_state = state.get('age').toJS();
            A_state.series[0].data = aciton.payload.series;
            return state.setIn(['age'], fromJS(A_state));
        case 'PIE_BEage_FAIL':
            return state;
        //学历比例
        case 'PIE_BEedu':
            return state;
        case 'PIE_BEedu_SUCCESS':
            let E_state = state.get('education').toJS();
            E_state.series[0].data = aciton.payload.series;
            return state.setIn(['education'], fromJS(E_state));
        case 'PIE_BEedu_FAIL':
            return state;
        //性别比例
        case 'PIE_BEsex':
            return state;
        case 'PIE_BEsex_SUCCESS':
            let S_state = state.get('sex').toJS();
            S_state.series[0].data = aciton.payload.series;
            return state.setIn(['sex'], fromJS(S_state));
        case 'PIE_BEsex_FAIL':
            return state;
        //婚姻状况
        case 'PIE_BEmar':
            return state;
        case 'PIE_BEmar_SUCCESS':
            let M_state = state.get('marriage').toJS();
            M_state.series[0].data = aciton.payload.series;
            return state.setIn(['marriage'], fromJS(M_state));
        case 'PIE_BEmar_FAIL':
            return state;
        //生育状况
        case 'PIE_BEborn':
            return state;
        case 'PIE_BEborn_SUCCESS':
            let B_state = state.get('born').toJS();
            B_state.series[0].data = aciton.payload.series;
            return state.setIn(['born'], fromJS(B_state));
        case 'PIE_BEborn_FAIL':
            return state;


        //在职年限
        case 'PIE_BEyear':
            return state;
        case 'PIE_BEyear_SUCCESS':
            let W_state = state.get('workYear').toJS();
            let W_arr = [];
            aciton.payload.data.map((em, index) => {
                if (index > 3) return;
                let w_json = {
                    name: em.name,
                    year: `${em.workAge}年`,
                    enterTime: em.inDate,
                    key: index
                };
                W_arr.push(w_json);
            });
            W_state.data = W_arr;
            return state.setIn(['workYear'], fromJS(W_state));
        case 'PIE_BEyear_FAIL':
            return state;
        //在职年限全部
        case 'PIE_BEyearAll':
            return state;
        case 'PIE_BEyearAll_SUCCESS':
            let WA_state = state.get('workYear').toJS();
            if (aciton.payload.data.length) {
                let WA_arr = [];
                aciton.payload.data.map((em, index) => {
                    let w_json = {
                        name: em.name,
                        year: `${em.workAge}年`,
                        enterTime: em.inDate,
                        key: index
                    };
                    WA_arr.push(w_json);
                });
                WA_state.data = WA_arr;
                return state.setIn(['workYear'], fromJS(WA_state));
            } else {
                return state.setIn(['workYear'], fromJS(WA_state));
            }
        case 'PIE_BEyearAll_FAIL':
            return state;




        //缺勤
        case 'Grid_BENcome':
            return state;
        case 'Grid_BENcome_SUCCESS':
            let NC_state = state.get('nCome').toJS();
            NC_state.xAxis.data = aciton.payload.data.dates;
            NC_state.series[0].data = aciton.payload.data.abseTimes;
            return state.setIn(['nCome'], fromJS(NC_state));
        case 'Grid_BENcome_FAIL':
            return state;


        //迟到未打卡
        case 'Grid_BELNC':
            return state;
        case 'Grid_BELNC_SUCCESS':
            let NCD_state = state.get('lateCome').toJS();
            NCD_state.xAxis.data = aciton.payload.data.dates;
            NCD_state.series[0].data = aciton.payload.data.lateTimesAndNoBeginEndTimes;
            return state.setIn(['lateCome'], fromJS(NCD_state));
        case 'Grid_BELNC_FAIL':
            return state;

        //请假统计
        case 'Grid_BEOFW':
            return state;
        case 'Grid_BEOFW_SUCCESS':
            let OFW_state = state.get('offWork').toJS();
            OFW_state.xAxis.data = aciton.payload.data.dates;
            OFW_state.series[0].data = aciton.payload.data.leaveTimes;
            return state.setIn(['offWork'], fromJS(OFW_state));
        case 'Grid_BEOFW_FAIL':
            return state;

        // 公出统计
        case 'Grid_BEOFB':
            return state;
        case 'Grid_BEOFB_SUCCESS':
            let OFB_state = state.get('outBussiness').toJS();
            OFB_state.xAxis.data = aciton.payload.data.dates;
            OFB_state.series[0].data = aciton.payload.data.busiAwayTimes;
            return state.setIn(['outBussiness'], fromJS(OFB_state));
        case 'Grid_BEOFB_FAIL':
            return state;
        // 今日公出列表
        case 'Grid_BEOFBT':
            return state;
        case 'Grid_BEOFBT_SUCCESS':
            let OFBT_state = state.get('outBussToday').toJS();
            let OFW_arr = [];
            aciton.payload.data.map((em, index) => {
                if (index > 3) return;
                let ofw_json = {
                    name: em.name,
                    time: em.time,
                    past: em.actDate,
                    note: em.memo,
                    key: index
                };
                OFW_arr.push(ofw_json);
            });
            OFBT_state.data = OFW_arr;
            return state.setIn(['outBussToday'], fromJS(OFBT_state));

        case 'Grid_BEOFBT_FAIL':
            return state;

        // 今日公出列表全部
        case 'Grid_BEOFBT_ALL':
            return state;
        case 'Grid_BEOFBT_ALL_SUCCESS':
            let OFBT_All_state = state.get('outBussToday').toJS();
            let OFW_All_arr = [];
            aciton.payload.data.map((em, index) => {
                let ofw_json = {
                    name: em.name,
                    time: em.time,
                    past: em.actDate,
                    note: em.memo,
                    key: index
                };
                OFW_All_arr.push(ofw_json);
            });
            OFBT_All_state.data = OFW_All_arr;
            return state.setIn(['outBussToday'], fromJS(OFBT_All_state));

        case 'Grid_BEOFBT_ALL_FAIL':
            return state;

        //今日请加列表
        case 'Grid_BEOFWT':
            return state;
        case 'Grid_BEOFWT_SUCCESS':
            let OFWT_state = state.get('offWorkToday').toJS();
            let OFWT_arr = [];
            aciton.payload.data.map((em, index) => {
                if (index > 3) return;
                let ofw_json = {
                    name: em.name,
                    type: em.type,
                    time: em.time,
                    note: em.memo,
                    key: index
                };
                OFWT_arr.push(ofw_json);
            });
            OFWT_state.data = OFWT_arr;
            return state.setIn(['offWorkToday'], fromJS(OFWT_state));
        case 'Grid_BEOFWT_FAIL':
            return state;

        //今日请加列表全部
        case 'Grid_BEOFWT_ALL':
            return state;
        case 'Grid_BEOFWT_ALL_SUCCESS':
            let OFWT_All_state = state.get('offWorkToday').toJS();
            let OFWT_All_arr = [];
            aciton.payload.data.map((em, index) => {
                let ofw_json = {
                    name: em.name,
                    type: em.type,
                    time: em.time,
                    note: em.memo,
                    key: index
                };
                OFWT_All_arr.push(ofw_json);
            });
            OFWT_All_state.data = OFWT_All_arr;
            return state.setIn(['offWorkToday'], fromJS(OFWT_All_state));
        case 'Grid_BEOFWT_ALL_FAIL':
            return state;

        //生日祝福
        case 'BirthdayList':
            return state;
        case 'BirthdayList_SUCCESS':
            let Birthday_state = state.get('birthday').toJS();
            let Birthday_arr = [];
            aciton.payload.data.map((em, index) => {
                if (index > 3) return;
                let ofw_json = {
                    name: em.employeeName,
                    time: em.countdown,
                    birth: em.birthday,
                    key: index
                };
                Birthday_arr.push(ofw_json);
            });
            Birthday_state.data = Birthday_arr;
            return state.setIn(['birthday'], fromJS(Birthday_state));
        case 'BirthdayList_FAIL':
            return state;
        //生日祝福全部
        case 'BirthdayList_ALL':
            return state;
        case 'BirthdayList_ALL_SUCCESS':
            let Birthday_All_state = state.get('birthday').toJS();
            let Birthday_All_arr = [];
            aciton.payload.data.map((em, index) => {
                let ofw_json = {
                    name: em.employeeName,
                    time: em.countdown,
                    birth: em.birthday,
                    key: index
                };
                Birthday_All_arr.push(ofw_json);
            });
            Birthday_All_state.data = Birthday_All_arr;
            return state.setIn(['birthday'], fromJS(Birthday_All_state));
        case 'BirthdayList_ALL_FAIL':
            return state;
        //司龄祝福
        case 'BeDateList':
            return state;
        case 'BeDateList_SUCCESS':
            let BeDate_state = state.get('workYearCel').toJS();
            let BeDate_arr = [];
            aciton.payload.data.map((em, index) => {
                if (index > 3) return;
                let ofw_json = {
                    name: em.employeeName,
                    time: em.countdown,
                    beDate: em.inDate,
                    key: index
                };
                BeDate_arr.push(ofw_json);
            });
            BeDate_state.data = BeDate_arr;
            return state.setIn(['workYearCel'], fromJS(BeDate_state));
        case 'BeDateList_FAIL':
            return state;
        //司龄祝福全部
        case 'BeDateList_ALL':
            return state;
        case 'BeDateList_ALL_SUCCESS':
            let BeDate_All_state = state.get('workYearCel').toJS();
            let BeDate_All_arr = [];
            aciton.payload.data.map((em, index) => {
                let ofw_json = {
                    name: em.employeeName,
                    time: em.countdown,
                    beDate: em.inDate,
                    key: index
                };
                BeDate_All_arr.push(ofw_json);
            });
            BeDate_All_state.data = BeDate_All_arr;
            return state.setIn(['workYearCel'], fromJS(BeDate_All_state));
        case 'BeDateList_ALL_FAIL':
            return state;


        default:
            return state;
    }
}


export default boss;