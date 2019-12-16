var pano = Bone.extend({}, Bone.Events, {
    init: function (stage) {
        var _self = this;
        this.stage = stage;
        this.timerAbout = null;

        this.addBg();

        this.addDetailList();
        
        this.addAbout();
        this.addCus();
        this.addLeader();
        this.addMethods();
        this.addJourney();
        this.addLink();
        this.addLogo();
    },
    addBg:function(){
        var panoRect = {w: 2625, h: 1144};
        var pano = function(imgs, rect) {
            var _len = imgs.length;
            var _step = rect.w / _len;
            var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len))-2 ;
            var _sp = new C3D.Sprite();
            for (var i = 0; i < _len; i++) {
                var _p = new C3D.Plane();
                var _r = 360 / _len * i;
                var _a = Math.PI * 2 / _len * i;
                _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                    image: imgs[i].url,
                    repeat: 'no-repeat',
                    size:'125px 100%',
                    bothsides: false,
                }).update();
                _sp.addChild(_p);
            }
            return _sp;
        }(IMG_SOURCE.bg, panoRect);
        pano.name('panoBg').position(0, 0, 0).updateT();
        this.stage.addChild(pano);
    },
    addDetailList:function(){
        var detailRect = {w:2627,h:690};
        var detail = function(detailRect){
            var _len = 7;
            var _step = detailRect.w/_len;
            var _radius = Math.floor(_step/2/Math.tan(Math.PI/_len))-1;
            var _sp = new C3D.Sprite().name('detailList');
            for(var i= 0;i<_len; i++){
                var _p =new C3D.Plane();
                var _r =360/_len *i;
                var _a = Math.PI*2/_len*i;
                _p.name(`jingy${i+1}`).size(_step,detailRect.h).position(Math.sin(_a)*_radius,0,-Math.cos(_a)*_radius).rotation(0,-_r,0).update();
                _sp.addChild(_p);
            }
            _sp.position(0,0,0);
            return _sp;
        }(detailRect)
        this.stage.addChild(detail);
    },
    
    addAbout:function(){
        var _self = this;
        var jy1 = this.stage.children[1].children[0];

        // 标题
        var aboutTitle = C3D.create({
            type:'plane',
            name:'aboutTiele',
            position:[187,81,0],
            rotation:[0,0.0],
            size:[176,109],
            material:[{
                image:IMG_SOURCE.aboutTitile.url,
                repeat:'no-repeat',
                size:'cover',
                bothsides:false,
            }]
        });
        jy1.addChild(aboutTitle);

      
        for (var i = 0; i < IMG_SOURCE.about.length; i++) {
            var _item = C3D.create({
                type:'plane',
                name:'about'+i,
                position:[IMG_SOURCE.about[i].x,IMG_SOURCE.about[i].y,0],
                size:[IMG_SOURCE.about[i].width/2,IMG_SOURCE.about[i].height/2],
                rotation:[0,0,0],
                material:[{
                    image: IMG_SOURCE.about[i].url,
                    repeat:'no-repeat',
                    size:'cover',
                    bothsides:false,
                }]
            })            
           
           
            jy1.addChild(_item);
        }
    },
    addCus:function(){
        var custitle = C3D.create({
            type:'plane',
            name:'custitle',
            position:[0,90,72],
            size:[204,128],
            rotation:[0,32,0],
            material:[{
                image:IMG_SOURCE.cusTitle.url,
                repeat:'no-repeat',
                size:'204px 128px',
                bothsides:false,
            }]
        })   
        var panoRect = {w: 2700, h: 470};
        var pano = function(imgs, rect) {
            var _len = 27;
            var _step = rect.w / _len;
            var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len)) - 15;
            var _sp = new C3D.Sprite();
            for (var i = 3; i < 9; i++) {
                var _p = new C3D.Plane();
                var _r = 360 / _len * i;
                var _a = Math.PI * 2 / _len * i;
                _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                    image: imgs[i-3].url,
                    repeat: 'no-repeat',
                    size:'100px 470px',
                    bothsides: false,
                }).update();
                _sp.addChild(_p).name('cus');
            }
            return _sp;
        }(IMG_SOURCE.cus, panoRect);
        pano.position(0, 90, 0).updateT();
        this.stage.children[1].children[2].addChild(custitle);
        this.stage.addChild(pano);
    },
    addLeader:function(){
        var top_detail = C3D.create({
            type:'plane',
            name:'jy4-leader-top',
            position:[188,150,0],
            size:[142,248],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.leader[0].url,
                repeat:'no-repeat',
                bothsides:false,
                size:'142px 248px',
            }]

        })      
        var bottom_detail = C3D.create({
            type:'plane',
            naem:'jy4-leader-detail',
            position:[184,468,0],
            rotation:[0,0,0],
            size:[329,346],
            material:[{
                image:IMG_SOURCE.leader[1].url,
                repeat:'no-repeat',
                size:"329px 346px",
                bothsides:false,
            }]
        })
        this.stage.children[1].children[3].addChild(top_detail);
        this.stage.children[1].children[3].addChild(bottom_detail);
    },
    addMethods:function(){
        var methodTitle = C3D.create({
            type:'plane',
            name:'jy4-methods-title',
            position:[189,43,0],
            size:[111,42],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.methods[0].url,
                repeat:'no-repeat',
                bothsides:false,
                size:'111px 42px',
            }]

        })      
        var method1 = C3D.create({
            type:'plane',
            naem:'jy4-methods-1',
            position:[212,162,0],
            rotation:[0,0,0],
            size:[229,124],
            material:[{
                image:IMG_SOURCE.methods[1].url,
                repeat:'no-repeat',
                size:"229px 124px",
                bothsides:false,
            }]
        })

        var method2 = C3D.create({
            type:'plane',
            naem:'jy4-methods-2',
            position:[192,371,0],
            rotation:[0,0,0],
            size:[231,131],
            material:[{
                image:IMG_SOURCE.methods[2].url,
                repeat:'no-repeat',
                size:"231px 131px",
                bothsides:false,
            }]
        })
        var method3 = C3D.create({
            type:'plane',
            naem:'jy4-methods-3',
            position:[201,583,0],
            rotation:[0,0,0],
            size:[248,128],
            material:[{
                image:IMG_SOURCE.methods[3].url,
                repeat:'no-repeat',
                size:"248px 128px",
                bothsides:false,
            }]
        })
        this.stage.children[1].children[4].addChild(methodTitle);
        this.stage.children[1].children[4].addChild(method1);
        this.stage.children[1].children[4].addChild(method2);
        this.stage.children[1].children[4].addChild(method3);

    },
    addJourney:function(){

        var joutitle = C3D.create({
            type:'plane',
            name:'joutitle',
            position:[188,47,0],
            size:[107,42],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.journey[0].url,
                repeat:'no-repeat',
                bothsides:false,
                size:'107px 42px',
            }]
        })
        var jouline = C3D.create({
            type:'plane',
            name:'jouline',
            position:[184,385,0],
            size:[329,573],
            rotation:[0,0,0],
            material:[{
                image:'./static/pic.gif',
                repeat:'no-repeat',
                bothsides:false,
                size:'329px 573px',
            }]
        })    

        var jou2019 = C3D.create({
            type:'plane',
            name:'jou2019',
            position:[187,134,0],
            size:[330,72],
            rotation:[0,0,0],
           
        });
        var jou2018 = C3D.create({
            type:'plane',
            name:'jou2018',
            position:[238,270,0],
            size:[227,130],
            rotation:[0,0,0],
           
        });
        var jou2017 = C3D.create({
            type:'plane',
            name:'jou2017',
            position:[152,420,0],
            size:[216,86],
            rotation:[0,0,0],
           
        });
        var jou2016 = C3D.create({
            type:'plane',
            name:'jou2016',
            position:[231,529,0],
            size:[198,89],
            rotation:[0,0,0],
            
        });
        var jou2015 = C3D.create({
            type:'plane',
            name:'jou2015',
            position:[170,640,0],
            size:[179,59],
            rotation:[0,0,0],
           
        });
      
        this.stage.children[1].children[5].addChild(joutitle);
        this.stage.children[1].children[5].addChild(jouline);
        this.stage.children[1].children[5].addChild(jou2019);
        this.stage.children[1].children[5].addChild(jou2018);
        this.stage.children[1].children[5].addChild(jou2017);
        this.stage.children[1].children[5].addChild(jou2016);
        this.stage.children[1].children[5].addChild(jou2015);
       
    },
    addLink:function(){
        var linktitle = C3D.create({
            type:'plane',
            name:'linktitle',
            position:[186,65,0],
            size:[167,81],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.link[0].url,
                repeat:'no-repeat',
                size:'167px 81px',
                bothsides:false,
            }]
        })   
        var link = C3D.create({
            type:'plane',
            name:'link',
            position:[186,514,0],
            size:[207,270],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.link[2].url,
                size:'207px 270px',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        var btnleft = C3D.create({
            type:'plane',
            name:'btnleft',
            position:[37,270,0],
            size:[35,26],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.link[3].url,
                size:'35px 26px',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        var btnright = C3D.create({
            type:'plane',
            name:'btnright',
            position:[338,270,0],
            size:[35,26],
            rotation:[0,0,180],
            material:[{
                image:IMG_SOURCE.link[3].url,
                repeat:'no-repeat',
                size:'35px 26px',
                bothsides:false,
            }]
        })   
        var btn = C3D.create({
            type:'plane',
            name:'btn',
            position:[188,269,0],
            size:[207,70],
            rotation:[0,0,0],
            material:[{
                image:IMG_SOURCE.link[1].url,
                repeat:'no-repeat',
                size:'207px 70px',
                bothsides:false,
            }]
        })   
        btn.on('touchend',function(){
            // 点击跳转案例详情
            window.location.href = 'https://www.whalesdesign.com/column';
        });
        this.stage.children[1].children[6].addChild(linktitle);
        this.stage.children[1].children[6].addChild(link);
        this.stage.children[1].children[6].addChild(btnleft);
        this.stage.children[1].children[6].addChild(btnright);
        this.stage.children[1].children[6].addChild(btn);
        
    },
    addLogo:function(){
        var bgS = C3D.create({
            type: 'plane',
            name:'sky',
            size: [430, 382],
            position: [0, -600, 0],
            rotation:[-90,0,0],
            scale: [1],
            material: [{image: './bg/logo.png', bothsides: false,repeat:'no-repeat',size:'100% 100%'}]
        });
        this.stage.addChild(bgS);

        var bgB = C3D.create({
            type: 'plane',
            name:'bot',
            size: [1500, 1500],
            position: [0, 800, 0],
            rotation:[90,0,0],
            scale: [1],
            material: [{color: '#70B1FF', bothsides: false,repeat:'no-repeat',size:'100% 100%'}]
        });
        this.stage.addChild(bgB);
    },
});
