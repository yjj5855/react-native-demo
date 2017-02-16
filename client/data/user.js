import moment from 'moment'

const listData = {
    pageParam: {
        pageIndex: 1,
        pageLength: 20,

    },
    pageData: {
        list: [],
        hasNextPage: true
    },
    loading: false,
}

const user = {
    //yjj
    //公出详情
    businessOutDetail: {},
    //审批中心
    approvalListData: {
        "tabSelected": '2',
        "summary": {
            "checkInOutCount": 0,
            "workOutCount": 0,
            "leaveCount": 0
        },
        timestamp: {
            "1": 0,
            "2": 0,
            "3": 0
        },
        "1": {
            pageData: {
                list: [],
                total: 0,
                hasNextPage: true
            },
            pageParam: {
                pageIndex: 1,
                pageLength: 20,
                type: 1,
            },
            loading: false,
        },
        "2": {
            pageData: {
                list: [],
                total: 0,
                hasNextPage: true
            },
            pageParam: {
                pageIndex: 1,
                pageLength: 20,
                type: 2,
            },
            loading: false,
        },
        "3": {
            pageData: {
                list: [],
                total: 0,
                hasNextPage: true
            },
            pageParam: {
                pageIndex: 1,
                pageLength: 20,
                type: 3,
            },
            loading: false,
        }
    },

    //考勤中心
    attendanceData:{
        //选择的
        selected: {
            dept:{
                id: '',
                name: ''
            },
            date: moment().format('YYYY-MM-DD')
        },
        data: {
            "listOrg": [

            ],
            "recordSummary": {
                "checkInOutCount": 0,
                "workOutCount": 0,
                "leaveCount": 0,
                "emplCount": 0,
                "checkInOutInfo": "",
                "leaveInfo": "",
                "workOutInfo": ""
            },
            "listLeave": [],
            "listBusiness": [],
            "listSignRecord": []
        }
    },

    //公司默认上下班时间
    defaultTime: {
        signIn: '',
        signOut: ''
    },

    //班步列表
    categoryListData: {
        //部门动态
        'DEPT_EMPLOYEE_ENTRY,DEPT_EMPLOYEE_RESIGN,INTERVIEW': {
            title: '部门动态',
            list: [],
            loading: false
        }

    },

    //班步详情列表
    categoryDetail:{
        //公司公告
        COMP_ANNOUNCEMENTS: {
            ...listData
        },
        //祝福提醒
        WISH_REMIND: {
            ...listData
        },
        //班步动态
        BAMBOO_TRENDS: {
            ...listData
        },
        //员工入职
        DEPT_EMPLOYEE_ENTRY: {
            ...listData
        },
        //员工离职
        DEPT_EMPLOYEE_RESIGN: {
            ...listData
        },
        //面试提醒
        INTERVIEW: {
            ...listData
        }
    },







    //zj
    userHome:[],
    userPast:{},
    holidayType:[],
    offWorkApply:{},
    getOffWorkDetail:{},
    messageList:[],
    pastBuDetail:{},
    benedictionIndex:[],
    benedictionDetail:{}
}
export default user;
