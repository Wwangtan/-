<template>
    <div class="info">
        <div class="msg">
        <p>客服中心：<b>{{phone}}</b></p>
        <p>{{address}}</p>
        <p>渝ICP备13001878号-3</p>
        <p>COPYRIGHT©2013-2022 Kissmilan 版权所有</p>
        <p>技术支持：迈小步科技</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            phone:'4001-023-866',
            address:'重庆市江北区北滨一路456号S1栋四层商业3号商铺',
        }
    }
}
</script>

<style scoped lang='less'>
.info{
    padding-bottom:80px;
    text-align: center;
    font-size: 2vw;
    font-family: '微软雅黑';
    .msg{
        color: #8f5451;
        p{
        padding:2px 0;
        b{
            font-weight: normal;
        }
    }
    }
}
</style>