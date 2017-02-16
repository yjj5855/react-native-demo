
const lineCharts = {
    color: ['#1ea782'],
    //图表定位
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'',
            type:'line',
            data:[]
        }
    ]
}

const barCharts = {
    color: ['#1ea782'],
    //图表定位
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth: '60%',
            data: []
        }
    ]
}

const pieCharts = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['50%', '70%'],
            // startAngle: 45,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}\n{c}'
                },
                emphasis: {
                    show: true,
                }
            },
            data:[ ]
        }
    ]
}

const boss = {
    //首页顶部 数据
    homeTopDesc: {
        "trialCount": 0,
        "compEmplCount": 0,
        "newEmplCount": 0,
        "leaveOfficeCount": 0,
        "thisMonthTotalWages": null,
        "lastMonthTotalWages": null,
        "recruitingPostCount": 0,
        "theNumberToBeRecruited": 0
    },

    //祝福提醒
    withRemind: [],

    //代办事项
    todoList: [],

    //部门统计
    pie_bmtj: {
        ...pieCharts,
        series: [
            {
                ...pieCharts.series[0],
                name:'部门统计',
            }
        ]
    },

    //迟到统计
    line_cdtj: {
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'迟到次数',
                type:'line',
                data:[]
            }
        ]
    },

    //每月平均出勤率
    line_mypjcql: {
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'每月平均出勤率',
                type:'line',
                data:[]
            }
        ]
    },

    //每月入职率
    line_myrzl: {
        color: ['#1ea782'],
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'入职率',
                type:'line',
                data:[5.4, 6.5, 8.2, 8.1, 8.0, 8.3, 6.2, 8.9, 10.2, 9.8, 8.3, 0]
            }
        ]
    },

    //部门平均入职率 - 每月
    bar_bmpjrzl: {
        color: ['#1ea782'],
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['行政部', '客服部', '财务部', '人事部', '销售部', '技术部'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '部门平均入职率',
                type: 'bar',
                barWidth: '60%',
                data: [9.8, 6.4, 8.6, 7.8, 5.5, 1.2]
            }
        ]
    },

    //部门离职原因 - 每月
    bar_lzyy: {
        color: ['#fec309'],
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        yAxis: {
            type: 'category',
            data: [
                '身体原因', '无晋升空间', '想换个环境', '薪资待遇低', '不看好公司前景',
                '同事关系复杂', '上班路程远', '领导管理不合理', '工作压力大', '其他'
            ],
            axisTick: {
                alignWithLabel: true
            }
        },
        xAxis: {
            type: 'value'
        },
        series: [
            {
                name: '离职原因',
                type: 'bar',
                barWidth: '60%',
                data: [4, 3, 1, 2, 3, 2, 1, 1, 0, 0]
            }
        ]
    },

    //每月离职率
    line_mylzl: {
        color: ['#fec309'],
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'入职率',
                type:'line',
                data:[5.4, 6.5, 8.2, 8.1, 8.0, 8.3, 6.2, 8.9, 10.2, 9.8, 8.3, 0]
            }
        ]
    },

    //部门平均离职率 - 每月
    bar_bmpjlzl:{
        color: ['#fec309'],
        //图表定位
        grid: {
            top: '10%',
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    },

    //部门离职类型 - 每月
    pie_bmlzlx: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'离职类型',
                type:'pie',
                radius: ['50%', '70%'],
                data:[
                    {value:8, name:'公司辞退'},
                    {value:21, name:'员工辞职'},
                    {value:1, name:'其他'},
                    {value:4, name:'试用期不合格'},
                    {value:2, name:'合同到期不续签'}
                ]
            }
        ]
    },

    //每月工资成本
    line_mygzcb: {
        ...lineCharts,
        grid: {
            ...lineCharts.grid,
            top: '15%'
        },
        yAxis: [
            {
                type: 'value',
                name: '单位（万元）'
            }
        ],
        series: [
            {
                ...lineCharts.series[0],
                name: '工资成本'
            }
        ]
    },

    //部门工资成本
    bar_bmgzcb: {
        ...barCharts,
        series: [
            {
                ...barCharts.series[0],
                name: '部门工资成本'
            }
        ]
    },

    //部门平均工资
    pie_bmpjgz: {
        ...pieCharts,
        series: [
            {
                ...pieCharts.series[0],
                name: '部门平均工资'
            }
        ]
    },





























































    //员工信息饼图
    //在职人员
    payroll: {
        tooltip: {
            confine: true,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                center: ['50%', '50%'],
                name: '在职员工比例',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []
            }
        ]
    },

    //年龄
    age: {
        tooltip: {
            confine: true,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                center: ['50%', '50%'],
                name: '年龄比例',
                type: 'pie',
                radius: ['30%', '48%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []
            }
        ]
    },

    //学历
    education: {
        tooltip: {
            confine: true,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                center: ['50%', '50%'],
                name: '年龄比例',
                type: 'pie',
                radius: ['25%', '40%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []
            }
        ]
    },

    // 性别
    sex: {
        tooltip: {
            confine: true,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                center: ['50%', '50%'],
                name: '年龄比例',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []
            }
        ]
    },

    // 婚姻
    marriage: {
        tooltip: {
            confine: true,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                center: ['50%', '50%'],
                name: '年龄比例',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []
            }
        ]
    },

    //生育
    born: {
        tooltip: {
            confine: true,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                center: ['50%', '50%'],
                name: '年龄比例',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '14'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        smooth: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: []
            }
        ]
    },

    //司龄
    workYear: {
        columns: [
            {title: '姓名', dataIndex: 'name', key: 'name'},
            {title: '司龄', dataIndex: 'year', key: 'year'},
            {title: '入职时间', dataIndex: 'enterTime', key: 'enterTime'},
        ],
        data: [{
            name: '',
            year: '',
            enterTime: '',
            key: '1',
        }]
    },

    //缺勤
    nCome: {
        tooltip: {
            confine: true,
            trigger: 'axis'
        },
        grid: {
            show: true,
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '缺勤状况统计',
                type: 'line',
                smooth: true,
                data: []
            }
        ]
    },
    //迟到未打卡
    lateCome: {
        tooltip: {
            confine: true,
            trigger: 'axis'
        },
        grid: {
            show: true,
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '迟到未打卡统计',
                type: 'line',
                smooth: true,
                data: []
            }
        ]
    },
    //请假统计
    offWork: {
        tooltip: {
            confine: true,
            trigger: 'axis'
        },
        grid: {
            show: true,
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '请假统计',
                type: 'line',
                smooth: true,
                data: []
            }
        ]
    },
    // 公出统计
    outBussiness: {
        tooltip: {
            confine: true,
            trigger: 'axis'
        },
        grid: {
            show: true,
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '公出统计',
                type: 'line',
                smooth: true,
                data: []
            }
        ]
    },
    // 今日公出列表
    outBussToday: {
        columns: [
            {title: '姓名', dataIndex: 'name', key: 'name'},
            {title: '时间', dataIndex: 'time', key: 'time'},
            {title: '签到', dataIndex: 'past', key: 'past'},
            {title: '备注', dataIndex: 'note', key: 'note'},
        ],
        data: [{
            name: '',
            time: '',
            past: '',
            note:'',
            key: '1'
        }]
    },
    //今日请加列表
    offWorkToday: {
        columns: [
            {title: '姓名', dataIndex: 'name', key: 'name'},
            {title: '类型', dataIndex: 'type', key: 'type'},
            {title: '时间', dataIndex: 'time', key: 'time'},
            {title: '备注', dataIndex: 'note', key: 'note'},
        ],
        data: [{
            name: '',
            type: '',
            time: '',
            note:'',
            key: '1'
        }]
    },

    //生日列表
    birthday: {
        columns: [
            {title: '姓名', dataIndex: 'name', key: 'name'},
            {title: '倒计时', dataIndex: 'time', key: 'time'},
            {title: '生日', dataIndex: 'birth', key: 'birth'},
        ],
        data: [{
            name: '',
            time: '',
            birth:'',
            key: '1'
        }]
    },
    //司龄列表
    workYearCel: {
        columns: [
            {title: '姓名', dataIndex: 'name', key: 'name'},
            {title: '倒计时', dataIndex: 'time', key: 'time'},
            {title: '入职日期', dataIndex: 'beDate', key: 'beDate'},
        ],
        data: [{
            name: '',
            time: '',
            beDate:'',
            key: '1'
        }]
    }
};

export default boss;
