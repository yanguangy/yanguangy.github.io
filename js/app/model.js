var model = Bone.extend({}, Bone.Events, {

    init: function () {
    },

    random: function (n1, n2) {
        // 获取随机数n1到n2之间的随机数
        return n1 + Math.floor(Math.random() * (n2 - n1) * 100) / 100;
    },

});

