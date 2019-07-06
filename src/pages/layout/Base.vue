<template>
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content"></div></el-col>
    <el-col :span="16">
      <div>
        <el-container>
          <header-menu></header-menu>
          <div class="line"></div>
          <main-content></main-content>
          <el-footer>Footer</el-footer>
        </el-container>
      </div>
    </el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
  </el-row>
</template>

<script>
  import Menu from './Menu'
  import Main from './Main'

  export default {
    name: "Base",
    components: {
      'header-menu': Menu,
      'main-content': Main
    }
  }
</script>

<style>
  .el-row {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
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
    color: #333;
    text-align: center;
    line-height: 160px;
  }


</style>
