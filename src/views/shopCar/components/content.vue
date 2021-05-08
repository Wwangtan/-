<template>
    <div class="content">
        <p>{{text}}</p>
    </div>
</template>


<script>
export default {
    data(){
        return {
            text:'暂无订单',
        }
    },

}
</script>

<style lang='less'>
.content{
    position: relative;
    top: 8vh ;
    height: 200px;
    p{
        color: #a36663;
        text-align: center;
        font-size: 12px;
    }
}
</style>
