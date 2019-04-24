// 初始化
const appid = 'xxxxxx';
const wechat = new Wechat(appid);

// URL 签名，为设置分享话术做好准备
const userStoreKey = 'user_store_key';
let _userInfo;

// 模拟数据
let simulatedInfo = {
  city: '广州',
  country: '中国',
  headimgurl:
    'http://photo.com',
  language: 'zh_CN',
  nickname: '王大锤',
  openid: 'aaaaaa',
  privilege: ['chinaunicom'],
  province: '广东',
  sex: 1
};

const sdkModule = {
  userInfo() {
    if (_userInfo) {
      return _userInfo;
    } else {
      return simulatedInfo;
    }
  },
  sdkInit(config, callback) {
    wechat.config(config);
    if (localStorage.getItem(userStoreKey)) {
      // 本地存在用户信息
      let userInfo = JSON.parse(localStorage.getItem(userStoreKey));
      if (userInfo) {
        _userInfo = userInfo;
      }
    } else if (wechat.getQuery('code')) {
      wechat.getUserInfo(function(err, res) {
        if (err) {
          throw err;
        }
        localStorage.setItem(userStoreKey, JSON.stringify(res));
        if (res) {
          _userInfo = res;
        }
      });
    } else {
      // 执行授权跳转
      wechat.goTwoAuth('snsapi_userinfo', 'STATE', wechat.filter(['code']));
    }
    wx.error(function(res) {
      console.log(res);
    });
    if (callback) {
      wx.ready(callback);
    }
  },
  setShareMessage(messageInfo, timelineInfo) {
    wx.updateAppMessageShareData(messageInfo);
    wx.updateTimelineShareData(timelineInfo);
  }
};

export default sdkModule;
