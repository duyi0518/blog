<template>
    <div class="homePeople">
        <div>
            <canvas id="canvas"></canvas>
            <canvas id="fCanvas"></canvas>
            <canvas id="bCanvas"></canvas>
            <div id="indexEarth"></div>
            <div class="bg_earthBig">
                <img src="../../.vuepress/public/img/earthBig.png" class="earthImg">
            </div>
        </div>

        <div class="textCenter">
            <div class="text findPswd"
                 v-for="(item ,index) in moreUrls" :key="index"
                 @click="handleClick(index)"
            >{{item.text}}</div>
        </div>


        <!--流星-->
        <div class="star"></div>
        <div class="star pink"></div>
        <div class="star blue"></div>

        <!--阳光-->
        <div class="source"></div>
        <div class="source-beam"></div>
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
        <div class="c5"></div>
        <div class="c6"></div>
        <div class="c7"></div>
        <div class="c8"></div>
        <div class="c9"></div>
        <div class="c10"></div>
        <div class="c11"></div>
        <div class="c12"></div>
    </div>
</template>

<script>
    import Stats from "../../.vuepress/public/js/stats.js"
    // import "../../.vuepress/public/js/liuxing.js"
    export default {
        data() {
            return {
                moreUrls: [{text: 'Zenki-官网'}, {text: 'SSO-单点登录'},
                    {text: 'LB-域名负载系统'}, {text: 'PMS-权限角色系统'},
                    {text: 'T-HR-人力资源系统'}, {text: 'DOLPHIN-项目部署系统'},
                    {text: 'HUSKY-哈士奇系统'}]
            };
        },
        created() {

        },
        mounted() {
            // particlesJS.load('particles-js', '../../../static/data/particles.json', function () {
            // })
            let stats = Stats;
            //   stats.showPanel(1);
            document.body.appendChild(stats.dom);

            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");
            let cw = (canvas.width = 400),
                cx = cw / 2;
            let ch = (canvas.height = 400),
                cy = ch / 2;

            let m = {
                x: 0,
                y: 0
            };
            let target = {
                x: 0,
                y: 0
            };
            let speed = 0.002;
            let easing = .01;

            let frames = 0;

            let balls = [];
            let vp = {
                x: cx,
                y: cy
            }; //vanishing point
            let fl = 250; // focal length

            function Ball(R) {

                this.R = R;
                this.r = .04 * this.R;

                // 3D position
                this.pos = spherePointPicking(this.R);

                // 2D position
                this.x = this.pos.x + cx;
                this.y = this.pos.y + cy;
                this.a = {
                    x: 0,
                    y: 0
                };
                this.scale = {
                    x: 1,
                    y: 1
                };
                this.c = oGrd(this.r / 6, 200); // 小粒子大小  颜色

                this.rotateX = function (angle) {
                    let cos = Math.cos(angle);
                    let sin = Math.sin(angle);
                    let y1 = this.pos.y * cos - this.pos.z * sin;
                    let z1 = this.pos.z * cos + this.pos.y * sin;

                    this.pos.y = y1;
                    this.pos.z = z1;
                };

                this.rotateY = function (angle) {
                    let cos = Math.cos(angle);
                    let sin = Math.sin(angle);
                    let x1 = this.pos.x * cos - this.pos.z * sin;
                    let z1 = this.pos.z * cos + this.pos.x * sin;

                    this.pos.x = x1;
                    this.pos.z = z1;
                };

                this.draw3D = function () {
                    if (this.pos.z > -fl) {
                        let scale = fl / (fl - this.pos.z);

                        this.scale = {
                            x: scale,
                            y: scale
                        };
                        this.x = vp.x + this.pos.x * scale;
                        this.y = vp.y + this.pos.y * scale;
                        this.visible = true;
                    } else {
                        this.visible = false;
                    }
                };

                this.draw2D = function () {
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.scale(this.scale.x, this.scale.y);
                    ctx.beginPath();
                    ctx.fillStyle = this.c;
                    ctx.fillRect(0, 0, this.r, this.r);
                    ctx.restore();
                };
            }

            let d = 1500;
            for (let i = 0, d = 1500; i < d; i += 1) {
                balls.push(new Ball(150));
            }

            function Draw() {
                let t = '';
                let requestId = '';
                // t = new Date().getTime() / 127;

                stats.begin();

                ctx.clearRect(0, 0, cw, ch);

                frames += .1;
                // t = new Date().getTime() / 127;
                // m.x = cx + Math.cos(t / 43 + Math.cos(t / 47 + frames)) * 8;
                // m.y = cy + Math.sin(t / 31 + Math.cos(t / 37 + frames)) * 8;

                // target.x = (m.y - vp.y) * speed;
                // target.y = (m.x - vp.x) * speed;
                target.y = (vp.x) * speed;

                balls.map(function (b) {
                    b.draw3D();
                });
                balls.sort(function (a, b) {
                    return a.pos.z - b.pos.z;
                });

                target.x *= easing;
                target.y *= easing;

                balls.map(function (b) {
                    b.rotateX(target.x);
                    b.rotateY(target.y);
                    if (b.visible) {
                        b.draw2D();
                    }
                });

                stats.end();
                requestId = window.requestAnimationFrame(Draw);
            }

            Draw();

            function oGrd(r, h) {
                let grd = '';
                grd = ctx.createRadialGradient(r, r, 0, r, r, r);

                grd.addColorStop(0, "hsla(" + h + ",95%,95%, 1)");
                grd.addColorStop(0.5, "hsla(" + h + ",95%,45%, .5)");
                grd.addColorStop(1, "hsla(" + h + ", 95%, 45%, 0)");
                return grd;
            }

            function spherePointPicking(R) {
                //How to generate random points on a sphere:
                //https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere#1586185
                let u1 = Math.random();
                let u2 = Math.random();
                let s = Math.acos(2 * u1 - 1) - Math.PI / 2;
                let t = 2 * Math.PI * u2;
                return {
                    x: R * Math.cos(s) * Math.cos(t),
                    y: R * Math.cos(s) * Math.sin(t),
                    z: R * Math.sin(s)
                }
            }
        },
        methods: {
            handleClick(index){
                if(index===0){
                    window.open('http://shuhu.zenki.cn/')
                }else if(index===1){
                    window.open('https://sso.zenki.cn/homePeo')
                }else if(index===2){
                    window.open('https://lb.zenki.cn/homeAdmin/domainAdmin')
                }else if(index===3){
                    window.open('https://pms.zenki.cn/homeAdmin/personnel')
                }else if(index===4){
                    window.open('https://t-hr.zenki.cn/homeAdmin/personnelAdmin')
                }else if(index===5){
                    window.open('https://dolphin.zenki.cn/homeAdmin/defaultPage')
                }else if(index===6){
                    window.open('https://huskyweb.zenki.cn/')
                }
            }
        }
    }
