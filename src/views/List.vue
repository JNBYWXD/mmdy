<!--  -->
<template>
<div class='list'>
<van-nav-bar
  :title="name"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- <div class="top">
<van-icon name="arrow-left" @click="go" />
<h3>{{name}}</h3>
</div> -->

<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-card v-for="item in list"
:key="item.albumId"
  price="39.00"
  :desc="item.focus"
  :title="item.title"
  :thumb="item.imageUrl"
/>
</van-list>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios"
export default {
//import引入的组件需要注入到对象中才能使用
name:"List",
components: {},
data() {
//这里存放数据
return {
index:"",
name:"",
unm:20,
list:[],
loading: false,
finished: false,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    wan(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=1&ret_num="+this.unm).then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)  
    })
    },
     tu(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&data_type=1&mode=24&page_id=1&ret_num="+this.unm).then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     three(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=3&data_type=1&mode=24&page_id=1&ret_num="+this.unm).then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     four(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=8&data_type=1&mode=24&page_id=1&ret_num="+this.unm).then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     five(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=6&data_type=1&mode=24&page_id=1&ret_num="+this.unm).then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     six(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num="+this.unm).then((res)=>{
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
    onClickLeft(){
        window.history.go(-1)
    },
     /* onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
          console.log(1)
      this.unm+=40
        this.six()

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 400) {
          this.finished = true;
        }
      }, 2000);
     }, */
      onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
     
          setTimeout(() => {
        this.unm+=20
       if(this.index==0){
        this.wan()
    }
     if(this.index==1){
        this.tu()
    }
     if(this.index==2){
        this.three()
    }
     if(this.index==3){
        this.four()
    }
     if(this.index==4){
        this.five()
    }
     if(this.index==5){
        this.six()
        console.log(1)
    }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 400) {
          this.finished = true;
        }
      }, 1000);
      
      
    },
  },

//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.index=this.$route.query.id
    this.name=this.$route.query.name
    console.log(this.index,this.name)
    if(this.index==0){
        this.wan()
    }
     if(this.index==1){
        this.tu()
    }
     if(this.index==2){
        this.three()
    }
     if(this.index==3){
        this.four()
    }
     if(this.index==4){
        this.five()
    }
     if(this.index==5){
        this.six()
        console.log(1)
    }
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.list{
    padding-top: 46px;
}
.top{
    display: flex;
    align-items: center;
}
h3{
    color: red;
    width: 56%;
}
.van-icon{
    flex: 1;
    font-size: 30px;

}
.van-nav-bar{
    width: 100%;
    position: fixed;
    top: 0;
}
</style>
