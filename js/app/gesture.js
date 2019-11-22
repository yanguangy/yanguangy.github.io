var gesture = Bone.extend({}, Bone.Events, {
    // 约定事件字段
    START: 'start',
    END: 'end',
    MOVE: 'move',

    //----------------------------------------------------------------init Gesture手势
    stage: null,  //场景根dom元素
    originTouchPos: {x: 0, y: 0}, //起点坐标
    oldTouchPos: {x: 0, y: 0},//点击起始坐标
    newTouchPos: {x: 0, y: 0},//移动中的新坐标
    firstDir: '',  //手指移动方向

    originTime: 0,
    oldTime: 0,
    newTime: 0,

    dx: 0,
    dy: 0,
    ax: 0,
    ay: 0,
    time: 0,

    init: function (stage) {
        this.stage = stage;
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.stage.on('touchstart', this.onTouchStart);
    },

    clear: function () {
        this.stage.off('touchstart', this.onTouchStart);
        this.stage.off('touchmove', this.onTouchMove);
        this.stage.off('touchend', this.onTouchEnd);
    },

    onTouchStart: function (evt) {
        this.firstDir = '';
        evt = evt.changedTouches[0];
        // 点击屏幕时，初始化参数
        this.originTouchPos.x = this.oldTouchPos.x = this.newTouchPos.x = evt.clientX;
        this.originTouchPos.y = this.oldTouchPos.y = this.newTouchPos.y = evt.clientY;
        this.originTime = this.oldTime = this.newTime = Date.now();
        this.dx = this.dy = this.ax = this.ay = 0;

        this.stage.on('touchmove', this.onTouchMove);
        this.stage.on('touchend', this.onTouchEnd);
        this.trigger(this.START);
    },

    onTouchMove: function (evt) {
        evt = evt.changedTouches[0];
        // 手指移动时，更新坐标，时间。存新坐标，新时间。
        this.newTouchPos.x = evt.clientX;
        this.newTouchPos.y = evt.clientY;
        this.newTime = Date.now();
        this.checkGesture();
        this.oldTouchPos.x = this.newTouchPos.x;
        this.oldTouchPos.y = this.newTouchPos.y;
        this.oldTime = this.newTime;
        return false;
    },

    onTouchEnd: function () {
        // 更新时间
        this.newTime = Date.now();
        // 计算时间差值,并转化为秒为单位
        var _time = (this.newTime - this.oldTime) / 1000;
        // 重新执行end事件函数
        this.trigger(this.END, {
            dx: this.dx,
            dy: this.dy,
            // 比较时间差值,最后移动的时间差与移动停止的时间差.给方向赋值.停留的时间超过移动的时间的两倍
            ax: this.time * 2 > _time ? this.ax : 0,
            ay: this.time * 2 > _time ? this.ay : 0,
            dir: this.firstDir
        });
        // 移除绑定的事件.
        this.stage.off('touchmove', this.onTouchMove);
        this.stage.off('touchend', this.onTouchEnd);
        return false;
    },

    checkGesture: function () {
        // 更新数据xy轴差值。更新时间。
        this.dx = this.fixed2(this.newTouchPos.x - this.originTouchPos.x);
        this.dy = this.fixed2(this.newTouchPos.y - this.originTouchPos.y);
        this.ax = this.fixed2(this.newTouchPos.x - this.oldTouchPos.x);
        this.ay = this.fixed2(this.newTouchPos.y - this.oldTouchPos.y);
        this.time = (this.newTime - this.oldTime) / 1000;

        if (this.firstDir == '') {
            //比较xy轴差值的大小,方向赋值.
            if (Math.abs(this.ax) > Math.abs(this.ay)) {
                this.firstDir = 'x';
            } else if (Math.abs(this.ax) < Math.abs(this.ay)) {
                this.firstDir = 'y';
            }
        }

        // 再执行move事件。
        this.trigger(this.MOVE, {
            dx: this.dx,
            dy: this.dy,
            ax: this.ax,
            ay: this.ay,
            dir: this.firstDir,
            time:this.time,
        });
    },

    // 向下取整
    fixed2: function (num) {
        return Math.floor(num * 100) / 100;
    }

});

// module.exports = gesture;
