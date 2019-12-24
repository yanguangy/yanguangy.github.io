var model = Bone.extend({}, Bone.Events, {
    init: function () {
        console.log(wx);
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
    },
    random: function (n1, n2) {
        // 获取随机数n1到n2之间的随机数
        return n1 + Math.floor(Math.random() * (n2 - n1) * 100) / 100;
    },
});