<template>
  <div class="cakeList">
    <headNav></headNav>
    <hNav></hNav>
    <proList></proList>
  </div>
</template>


<script>
import hNav from "@/components/nav";
import headNav from "@/components/Head";
import headList from "@/views/cakeList/components/headList";
import proList from "@/views/cakeList/components/proList";

export default {
  data(){
    return {
      index:0,
    }
  },
  components: {
    hNav,
    headNav,
    headList,
    proList,
  },

};
</script>

<style  lang='less'>
// 类型列表
.headList {
  position: fixed;
  top: 6vh;
  width: 100%;
  overflow-x: scroll;
  height: 6.5vh;
  line-height: 6.5vh;
  border-bottom: 1px solid #492321;
  white-space: nowrap;
  z-index: 11;
  background-color: #fff;
  font-size: 13px;
  li {
    padding: 0 15px;
    display: inline-block;
    color: #5a3432;
    position: relative;
  }
  .bot{
    color: #8b413b;
    font-weight: 600;
  }
  .bot::after {
    content: "";
    position: absolute;
    height: 3px;
    background: #492321;
    width: 100%;
    left: 0;
    bottom: 0;
  }
}

// 商品列表
.cakeList {
  width: 100vw;
  height: 100vh;
}

.proList {
  margin-top: 13vh;
  width: 100%;
  .van-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      position: relative;
      margin-bottom: 10px ;
      div {
        img {
          width: 100%;
        }
      }
      p {
        padding-left: 10px;
        font-size: 12px;
      }
      .name {
        color: #492321;
        line-height: 20px;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: "Microsoft YaHei,微软雅黑", Helvetica, Arial, sans-serif;
      }
      .price,
      .size {
        line-height: 15px;
        width: 85%;
        word-break: break-all;
        display: inline-block;
        color: #bba080;
        font-size: 11px;
        font-family: " Microsoft YaHei,微软雅黑", Helvetica, Arial, sans-serif;
      }
      .addCar {
        padding: 5px 0 5px 20px;
        position: absolute;
        right: 0;
        bottom: 0;
        padding-right: 10px;
        img {
          height: 30px;
        }
      }
    }
  }
}
.noMore{
  padding: 30px 0;
  height: 10px;
  width: 100%;
  text-align: center;
  color: #bba080;
}
</style>