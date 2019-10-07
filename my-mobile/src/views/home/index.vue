 <template>
  <div class="home">
    <van-nav-bar title="首页" />
    <!-- tab 标签页 -->
    <van-tabs v-model="tabActive" @change="onTabChange">
      <!-- tab 栏 -->
      <van-tab v-for="(item, index) in channelList" :key="index" :title="item.name">
        <!-- tab 内容 下拉刷新 -->
        <van-pull-refresh v-model="pullLoading" @refresh="onRefresh">
          <!-- 列表 -->
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="(item, index) in channelDetail" :key="index" :title="item.title" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>
 
 <script>
// 导入获取频道列表的请求方法
import { getChannel } from "../../app/channels.js";
// 导入获取频道详情(频道新闻推荐)
import { getArticleList } from '../../app/articles.js'

export default {
  name: "home",
  data() {
    return {
      //tabs绑定的下标,默认是第一个0
      tabActive: 0,
      //tabs频道的项
      channelList: [],
      //下拉刷新, 完成时false
      pullLoading: false,
      loading: false,
      finished: false,
      // 每个频道项的内容详情
      channelDetail: []
    };
  },

  methods: {
    //封装获取频道详情的方法
    async articleDetail(){
         // 当前频道的id
        let channel_id = this.channelList[this.tabActive].id
        // 当前时间
        let timestamp = Date.now() 
        let with_top = 1
        // 发送请求 
        let res = await getArticleList({
            channel_id,
            timestamp,
            with_top
        })
        // 当数据加载完时,设置finished为true
        if (res.data.data.results.length == 0) {
           this.finished = true 
        }
        console.log(res)
        return res
    },
    //下拉刷新触发事件
    async onRefresh() {
       let res = await this.articleDetail()
       //从上往下添加数据
       this.channelDetail.unshift(...res.data.data.results)
       this.pullLoading = false   // 加载完成 
    },

    // 值改变事件
    async onTabChange(name, title){
       let res = await this.articleDetail()
       this.channelDetail = res.data.data.results 
    },

    // 格子没有铺满就会调用这个事件
     async onLoad(){
        let res = await this.articleDetail()
        //把数据追加到列表里面去(数组展开)
        this.channelDetail.push(...res.data.data.results)
        //数据更新完把loading改为false
        this.loading = false
      }
  },

  //页面一打开就要获取频道信息
  async created() {
    let res = await getChannel();
    this.channelList = res.data.data.channels;
  }
};
</script>
 
 <style lang="less" scoped>
.home {
  margin-top: 46px;
}
</style>
 