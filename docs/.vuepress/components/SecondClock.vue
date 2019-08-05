<template>
    <div class="clock">
        <!--时钟-->
        <canvas id="canvasTime" width="200" height="200"></canvas>
    </div>
</template>
<script>

    export default {
        data () {
            return {
            }
        },
        methods: {

        },
        mounted () {
            //是时钟
            var canvas = document.getElementById('canvasTime');
            var cxt = canvas.getContext('2d');
            var width = canvas.width;
            var height = canvas.height;
            var r = width / 2;

            function drawBg() {
                //重置原点
                cxt.save();
                cxt.translate(r, r);

                // 画时钟外圈
                cxt.beginPath();
                cxt.arc(0, 0, r - 5, 0, 2 * Math.PI, true);
                cxt.lineWidth = 2;//表盘宽度
                cxt.stroke();

                //画小时数
                var hour = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

                hour.forEach(function (num, i) {
                    var rad = 2 * Math.PI / 12 * i;
                    var x = Math.cos(rad) * (r - 14);//数字到外表盘到距离
                    var y = Math.sin(rad) * (r - 14);//数字到外表盘到距离
                    cxt.font = "11px sans-serif"
                    cxt.textAlign = "center";
                    cxt.textBaseline = "middle";
                    cxt.fillText(num, x, y);
                });

                // 画刻度
                for (var i = 0; i < 60; i++) {
                    var rad = 2 * Math.PI / 60 * i;
                    var x = Math.cos(rad) * (r - 22);//刻度到数字之间的距离
                    var y = Math.sin(rad) * (r - 22);

                    cxt.beginPath();
                    if (i % 5 == 0) {
                        cxt.fillStyle = "#000";
                        cxt.arc(x, y, 2, 0, 2 * Math.PI, true);
                    }
                    else {
                        cxt.fillStyle = "#bbb";
                        cxt.arc(x, y, 2, 0, 2 * Math.PI, true);
                    }
                    cxt.fill();
                }
            }

            // 画时针
            function drawHour(hour, minute) {
                cxt.save();
                var rad = 2 * Math.PI / 12 * hour + 2 * Math.PI / 12 * minute / 60;
                cxt.beginPath();
                cxt.rotate(rad);
                cxt.moveTo(0, 5);  //时针后面的长度
                cxt.lineTo(0, -r / 2.5);//时针前面的长度
                cxt.lineWidth = 2;
                cxt.lineCap = "round";
                cxt.stroke();
                cxt.restore();
            }

            // 画分针
            function drawMinute(minute) {
                cxt.save();
                var rad = 2 * Math.PI / 60 * minute;
                cxt.beginPath();
                cxt.rotate(rad);
                cxt.moveTo(0, 5);
                cxt.lineTo(0, -r + 30);
                cxt.lineWidth = 1;
                cxt.lineCap = "round";
                cxt.stroke();
                cxt.restore();
            }

            // 画秒针
            function drawSecond(second) {
                cxt.save();
                var rad = 2 * Math.PI / 60 * second;
                cxt.beginPath();
                cxt.rotate(rad);
                cxt.moveTo(0, 5);
                cxt.lineTo(2, 5);
                cxt.lineTo(-2,5);
                cxt.lineTo(-1, -r + 25);
                cxt.lineTo(1, -r + 35);
                cxt.lineTo(2, 15);
                cxt.lineWidth = 1;
                cxt.fillStyle = "#f00";
                cxt.fill();
                cxt.restore();
            }

            // 画中心点
            function drawDot() {
                cxt.beginPath();
                cxt.arc(0, 0, 4, 0, 2 * Math.PI, true);
                cxt.fillStyle = "#fff";
                cxt.fill();
            }

            // 绘制真实时间
            function draw() {
                cxt.clearRect(0, 0, width, height);
                var now = new Date();
                var hour = now.getHours();
                var minute = now.getMinutes();
                var second = now.getSeconds();
                drawBg();
                drawHour(hour, minute);
                drawMinute(minute);
                drawSecond(second);
                drawDot();
                cxt.restore();
            }

            draw();
            setInterval(function () {
                draw();
            }, 1000);
        },
        beforeDestroy () {
        }
    }
</script>
<style scoped>
    .clock #canvas {
        border: 1px solid #000;
        margin: 0 auto;
        display: block;
    }
</style>
