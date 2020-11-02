<!--  -->
<template>
<div class='movie'>
影库
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios"
export default {
//import引入的组件需要注入到对象中才能使用
name:"Movie",
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    ha(){
        axios.post("http://localhost:3009/api/v1/admin/products",{
            "quantity": 89,
    "price": 7999,
    "_id": "5c6e953a224d199e15f12b9d",
    "name": "Apple iPhone X",
    "descriptions": "Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机",
    "coverImg": "https://img10.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg",
    "createdAt": "2019-02-21T12:10:34.346Z",
    "updatedAt": "2019-02-21T12:10:34.346Z",
    "__v": 0
        }).then((res)=>{
            console.log(res)
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
this.ha()
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


</style>
