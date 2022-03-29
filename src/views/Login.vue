<template>
  <div class="login">
    <div class="box">
      <h4>Login Form</h4>
    </div>
    <div>
      <el-form class="form" :model="formdata" :rules="rules">
        <el-form-item prop="name">
          <el-input placeholder="用户名" v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" v-model="formdata.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitfn">登录</el-button>
        </el-form-item>
        <div class="box-a">username:admin password:123456</div>
      </el-form>
    </div>
  </div>
</template>

<script>
import instance from "@/request/api";

export default {
  name: "MyLogin",
  data() {
    let userfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^[a-z]\w{2,6}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("账号格式错误"));
    };
    let pwdfn = function (rule, value, callback) {
      console.log(rule);
      let rg = /^\w{3,6}$/;
      if (rg.test(value)) return;
      return callback(new Error("密码格式错误"));
    };
    return {
      formdata: {
        user: "admin",
        pwd: "123456",
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pwd: [{ validator: pwdfn, trigger: "blur" }],
      },
      newdebouncefn: null,
    };
  },
  methods: {
    submitfn() {
      this.newdebouncefn();
    },

    async loginfn() {
      let user = this.formdata.user;
      let pwd = this.formdata.pwd;
      let { data } = await instance.post("/login", { user, pwd });

      if (data.message === "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ path: "/" });
          },
        });
      }
    },
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 2000);
  },
};
</script>
<style scoped>
.login {
  background: #2d3a4b;
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding-top: 140px;
}
.box h4 {
  color: #fff;
  font-size: 30px;
}
.form {
  width: 370px;
  height: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -186px;
  margin-top: -151px;
}
.el-button {
  width: 100%;
}

.box-a {
  color: #fff;
}
</style>