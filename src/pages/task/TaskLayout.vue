<template>
  <el-tabs tab-position="left" class="tabs">
    <el-tab-pane label="添加任务">
      <create-task></create-task>
    </el-tab-pane>
    <el-tab-pane label="任务清单">
      <task-list></task-list>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import CreateTask from './CreateTask';
  import TaskList from './TaskList';

  export default {
    name: "TaskLayout",
    components: {
      CreateTask,
      TaskList
    }
  }
</script>

<style scoped>
  .tabs {
    top: 60px;
    left: 0;
    position: relative;
  }
</style>
