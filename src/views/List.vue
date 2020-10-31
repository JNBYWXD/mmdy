<!--  -->
<template>
<div class='list'>
<h3>{{name}}</h3>
<van-card v-for="item in list"
:key="item.albumId"
  price="39.00"
  :desc="item.focus"
  :title="item.title"
  :thumb="item.imageUrl"
  :thumb-link="'/#/detail?id=' + item._id"
/>
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
list:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    wan(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=1&ret_num=48").then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)  
    })
    },
     tu(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&data_type=1&mode=24&page_id=1&ret_num=48").then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     three(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=3&data_type=1&mode=24&page_id=1&ret_num=48").then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     four(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=8&data_type=1&mode=24&page_id=1&ret_num=48").then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     five(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=6&data_type=1&mode=24&page_id=1&ret_num=48").then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
    },
     six(){
      axios.get("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48").then((res)=>{
      console.log(res.data.data.list)
      this.list=res.data.data.list
      console.log(this.list)    
    })
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
h3{
    text-align: center;
    color: red;
}

</style>
