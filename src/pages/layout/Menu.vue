<template>
  <el-header class="header">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#1989fa"
             class="menu">
      <el-menu-item>
        <img src="../../assets/logo.svg" alt="">
      </el-menu-item>
      <el-menu-item index="1">任务</el-menu-item>
      <el-menu-item index="3">日志</el-menu-item>
      <el-menu-item index="4">个人中心</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .header, .el-menu {
    color: #333;
    text-align: center;
    line-height: 80px;
  }
</style>
