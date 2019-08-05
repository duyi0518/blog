<template>
    <!--机器人-->
    <div class="robot-notice" @click="showRobotDialog">
        <div class="robot-img" :class="current_class"></div>
        <div class="robot-text">It's a beautiful day！</div>
    </div>

</template>

<script>
    export default {
        name: 'Robot',
        components: {},
        props: {},
        data() {
            return {
                loop_count: 1,
                current_class: ['robot-img-1'],
                class_list:[
                    'robot-img-1',
                    'robot-img-2',
                    'robot-img-3',
                    'robot-img-4',
                    'robot-img-5',
                    'robot-img-4',
                    'robot-img-3',
                    'robot-img-2',
                ],
            }
        },
        mounted() {
            this.animation();
        },
        methods: {
            showRobotDialog() {

            },
            animation() {
                this.current_class = [this.class_list[this.loop_count % this.class_list.length]];
                setTimeout(() => {
                    this.loop_count++;
                    this.animation();
                }, 150);
            },
        }

    }
</script>
<style scoped>
    .robot-notice {
        position: absolute;
        top: 35%;
        /*left: 8px;*/
        height: 40px;
        cursor: pointer;
        z-index: 999!important;
    }

    .robot-img {
        height: 40px;
        width: 40px;
        background: url(../../.vuepress/public/img/robot1.svg);
    }

    .robot-img-1 {
        background: url(../../.vuepress/public/img/robot1.svg);
    }

    .robot-img-2 {
        background: url(../../.vuepress/public/img/robot2.svg);
    }

    .robot-img-3 {
        background: url(../../.vuepress/public/img/robot3.svg);
    }

    .robot-img-4 {
        background: url(../../.vuepress/public/img/robot4.svg);
    }

    .robot-img-5 {
        background: url(../../.vuepress/public/img/robot5.svg);
    }

    .robot-text {
        position: absolute;
        top: 8px;
        left: 36px;
        width: 134px;
        height: 24px;
        border: 1px solid #1890FF;
        border-left: none;
        border-radius:0px 3px 3px 0px;
        line-height: 24px;
        font-size: 12px;
        color: #1890FF;
        text-align: center;
    }

    .robot-notice:hover .robot-text {
        color: #597EF7;
        border-color: #597EF7;
    }

</style>
