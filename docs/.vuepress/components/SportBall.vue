<template>
    <!--运动小球-->
    <div class="sportBall">
        <div class="font-topBox">
            <div class="font-extract">
                <!--A Ball-->
                <div class="font-square-icon">
                    <div class="square square-top"></div>
                    <div class="square square-left"></div>
                    <div class="square square-right"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SportBall',
        components: {},
        props: {},
        data() {
            return {};
        },
    }
</script>
<style>
    .content:not(.custom) {
        max-width: none !important;
        padding: 15px !important;
        overflow: hidden !important;
        /*width: 100% !important;*/
        /*margin-right: 550px !important;*/
    }
</style>
<style scoped>
    /*pods 鼠标滑动三个小球沿轨迹运动*/

    .font-topBox {
        width: 88px;
        margin-left: 45%;
    }
    .font-extract {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        color: #777777;
    }


    .font-extract:hover {
        color: #F0880F;
    }

    .font-square-icon {
        background: url('../../.vuepress/dist/img/sportBall/btn_extract.svg') no-repeat center;
    }

    .square {
        background: url('../../.vuepress/dist/img/sportBall/btn_zhengfangxing.svg') no-repeat;
        background-size: 3.5px 3.5px;
    }

    .square-right {
        animation: square-right-animation 2s infinite ease;
    }

    .square-left {
        animation: square-left-animation 2s infinite ease;
    }

    .square-top {
        animation: square-top-animation 2s infinite ease;
    }

    .font-square-icon {
        position: relative;
        left: 2px;
        top: 0;
        width: 24px;
        height: 25px;
        background: url('../../.vuepress/dist/img/sportBall/btn_default_extract.svg') no-repeat center;
        background-size: 24px 25px;
    }

    .square {
        position: absolute;
        z-index: 10;
        width: 3.5px;
        height: 3.5px;
    }

    .square-top {
        top: 8px;
        left: 47%;
    }

    .square-left {
        left: 32%;
        bottom: 36%;
    }

    .square-right {
        right: 29%;
        bottom: 36%;
    }


    .font-extract .font-square-icon.btn-square-active {
        background: url('../../.vuepress/dist/img/sportBall/btn_extract.svg') no-repeat center !important;
    }

    .square {
        background: url('../../.vuepress/dist/img/sportBall/btn_zhengfangxing.svg') no-repeat !important;
        background-size: 3.5px 3.5px !important;
    }


    .square-top {
        animation: square-top-animation 2s infinite ease;
    }

    .square-left {
        animation: square-left-animation 2s infinite ease;
    }

    .square-right {
        animation: square-right-animation 2s infinite ease;
    }

    .font-intelligence .btn-bg {
        animation: zhineng 3s linear infinite;
        background-image: url("../../.vuepress/dist/img/sportBall/btn_zhineng_bg.svg") !important;
    }

    .my-el-btn {
        background-image: url("../../.vuepress/dist/img/sportBall/btn_zhineng.svg");
        display: inline-block;
        width: 17px;
        height: 19px;
        margin-bottom: 4px;
    }

    @keyframes square-top-animation {
        0% {
            transform: scale(1);
        }
        50% {
            transform: translateY(-150%) scale(1.4);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes square-left-animation {
        0% {
            transform: scale(1);
        }
        50% {
            transform: translateX(-150%) translateY(75%) scale(1.4);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes square-right-animation {
        0% {
            transform: scale(1);
        }
        50% {
            transform: translateX(180%) translateY(90%) scale(1.4);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes zhineng {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

</style>
