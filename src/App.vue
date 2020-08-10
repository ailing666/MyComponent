<template>
  <div class="app">
    <el-container>
      <el-header>小艾同学的组件</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="$route.path" router>
            <el-menu-item
              v-for="(item, index) in $router.options.routes.slice(1)"
              :key="index"
              :index="item.path"
            >
              <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
table {
  border-collapse: collapse;
  width: 80%;
  background-color: #fff;
  font-size: 18px;
  text-align: center;
  margin-bottom: 45px;
}
.code {
  display: block;
  width: 100%;
  min-height: 20px;
  max-height: 300px;
  _height: 120px;
  padding: 6px 8px;
  background: rgba(248, 249, 251, 0.8);
  border: 1px solid #dadde0;
  border-radius: 4px;
  resize: none;
  height: 36px;
  font-size: 14px;
  line-height: 22px;
  margin: 10px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: height 0.3s ease-in-out;
  transition: height 0.3s ease-in-out;
  white-space: pre-wrap;
}
</style>
