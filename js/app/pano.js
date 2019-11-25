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
        var panoRect = {w: 2898, h: 1144};
        var bgData = [
            {url: 'bg/p2.png'},
            {url: 'bg/p3.png'},
            {url: 'bg/p4.png'},
            {url: 'bg/p5.png'},
            {url: 'bg/p6.png'},
            {url: 'bg/p7.png'},
            {url: 'bg/p8.png'},
            {url: 'bg/p9.png'},
            {url: 'bg/p10.png'},
            {url: 'bg/p11.png'},
            {url: 'bg/p12.png'},
            {url: 'bg/p13.png'},
            {url: 'bg/p14.png'},
            {url: 'bg/p15.png'},
            {url: 'bg/p16.png'},
            {url: 'bg/p17.png'},
            {url: 'bg/p18.png'},
            {url: 'bg/p19.png'},
            {url: 'bg/p20.png'},
            {url: 'bg/p21.png'},
            {url: 'bg/p1.png'},
        ];
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
                    size:'100% 100%',
                    bothsides: false,
                }).update();
                _sp.addChild(_p);
            }
            return _sp;
        }(bgData, panoRect);
        pano.name('panoBg').position(0, 0, 0).updateT();
        this.stage.addChild(pano);
    },
    addDetailList:function(){
        var detailRect = {w:2627,h:690};
        var detail = function(detailRect){
            var _len = 7;
            var _step = detailRect.w/_len;
            var _radius = Math.floor(_step/2/Math.tan(Math.PI/_len))-1;
            var _sp = new C3D.Sprite();
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
            position:[182,82,0],
            rotation:[0,0.0],
            size:[145,112],
            material:[{
                image:'./static/about/about_title.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        });
        jy1.addChild(aboutTitle);

        var aboutData = [
            {
                url: 'static/about/about1.png',
                w: 92,
                h: 108,
                x: 105,
                y: 220,
            },
            {
                url: 'static/about/about2.png',
                w: 92,
                h: 108,
                x: 270,
                y: 220,
            },
            {
                url: 'static/about/about3.png',
                w: 92,
                h: 108,
                x: 105,
                y: 366,
            },
            {
                url: 'static/about/about4.png',
                w: 92,
                h: 108,
                x: 270,
                y: 366,
            },
            {
                url: 'static/about/about5.png',
                w: 92,
                h: 108,
                x: 105,
                y: 507,
            },
            {
                url: 'static/about/about6.png',
                w: 92,
                h: 108,
                x: 270,
                y: 507,
            },
          
        ]
        for (var i = 0; i < aboutData.length; i++) {
            var _item = C3D.create({
                type:'plane',
                name:'about'+i,
                position:[aboutData[i].x,aboutData[i].y,0],
                size:[aboutData[i].w,aboutData[i].h],
                rotation:[0,0,0],
                material:[{
                    image:'./'+aboutData[i].url,
                    repeat:'no-repeat',
                    bothsides:false,
                }]
            })            
           
            // 添加动效
            // JT.to(_item, 3, {
            //     scaleX: '+=.2',
            //     scaleY: '+=.2',
            //     ease: JT.Quad.InOut,
            //     repeat: -1,
            //     yoyo: true,
            //     delay: Math.random() * 3+Math.random(),
            //     onUpdate: function () {
            //         this.target.updateT();
            //     }
            // });
            jy1.addChild(_item);
        }
    },
    addCus:function(){
        var panoRect = {w: 2627, h: 690};
        var bgData = [
            {
                url:'./static/custom/cus1.png'
            },
            {
                url:'./static/custom/cus2.png'
            },
            {
                url:'./static/custom/cus3.png'
            },
            {
                url:'./static/custom/cus4.png'
            },
            {
                url:'./static/custom/cus5.png'
            },
            {
                url:'./static/custom/cus6.png'
            },
        ];
        var pano = function(imgs, rect) {
            var _len = 21;
            var _step = rect.w / _len;
            var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len)) - 15;
            var _sp = new C3D.Sprite();
            for (var i = 2; i < 8; i++) {
                var _p = new C3D.Plane();
                var _r = 360 / _len * i;
                var _a = Math.PI * 2 / _len * i;
                _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                    image: imgs[i-2].url,
                    repeat: 'no-repeat',
                    size:'121px 414px',
                    bothsides: false,
                }).update();
                _sp.addChild(_p).name('cus');
            }
            return _sp;
        }(bgData, panoRect);
        pano.position(0, 26, 0).updateT();
        this.stage.addChild(pano);
    },
    addLeader:function(){
        var top_detail = C3D.create({
            type:'plane',
            name:'jy4-leader-top',
            position:[187,164,0],
            size:[171,276],
            rotation:[0,0,0],
            material:[{
                image:'./static/team/avatar.png',
                repeat:'no-repeat',
                bothsides:false,
            }]

        })      
        var bottom_detail = C3D.create({
            type:'plane',
            naem:'jy4-leader-detail',
            position:[187,433,0],
            rotation:[0,0,0],
            size:[375,120],
            material:[{
                image:'./static/team/dre1.png',
                repeat:'no-repeat',
                size:"375px 120px",
                bothsides:false,
            }]
           
        })
        var bottom_detail2 = C3D.create({
            type:'plane',
            naem:'jy4-leader-detail2',
            position:[187,444,0],
            rotation:[0,0,0],
            size:[300,182],
            visibility: [{alpha: 0}],
            material:[{
                image:'./static/team/dre2.png',
                repeat:'no-repeat',
                size:"300px 182px",
                bothsides:false,
            }]
           
        })
        var btn = C3D.create({
            type:'plane',
            naem:'btn',
            position:[188,575,0],
            rotation:[0,0,0],
            size:[40,40],
            material:[{
                image:'./static/team/down.png',
                repeat:'no-repeat',
                size:"40px 40px",
                bothsides:false,
            }]
           
        })

        btn.on('touchend',function(){
            if(bottom_detail.alpha ===1){
                JT.to(bottom_detail,.7,{
                    alpha:0,
                    onUpdate:function(){
                        this.target.updateV();
                    }
                });
                JT.to(bottom_detail2,.7,{
                    alpha:1,
                    onUpdate:function(){
                        this.target.updateV();
                    }
                });
                JT.to(btn,0,{
                    rotationZ:180,
                    onUpdate:function(){
                        this.target.update();
                    }
                });
            }else{
                JT.to(bottom_detail,.7,{
                    alpha:1,
                    onUpdate:function(){
                        this.target.updateV();
                    }
                });
                JT.to(bottom_detail2,.7,{
                    alpha:0,
                    onUpdate:function(){
                        this.target.updateV();
                    }
                });
                JT.to(btn,0,{
                    rotationZ:0,
                    onUpdate:function(){
                        this.target.update();
                    }
                });
            }
          
        })
        this.stage.children[1].children[3].addChild(top_detail);
        this.stage.children[1].children[3].addChild(bottom_detail);
        this.stage.children[1].children[3].addChild(bottom_detail2);
        this.stage.children[1].children[3].addChild(btn);
    },
    addMethods:function(){
        var panoRect = {w: 2627, h: 690};
        var bgData = [
            {
                url:'./static/method/method1.png'
            },
            {
                url:'./static/method/method2.png'
            },
            {
                url:'./static/method/method3.png'
            },
        ];
        var pano = function(imgs, rect) {
            var _len = 21;
            var _step = rect.w / _len;
            var _radius = Math.floor(_step / 2 / Math.tan(Math.PI / _len)) - 15;
            var _sp = new C3D.Sprite();
            for (var i = 11; i < 14; i++) {
                var _p = new C3D.Plane();
                var _r = 360 / _len * i;
                var _a = Math.PI * 2 / _len * i;
                _p.size(_step, rect.h).position(Math.sin(_a) * _radius, 0, -Math.cos(_a) * _radius).rotation(0, -_r, 0).material({
                    image: imgs[i-11].url,
                    repeat: 'no-repeat',
                    size:'121px 414px',
                    bothsides: false,
                }).update();
                _sp.addChild(_p).name('method');
            }
            return _sp;
        }(bgData, panoRect);
        pano.position(0, 26, 0).updateT();
        this.stage.addChild(pano);
       
    },
    addJourney:function(){

        var joutitle = C3D.create({
            type:'plane',
            name:'joutitle',
            position:[187,41,0],
            size:[80,31],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/journey_title.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })    
        var jouline = C3D.create({
            type:'plane',
            name:'jouline',
            position:[184,385,0],
            size:[235,459],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/line.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })    

        var jou2019 = C3D.create({
            type:'plane',
            name:'jou2019',
            position:[187,134,0],
            size:[330,72],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/2019.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        });
        var jou2018 = C3D.create({
            type:'plane',
            name:'jou2018',
            position:[238,270,0],
            size:[227,130],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/2018.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        });
        var jou2017 = C3D.create({
            type:'plane',
            name:'jou2017',
            position:[152,420,0],
            size:[216,86],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/2017.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        });
        var jou2016 = C3D.create({
            type:'plane',
            name:'jou2016',
            position:[231,529,0],
            size:[198,89],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/2016.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        });
        var jou2015 = C3D.create({
            type:'plane',
            name:'jou2015',
            position:[170,640,0],
            size:[179,59],
            rotation:[0,0,0],
            material:[{
                image:'./static/journey/2015.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
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
            position:[188,186,0],
            size:[252,44],
            rotation:[0,0,0],
            material:[{
                image:'./static/link/link_title.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        var link = C3D.create({
            type:'plane',
            name:'link',
            position:[187,435,0],
            size:[224,171],
            rotation:[0,0,0],
            material:[{
                image:'./static/link/link.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        var btnleft = C3D.create({
            type:'plane',
            name:'btnleft',
            position:[106,284,0],
            size:[20,16],
            rotation:[0,0,0],
            material:[{
                image:'./static/link/btn_left.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        var btnright = C3D.create({
            type:'plane',
            name:'btnright',
            position:[270,284,0],
            size:[20,16],
            rotation:[0,0,0],
            material:[{
                image:'./static/link/btn_right.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        var btn = C3D.create({
            type:'plane',
            name:'btn',
            position:[188,283,0],
            size:[112,54],
            rotation:[0,0,0],
            material:[{
                image:'./static/link/link_btn.png',
                repeat:'no-repeat',
                bothsides:false,
            }]
        })   
        btn.on('touchend',function(){
            // 点击跳转案例详情
            window.location.href = 'https://www.whalesdesign.com/column';
        })
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
            size: [429, 371],
            position: [0, -900, 0],
            rotation:[-90,0,0],
            scale: [1],
            material: [{image: './bg/logo.png', bothsides: false}]
        });
        this.stage.addChild(bgS);

        var bgB = C3D.create({
            type: 'plane',
            name:'bot',
            size: [429, 371],
            position: [0, 1500, 0],
            rotation:[90,0,0],
            scale: [1],
            material: [{image: './bg/logo.png', bothsides: false}]
        });
        this.stage.addChild(bgB);
    },

    chore:function(){
        // var aboutDre = C3D.create({
        //     type:'plane',
        //     name:'aboutDre',
        //     position:[110,98,0],
        //     rotation:[0,0.0],
        //     size:[154,44],
        //     material:[{
        //         image:'./static/about/about_dre.png',
        //         repeat:'no-repeat',
        //         bothsides:false,
        //     }],
        //     children:[]
        // });


        // var jy1 = C3D.create({
        //     type: 'sprite',
        //     name: 'jy1',
        //     position: [0, 0,0],
        //     rotation: [0,0,0],
        //     size: [166, 142],
        //     children: [
        //         {
        //             type: 'plane',
        //             name: 'info1',
        //             position: [0,0,0],
        //             scale: [2,2,2],
        //             rotation: [0,0,0],
        //             size: [119, 136],
        //         },
        //         {
        //             type: 'plane',
        //             name: 'info2',
        //             position: [258,0,0],
        //             scale: [2,2,2],
        //             rotation: [0,0,0],
        //             size: [119, 136],
        //         },
        //         {
        //             type: 'plane',
        //             name: 'info3',
        //             position: [0,302,0],
        //             scale: [2,2,2],
        //             rotation: [0,0,0],
        //             size: [119, 136],
        //         },
        //         {
        //             type: 'plane',
        //             name: 'info4',
        //             position: [258,302,0],
        //             scale: [2,2,2],
        //             rotation: [0,0,0],
        //             size: [119, 136],
        //         },
        //         {
        //             type: 'plane',
        //             name: 'info5',
        //             position: [0,604,0],
        //             scale: [2,2,2],
        //             rotation: [0,0,0],
        //             size: [119, 136],
        //         },
        //         {
        //             type: 'plane',
        //             name: 'info6',
        //             position: [258,604,0],
        //             scale: [2,2,2],
        //             rotation: [0,0,0],
        //             size: [119, 136],
        //         },
        //     ]
        // });
        //   执行动画
        //   setInterval(function () {
        //     var item = jy1.children[Math.floor(Math.random() * 6)];
        //     JT.kill(item);
        //     console.log(item)
        //     JT.fromTo(item, 1, {  scaleX: 1 }, { scaleX: 2,
        //         yoyo: false,
        //         repeat: 0,
        //         ease: JT.Sine.InOut,
        //         onUpdate:function(){
        //             this.target.update();
        //         }
        //     })
        // }, 1000 );
        // this.stage.children[1].children[0].addChild(jy1)
        // this.stage.addChild(jy1);



          // var starSky = new C3D.Sprite();
        // starSky.name('starSky').position(0, 0, 0).rotation(0, 0, 0).update();
        // var _starMax = 100;
        // // 放100个星星图案在模型上.随机位置,并将新建星星模型放入目标模型
        // for (var i = 0; i < _starMax; i++) {
        //     var _lon = model.random(0, 360);
        //     var _lat = model.random(-80, 80);
        //     var _l = model.random(1000, 3000);
        //     var _alon = _lon / 180 * Math.PI;
        //     var _alat = _lat / 180 * Math.PI;
        //     var _x = Math.cos(_alat) * _l * Math.sin(_alon);
        //     var _y = Math.sin(_alat) * _l;
        //     var _z = -Math.cos(_alat) * _l * Math.cos(_alon);

        //     var _p = new C3D.Plane();
        //     _p.size(34, 34).sort('Y','X','Z').position(_x, _y, _z).rotation(_lat, -_lon, 0).material({
        //         bothsides: false,
        //     }).update();

        //     // var _p = C3D.create({
        //     //     type: 'sprite', position: [_x, _y, _z], rotation: [0, -_lon, 0], children: [
        //     //         {
        //     //             type: 'plane', rotation: [_lat, 0, 0], size: [34, 34], material: [{
        //     //             bothsides: false,
        //     //         }]
        //     //         }
        //     //     ]
        //     // });
        //     starSky.addChild(_p);
        // }
        // this.stage.addChild(starSky);

        // // 50毫秒执行一次动画
        // setInterval(function () {
        //     var _star = starSky.children[Math.floor(Math.random() * _starMax)];
        //     JT.kill(_star);
        //     JT.fromTo(_star, 0.5, {alpha: 1}, {
        //         alpha: 0, yoyo: true, repeat: 1, onUpdate: function () {
        //             this.target.updateV();
        //         }
        //     })
        // }, 1000 / 20);


        // var actorData = [
        //     {
        //         name: 'p1', lon: 180, lat: -35,
        //         actor: {w: 161, h: 166, x: 0, y: 0, url: 'p1.png'},
        //         info: {w: 161, h: 121, x: -120, y: 60, url: 'p1t.png'}
        //     },
        //     {
        //         name: 'p2', lon: 220, lat: 30,
        //         actor: {w: 179, h: 171, x: 0, y: 0, url: 'p2.png'},
        //         info: {w: 161, h: 122, x: -120, y: 60, url: 'p2t.png'}
        //     },
        //     {
        //         name: 'p3', lon: 40, lat: 20,
        //         actor: {w: 166, h: 158, x: 0, y: 0, url: 'p3.png'},
        //         info: {w: 244, h: 186, x: 100, y: 50, url: 'p3t.png'}
        //     },
        //     {
        //         name: 'p4', lon: 140, lat: 10,
        //         actor: {w: 154, h: 163, x: 0, y: 0, url: 'p4.png'},
        //         info: {w: 201, h: 147, x: -70, y: 80, url: 'p4t.png'}
        //     },
        //     {
        //         name: 'p5', lon: 80, lat: -25,
        //         actor: {w: 152, h: 154, x: 0, y: 0, url: 'p5.png'},
        //         info: {w: 196, h: 164, x: 130, y: 50, url: 'p5t.png'}
        //     },
        //     {
        //         name: 'p6', lon: 260, lat: -30,
        //         actor: {w: 156, h: 171, x: 0, y: 0, url: 'p6.png'},
        //         info: {w: 166, h: 142, x: -70, y: 80, url: 'p6t.png'}
        //     },
        //     {
        //         name: 'p7', lon: 300, lat: 20,
        //         actor: {w: 244, h: 161, x: 0, y: 0, url: 'p7.png'},
        //         info: {w: 202, h: 126, x: 120, y: 80, url: 'p7t.png'}
        //     },
        // ];
        // var actors = new C3D.Sprite();
        // // 新建3d模型 将人物信息放入
        // actors.name('actors').position(0, 0, 0).update();
        // var _len = actorData.length;
        // $.each(actorData, function (i, obj) {
        //     var _data = obj;// 每个放置对象的信息
        //     var _lon = _data.lon;//角度经度
        //     var _lat = _data.lat;//角度纬度
        //     var _l = 800;
        //     var _alon = _lon / 180 * Math.PI;
        //     var _alat = _lat / 180 * Math.PI;
        //     var _x = Math.cos(_alat) * _l * Math.sin(_alon);
        //     var _y = Math.sin(_alat) * _l;
        //     var _z = -Math.cos(_alat) * _l * Math.cos(_alon);
        //     var _item = C3D.create({
        //         type: 'sprite',
        //         name: _data.name,
        //         position: [_x, _y, _z],
        //         rotation: [0, -_lon, 0],
        //         scale: [2],
        //         children: [
        //             {
        //                 type: 'plane',
        //                 name: 'actor',
        //                 position: [_data.actor.x, _data.actor.y, 0],
        //                 size: [_data.actor.w, _data.actor.h],
        //             },
        //             {
        //                 type: 'plane',
        //                 name: 'info',
        //                 position: [_data.info.x, _data.info.y, 10],
        //                 scale: [0, 0, 1],
        //                 size: [_data.info.w, _data.info.h],
        //                 visibility: [{alpha: 0}],
        //             },
        //         ]
        //     });

        //     JT.to(_item, 3, {
        //         y: '+=50',
        //         ease: JT.Quad.InOut,
        //         repeat: -1,
        //         yoyo: true,
        //         delay: Math.random() * 3,
        //         onUpdate: function () {
        //             this.target.updateT();
        //         }
        //     });

        //     _item.on('touchend', function () {
        //         if (Math.abs(gesture.dx) > 10 || Math.abs(gesture.dy) > 10) return;
        //         _self.trigger('item', i);
        //     });
        //     _item.r0 = _lon;
        //     _item.data = _data;

        //     actors.addChild(_item);
        // });
        // this.stage.addChild(actors);


        // // 将其他内容放入
        // var otherData = [
        //     {w: 136, h: 136, url: 'other1.png'},
        //     {w: 95, h: 104, url: 'other2.png'},
        //     {w: 111, h: 108, url: 'other3.png'},
        //     {w: 103, h: 79, url: 'other4.png'},
        //     {w: 80, h: 75, url: 'other5.png'},
        // ];
        // var others = new C3D.Sprite();
        // others.name('others').position(0, 0, 0).update();
        // var _len = otherData.length;
        // for (var i = 0, _max = 5; i < _max; i++) {
        //     var _id = i % _len;
        //     var _data = otherData[_id];
        //     var _lon = model.random(0, 360);
        //     var _lat = model.random(30, -30);
        //     var _l = 1600;
        //     var _alon = _lon / 180 * Math.PI;
        //     var _alat = _lat / 180 * Math.PI;
        //     var _x = Math.cos(_alat) * _l * Math.sin(_alon);
        //     var _y = Math.sin(_alat) * _l;
        //     var _z = -Math.cos(_alat) * _l * Math.cos(_alon);
        //     var _item = C3D.create({
        //         type: 'plane',
        //         size: [_data.w, _data.h],
        //         position: [_x, _y, _z],
        //         rotation: [0, -_lon, 0],
        //         scale: [2],
        //     });

        //     others.addChild(_item);
        // }
        // this.stage.addChild(others);


        // var home = C3D.create({
        //     type: 'plane',
        //     size: [360, 1060],
        //     position: [0, 0, -800],
        //     scale: [2],
        // });
        // this.stage.addChild(home);

        // var curve = C3D.create({
        //     type: 'plane',
        //     size: [2551, 304],
        //     position: [0, -600, -800],
        //     scale: [2],
        // });
        // this.stage.addChild(curve);
    }
});
