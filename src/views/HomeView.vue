<template>
  <div class="home">
    <div class="box">
      <p>ElementUi管理后台</p>
    </div>
    <el-container>
      <el-aside style="background-color: rgb(50, 64, 87)" class="aside">
        <el-menu
          background-color="rgb(50,64, 87)"
          text-color="#bfcbd9"
          :router="true"
        >
          <el-menu-item index="/" class="active">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2" class="active">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
          </el-submenu>
          <el-menu-item-group>
            <el-menu-item index="3-1">文章列表</el-menu-item>
            <el-menu-item index="3-2">多层级路由示例</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="box-a">
            <p>文章标题</p>
            <p>作者</p>
            <p>浏览量</p>
            <p>回复</p>
            <p>操作</p>
          </div>
          <div>
            <el-dropdown>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.box {
  height: 50px;
  background: #0086f1;
}
.box p {
  color: #fff;
  line-height: 50px;
  margin-left: 20px;
}
.aside {
  height: 100vh;
}

.aside .active {
  color: #bfcbd9;
  background-color: #222d32;
}

.home >>> .el-submenu__title:hover,
.home >>> .el-menu-item:hover {
  background-color: #222d32 !important;
}
.el-menu--inline .el-menu-item {
  background-color: #1f2d3d !important;
}

.aside .active span {
  color: #bfcbd9;
}

.img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
.box-a {
  display: flex;
}
.box-a p {
  width: 200px;
  line-height: 50px;
  height: 50px;
  color: #a09fa2;
}
</style>