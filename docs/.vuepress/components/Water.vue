<template>
    <!--海浪-->
    <div class="water">
        <div class="first_text">Animation of Waves</div>
        <div class="second_text">This is the Second Blog</div>
        <div class="small_text">Don't give up and don't give in</div>
        <div class="small_text">Keep trying no matter how hard it seems. It will get easier.</div>
    </div>
</template>

<script>
    export default {
        name: 'Water',
        components: {},
        props: {},
        data() {
            return {};
        },
    }
</script>
<style>
    .content:not(.custom) {
        /*width: 100% !important;*/
        max-width: none !important;
        /*margin-right: 550px !important;*/
        padding:15px!important;
        overflow: hidden!important;
    }
</style>
<style scoped>
    .water .content:not(.custom) > *:first-child{
        margin: 0!important;
    }

    .water {
        position: relative;
        align-items: center;
        min-height: 100px;
        background: linear-gradient(to bottom, #3ec4fc, rgba(0, 151, 237, 0.76));
        overflow: hidden;
    }

    .water:before, .water:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fff;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .water:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }

    .water:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }

    @keyframes rotate {
        0% {
            transform: translate(-50%, 0) rotateZ(0deg);
        }
        50% {
            transform: translate(-50%, -2%) rotateZ(180deg);
        }
        100% {
            transform: translate(-50%, 0%) rotateZ(360deg);
        }
    }
    .first_text {
        position: relative;
        top: 100px;
        color: #333;
        z-index: 10;
        text-align: center;
        font-size: 80px;
        height: 100px;
        line-height:100px;
        text-shadow: 3px 3px 2px #999;
        overflow: hidden;
        border: none!important;
    }
    .second_text {
        position: relative;
        color: #333;
        z-index: 10;
        text-align: center;
        height: 300px;
        line-height:300px;
        font-size: 30px;
        text-shadow: 3px 3px 2px #999;
        overflow: hidden;
        border: none!important;
    }
    .small_text{
        position: relative;
        color: #333;
        z-index: 10;
        height: 30px;
        line-height:30px;
        text-align: center;
        font-size: 20px;
        text-shadow: 3px 3px 2px #999;
        overflow: hidden;
        border: none!important;
        margin-bottom: 40px;
    }
</style>
