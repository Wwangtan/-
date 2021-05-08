<template>
  <div class="userlist" >
    <h1>用户列表</h1>
    <ul>
        <li v-for="(item,index) in userlist" @click="chooseuser(index)" :key="'userList'+index">
            <img :src="item.headerImg" >
            <h3>{{item.username}}</h3>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:["userlist"],
    methods: {
        chooseuser:function(index){
            // 将触发的元素的索引值给到父元素，修改其内容
            this.$emit('chooseuser',index)
        },
    }
}
</script>

<style scoped>
h1{
    text-align:center;
}
    .userlist {
        width: 300px;
        height: 700px;
        background: skyblue;
    }
    .userlist ul li{
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 1px 0;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    .userlist ul li img{
        widows: 80px;
        height: 80px;
    }

</style>