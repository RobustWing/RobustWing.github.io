<template>
  <div id="app">
    <NavHeader></NavHeader>
    <el-menu default-active="2" class="el-menu-vertical-demo nav" theme="dark">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <router-link to="table"><el-menu-item index="2">table</el-menu-item></router-link>
      <router-link to="form"><el-menu-item index="3">form</el-menu-item></router-link>
    </el-menu>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import NavHeader from 'components/public/NavHeader.vue'

  export default {
    name: 'app',
    components: {
      NavHeader
    }
  }
</script>

<style scoped>
  .nav{
    position: absolute;
    left:0;
    top: 60px;
    bottom: 0;
    width: 200px;
  }
  .content {
    position: absolute;
    left: 200px;
    top: 60px;
    right: 0;
    bottom: 0;
  }
</style>
