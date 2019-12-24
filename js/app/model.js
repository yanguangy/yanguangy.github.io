var model = Bone.extend({}, Bone.Events, {
    init: function () {
       
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                // 判断响应结果:
                if (request.status === 200) {
                    var data = JSON.parse(request.responseText);
                    wx.config({
                        debug: false,
                        appId: data.appId,          // 必填，公众号的唯一标识
                        timestamp: data.timestamp,  // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr,    // 必填，生成签名的随机串
                        signature: data.signature,
                        jsApiList:data.jsApiList,
                    });
                    // 配置分享到微信
                    wx.ready(function () {
                        wx.hideMenuItems({
                            menuList: [
                                'menuItem:readMode', // 阅读模式
                                'menuItem:editTag', // 编辑标签
                                'menuItem:delete', // 删除
                                'menuItem:originPage', // 原网页
                                'menuItem:openWithQQBrowser', // 在QQ浏览器中打开
                                'menuItem:openWithSafari', // 在Safari中打开
                                'menuItem:share:email', // 邮件
                                'menuItem:share:brand' //一些特殊公众号
                            ]
                        });
                        var shareData = {
                            title: "精于设计品牌介绍",
                            desc: '创意·设计·实现，设计与科技驱动的企业级解决方案',
                            link: "http://h5.whalesdesign.com",
                            imgUrl: '../../bg/logo.png',
                            success: function () { 
                                // 用户确认分享后执行的回调函数
                                PluginMessage.success({
                                    text: "分享成功",
                                })
                            }
                        };
                        wx.onMenuShareAppMessage(shareData);
                        wx.onMenuShareTimeline(shareData);
                        wx.onMenuShareQQ(shareData);
                        wx.onMenuShareQZone(shareData);
                    });
                    
                    return;

                } else {

                    return;
                }
            } else {
                // HTTP请求还在继续...
            }
        }

        // 发送请求:
        request.open('GET', 'http://api.whalesdesign.com/v1/wechat/getJsSdk?url=http://h5.whalesdesign.com');
        request.send();






       
    },
    random: function (n1, n2) {
        // 获取随机数n1到n2之间的随机数
        return n1 + Math.floor(Math.random() * (n2 - n1) * 100) / 100;
    },
});