<template>
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="16">
      <div>
        <el-container>
          <header-menu></header-menu>
          <div class="line"></div>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </div>
    </el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
  </el-row>
</template>

<script>
  import Menu from './Menu'

  export default {
    name: "Base",
    components: {
      'header-menu': Menu
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .el-footer {
    height: 80px;
    background-color: #42b983;
    color: #333;
    text-align: center;
    line-height: 80px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  /*body > .el-container {*/
  /*  margin-bottom: 40px;*/
  /*}*/
</style>
