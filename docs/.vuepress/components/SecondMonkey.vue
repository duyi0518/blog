<template>
    <!--猴子-->
    <div class="monkey">
        <div class="monkeyColor">
            <div class="textChange" ref="textChange">🐒🐒🐒🐒🐒🐒</div>
        </div>
        <div class="textImg">
            <img src="../../.vuepress/public/img/wukong.png" alt class="monkeyImg">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created(){

        },
        mounted() {
            this.change();
        },
        methods: {
            change() {
                this.$nextTick(()=>{
                    // let a = document.getElementsByClassName("textChange")[0];
                    let a = this.$refs.textChange;
                    // window.location.reload(true);  刷新页面
                    let array = ["🐷🐷🐷🐷🐷🐷🐷", "🐶🐶🐶🐶🐶🐶🐶", "🐱🐱🐱🐱🐱🐱🐱",'🐼🐼🐼🐼🐼🐼🐼'],
                        index = -1;
                    window.onload = function () {
                        setInterval(() => {
                            index++;
                            index = index > array.length - 1 ? 0 : index;
                            a.innerHTML = array[index];
                        }, 2000);
                    };
                })

            },
        },
        beforeDestroy() {
        }
    }
</script>
<style scoped>
    .monkey {
        position: fixed;
        bottom: 400px;
        right: 60px;
        animation: myfirst 4s linear infinite;
        -moz-animation: myfirst 4s linear infinite; /* Firefox */
        -webkit-animation: myfirst 4s linear infinite; /* Safari 和 Chrome */
        -o-animation: myfirst 4s linear infinite; /* Opera */
    }

    .monkeyColor {
        width: 140px;
        height: 30px;
        border-radius: 9px;
        opacity: 0.9;
        animation: colorfirst 8s linear infinite;
    }

    .textChange {
        padding: 0px 10px;
        height: 30px;
        line-height: 30px;
        color: yellow;
        font-weight: bolder;
        font-size: 13px
    }

    .textImg {
        width: 90px;
        height: 90px;
    }

    .monkeyImg {
        width: 100%;
        height: 100%;
    }


    @keyframes colorfirst {
        0% {
            background: red;
        }
        25% {
            background: yellow;
        }
        50% {
            background: blue;
        }
        75% {
            background: green;
        }
        100% {
            background: red;
        }
    }

    @keyframes myfirst {
        0% {
            /*background: red;*/
            top: 100px;
        }
        25% {
            /*background: yellow;*/
            top: 130px;
        }
        50% {
            /*background: blue;*/
            top: 160px;
        }
        75% {
            /*background: green;*/
            top: 130px;
        }
        100% {
            /*background: red;*/
            top: 100px;
        }
    }
</style>