</script>
<style>
    /*流星*/
    .star {
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #FFF;
        top: 100px;
        left: 500px;
        position: relative;
        transform-origin: 100% 0;
        animation: star-ani 4s linear infinite;
        -webkit-animation: star-ani 5s linear infinite;
        box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
        opacity: 0;
        z-index: 2;
    }

    .star:after {
        content: '';
        display: block;
        top: 0px;
        left: 4px;
        border: 0px solid #fff;
        border-width: 0px 90px 2px 90px;
        border-color: transparent transparent transparent rgba(255, 255, 255, .3);
        transform: rotate(-45deg) translate3d(1px, 3px, 0);
        box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
        transform-origin: 0% 100%;
    }

    .pink {
        top: 100px;
        left: 800px;
        background: #fff;
        animation-delay: 3s;
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
    }

    .pink:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 3s;
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
    }

    .blue {
        top: 120px;
        left: 1200px;
        background: #ffffff;
        animation-delay: 7s;
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
    }

    .blue:after {
        border-color: transparent transparent transparent #ffff;
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
        animation-delay: 7s;
    }

    @keyframes star-ani {
        0% {
            opacity: 0;
            transform: scale(0) translate3d(0, 0, 0);
        }
        20% {
            opacity: 0.8;
            transform: scale(0.2) translate3d(-100px, 100px, 0);
        }
        40% {
            opacity: 0.8;
            transform: scale(0.4) translate3d(-200px, 200px, 0);
        }
        60% {
            opacity: 0.8;
            transform: scale(0.6) translate3d(-300px, 300px, 0);
        }
        80% {
            opacity: 1;
            transform: scale(1) translate3d(-350px, 350px, 0);
        }
        100% {
            opacity: 1;
            transform: scale(1.2) translate3d(-400px, 380px, 0);
        }
    }

    /**/

    .content:not(.custom) {
        /*width: 100% !important;*/
        max-width: none !important;
        /*margin-right: 550px !important;*/
        padding: 15px !important;
        overflow: hidden !important;
    }
