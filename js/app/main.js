var main = Bone.extend({}, Bone.Events, {
    init: function () {
        var _self = this;
        this.$main = $('#main');

        model.init();
        gesture.init(this.$main);

        this.stage = new C3D.Stage();
        this.stage.size(640, window.innerHeight).update();
        this.$main.append(this.stage.el);

        this.root = new C3D.Sprite();
        this.root.position(0, 0, -150).update();
        this.stage.addChild(this.root);

        pano.init(this.root);

        $(window).on('resize', function () {
            _self.resize();
        });
        this.resize();

        this.initControl();
        return this;
    }, 

    drag: {lon: 0, lat: 0},
    aim: {lat: 0, lon: 0},
    fix: {lon: 0, lat: 0},
    speed:0,
    lock: true,
    initControl: function () {
        var _self = this;
        gesture.on('move', function (obj) {
            if (!_self.lock) {
                _self.drag.lon = (_self.drag.lon - obj.ax * 0.2) % 360;
                _self.drag.lat = Math.max(-90, Math.min(90, _self.drag.lat + obj.ay * 0.2));
                _self.stage.camera.z<105?_self.stage.camera.z+=15:_self.stage.camera.z =_self.stage.camera.z;
                _self.stage.update();
            }
        });
        gesture.on('end',function(){
            JT.to(_self.stage.camera,.3,{
                z:0,
                yoyo: false,
                repeat: 0,
                ease: JT.Sine.InOut,
                onUpdate:function(){
                    this.target.update();
                }
            })
        })

        var orienter = new Orienter();
        orienter.handler = function (obj) {
            _self.aim.lat = obj.lat;
            _self.aim.lon = -obj.lon;

            if (_self.lock) {
                _self.fix.lat = -_self.aim.lat;
                _self.fix.lon = -_self.aim.lon;
            }
        };
        // orienter.init();

        this.animate = this.animate.bind(this);

        _self.animateOn();
    },

    animateOn: function () {
        this.lock = false;
        this.animate();
    },

    animateOff: function () {
        this.lock = true;
        if (this.animateId) cancelAnimationFrame(this.animateId);
    },

    animateId: null,
    animate: function () {
        this.animateId = requestAnimationFrame(this.animate);

        var _lon = (this.aim.lon + this.fix.lon + this.drag.lon) % 360;
        var _lat = (this.aim.lat + this.fix.lat + this.drag.lat) * 0.35;

        if (_lon - this.root.rotationY > 180) this.root.rotationY += 360;
        if (_lon - this.root.rotationY < -180) this.root.rotationY -= 360;

        this.root.rotationY += (_lon - this.root.rotationY) * 1;
        this.root.rotationX += (_lat - this.root.rotationX) * 0.15;
        this.root.updateT();
    },

    timeId: null,
    resize: function () {
        var _self = this;
        if (this.timeId) clearTimeout(this.timeId);
        this.timeId = setTimeout(function () {
            _self.stage.size(640, window.innerHeight).update();
        }, 100);
    },
});