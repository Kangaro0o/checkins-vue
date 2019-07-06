<template>
  <el-header class="header">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#1989fa"
             class="menu">
      <el-menu-item>
      <!--#515151-->
        <img src="../../assets/logo1.svg" alt="" height="54">
      </el-menu-item>
      <el-menu-item index="1">任务</el-menu-item>
      <el-menu-item index="3">日志</el-menu-item>
      <el-menu-item index="4">个人中心</el-menu-item>
    </el-menu>

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
  .header {
    height: 80px;
    background-color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    position: relative;
    color: #333;
    text-align: center;
    line-height: 80px;
  }

  .el-menu-item {
    margin-right: 30px;
    font-size: 16px;
  }
</style>
