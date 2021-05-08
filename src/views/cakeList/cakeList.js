import { Toast } from "vant";
import Vue from "vue";
import { List, Cell } from "vant";
import { PullRefresh } from "vant";

Vue.use(PullRefresh);
Vue.use(List).use(Cell);

export const onLoad = function() {
    setTimeout(() => {
        if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
            this.list.push(this.proInfo);
        }
        this.loading = false;

        if (this.list.length >= 40) {
            this.finished = true;
        }
    }, 1000);
}

export const onRefresh = function() {
    setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
    }, 1000);
    // 清空列表数据
    this.finished = false;
    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
    this.loading = true;
    this.onLoad();
}

export const addEvent = function(item) {
    // 将添加到购物车的内容加到数组中去
    this.$store.state.proCount += 1
        // 调用仓库的去重方法判断增加list 数量
    this.$store.commit('carProListAdd', item)
}

export const goInfo = function(item) {
    this.$router.push({ name: 'proInfo', params: { item: item } })
}