</style>
<style scoped>
    .textCenter {
        position: absolute;
        top: 40%;
        left: 12%;
        z-index: 999;
        display: flex;
        flex-direction: row;
        width: 800px;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .text {
        color: white;
        font-size: 10px;
        font-weight: bolder;
        /*width: 100px;*/
        margin: 0 10px 20px 10px;
        cursor: pointer;
    }

    .findPswd {
        width: 150px;
        padding: 5px 8px;
        text-align: center;
        font-size: 10px;
        mso-border-shadow: yes;
        height: 40px;
        line-height: 40px;
        border-style: solid;
        border-radius: 8px;
        border-color: #00c2fa;
        box-shadow: 0 0 10px #00c2fa;
        /*color: #00bbf1;*/
        background: linear-gradient(to right, #ffffff, #00bbf1);
        -webkit-background-clip: text;
        color: transparent;
    }

    .findPswd:hover {
        border-style: solid !important;
        border-color: #00c2fa !important;
        box-shadow: 0 0 60px #00c2fa !important;
        background: linear-gradient(to right, rgba(235, 235, 0, 0.97), #ffff00);
        -webkit-background-clip: text;
        color: transparent;
        text-shadow: 1px 1px 8px rgba(255, 249, 234, 0.98);
        /*color: #fff9ea !important;*/
    }

    .earthImg {
        width: 30%;
        height: 30%;
    }

    .homePeople {
        background-color: black;
        width: 100%;
        height: 600px;
        position: relative;
    }

    .homePeople #canvas {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        opacity: 1;
        display: block;
        z-index: 1;
        position: absolute;
        top: 150px;
        right: 8%;
        /*left: 1110px;*/
    }

    .homePeople #fCanvas, #bCanvas {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

    .homePeople #indexEarth {
        width: 250px;
        height: 250px;
        background: url(../../.vuepress/public/img/indexEarth.png);
        background-size: 100%;
        overflow: hidden;
        opacity: 1;
        position: absolute;
        z-index: 2;
        right: 13%;
        /*left: 1180px;*/
        top: 230px;
    }

    /* 页面光晕效果 */
    .source {
        overflow: hidden;
        position: absolute;
        background: radial-gradient(#fff 0%, rgba(243, 206, 205, .4) 35%, rgba(88, 88, 88, .3) 60%, rgba(0, 0, 0, 0) 70%);
        border-radius: 50%;
        width: 200px;
        height: 200px;
        margin-left: -400px;
        top: 23%;
        left: 54%;
        z-index: 2;
    }

    .source-beam {
        overflow: hidden;
        position: absolute;
        background: radial-gradient(rgba(255, 255, 255, .3) 0%, rgba(0, 0, 0, 0) 70%);
        border-radius: 50%;
        width: 2200px;
        height: 28px;
        margin-top: -14px;
        margin-left: -1100px;
        top: 5%;
        left: 5%;
        z-index: 1;
    }

    .c1 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(189, 91, 87, 0) 40%, rgba(189, 91, 87, 0.5) 45%, rgba(189, 91, 87, 0) 50%, rgba(189, 91, 87, 0) 100%);
        border-radius: 50%;
        width: 400px;
        height: 400px;
        margin-top: -200px;
        margin-left: -200px;
        top: 5%;
        left: 5%;
        z-index: 3;
    }

    .c2 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(162, 196, 134, 0) 20%, rgba(162, 196, 134, 0.3) 43%, rgba(67, 85, 52, 0) 50%, rgba(67, 85, 52, 0) 100%);
        border-radius: 50%;
        width: 300px;
        height: 300px;
        margin-top: -150px;
        margin-left: -150px;
        top: 3%;
        left: 3%;
        z-index: 4;
    }

    .c3 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(31, 99, 255, .1) 1%, rgba(31, 99, 255, .13) 100%);
        border-radius: 50%;
        width: 160px;
        height: 160px;
        margin-top: -80px;
        margin-left: -80px;
        top: 35%;
        left: 38%;
        z-index: 1;
    }

    .c4 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(31, 99, 255, .1) 1%, rgba(31, 99, 255, .13) 100%);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-top: -25px;
        margin-left: -25px;
        top: 44%;
        left: 44%;
        z-index: 9;
    }

    .c5 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(31, 99, 255, .1) 1%, rgba(31, 99, 255, .13) 100%);
        border-radius: 50%;
        width: 88px;
        height: 88px;
        margin-top: -44px;
        margin-left: -44px;
        top: 35%;
        left: 38%;
        z-index: 9;
    }

    .c6 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(73, 168, 199, .15) 10%, rgba(100, 145, 42, .20) 30%, rgba(100, 145, 42, .2) 60%, rgba(0, 0, 0, 0) 65%);
        border-radius: 50%;
        width: 88px;
        height: 88px;
        margin-top: -44px;
        margin-left: -44px;
        top: 60%;
        left: 60%;
        z-index: 2;
    }

    .c7 {
        position: absolute;
        background: radial-gradient(rgba(255, 225, 255, .9) 10%, rgba(137, 255, 220, .4) 30%, rgba(0, 0, 0, 0) 60%);
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin-top: -8px;
        margin-left: -8px;
        top: 62%;
        left: 62%;
        z-index: 2;
    }

    .c8 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(255, 129, 57, .15) 10%, rgba(187, 129, 57, .20) 50%, rgba(255, 129, 57, .2) 60%, rgba(0, 0, 0, 0) 65%);
        border-radius: 50%;
        width: 190px;
        height: 190px;
        margin-top: -95px;
        margin-left: -95px;
        top: 71%;
        left: 71%;
        z-index: 10;
    }

    .c9 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(0, 0, 0, .15) 1%, rgba(255, 129, 57, .2) 100%);
        border-radius: 50%;
        width: 104px;
        height: 104px;
        margin-top: -52px;
        margin-left: -52px;
        top: 70%;
        left: 70%;
        z-index: 11;
    }

    .c10 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(0, 0, 0, .15) 1%, rgba(255, 129, 57, .2) 100%);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin-top: -30px;
        margin-left: -30px;
        top: 72%;
        left: 72%;
        z-index: 12;
    }

    .c11 {
        position: absolute;
        background: radial-gradient(rgba(255, 225, 255, .9) 10%, rgba(137, 255, 220, .4) 30%, rgba(0, 0, 0, 0) 60%);
        border-radius: 50%;
        width: 22px;
        height: 22px;
        margin-top: -11px;
        margin-left: -11px;
        top: 75%;
        left: 75%;
        z-index: 13;
    }

    .c12 {
        position: absolute;
        background: radial-gradient(ellipse at center, rgba(73, 168, 199, .15) 10%, rgba(100, 145, 42, .20) 30%, rgba(100, 145, 42, .2) 60%, rgba(0, 0, 0, 0) 65%);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin-top: -40px;
        margin-left: -40px;
        top: 78%;
        left: 78%;
        z-index: 14;
    }

</style>
