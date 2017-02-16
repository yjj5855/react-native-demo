const app = {
    isLoading: false, //路由加载标志位
    selectedTab: 'home', //主页tab
    ddConfig: null,

    user: {
        name: '',
        dept: '',
        avatar: ''
    },
    boss: null,

    showCompanyManagement: false, //是否显示公司管理
    showWage: false, //是否显示工资模块

}
export default app;