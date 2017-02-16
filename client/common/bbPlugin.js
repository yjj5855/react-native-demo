
// 简单封装本地存储
const localObj = {
    getItem: function (key) {
        if (typeof localStorage === 'object') {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch (e) {
                alert('本站无痕浏览模式,请关闭后再试!');
            }
        }
    },
    setItem: function (key, value) {
        if (typeof localStorage === 'object') {
            try {
                return localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                alert('请关闭[无痕浏览]模式后再试!');
            }
        }
    },
    removeItem: function (key) {
        if (typeof localStorage === 'object') {
            try {
                return localStorage.removeItem(key);
            } catch (e) {
                alert('请关闭[无痕浏览]模式后再试!');
            }
        }
    },
    getUseSize: function () {
        if (typeof localStorage === 'object') {
            try {
                return JSON.stringify(localStorage).length;
            } catch (e) {
                alert('请关闭[无痕浏览]模式后再试!');
            }
        }
    }
};

export const _localStorage = localObj;


export function getParamByName(name) {

    return null;
}

export function getOrgUrl() {
    return '/org/fwefjwejgweg' || '';
}