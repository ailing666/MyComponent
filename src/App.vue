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
  name: 'App',
  created () {
    window.console.log(this.$router.options)
  }
}
</script>
<style></style>-
