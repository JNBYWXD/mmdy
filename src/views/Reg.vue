<template>
  <div class="login">
    <div class="img" style="width:200px;height:200px;">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repwd"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="age">
      <div class="age-left">
        <!-- <router-link :to="{ name: 'Reg' }">短信验证码登录</router-link> -->
      </div>
      <div class="age-right">
        <router-link :to="{ name: 'Login' }">已有帐号，我要登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import ElementUI from 'element-ui';
import { Notify } from "vant";
import { regApi } from "../untils/auth";
export default {
  name: "Reg",
  data() {
    return {
      username: "",
      password: "",
      repwd: "",
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      const isLt4M = file.size / 1024 / 1024 < 4;

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      if (!isLt4M) {
        this.$message.error("上传头像图片大小不能超过 4MB!");
      }
      return  isLt4M;
    },
    async onSubmit() {
      // console.log("submit", values);
      if (this.password === this.repwd) {
        const result = await regApi({
          userName: this.username,
          password: this.password,
        });
        if (result.code === "success") {
          console.log(result.code);
          localStorage.setItem("token", result.token);
          this.$router.push({
            name: "Login",
          });
        } else {
          Notify({
            type: "danger",
            message: "result.message",
          });
        }
        console.log(result);
      } else {
        Notify({
          type: "danger",
          message: "两次输入密码不一致",
        });
      }
    },
  },
};
</script>


<style >
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
.age {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
