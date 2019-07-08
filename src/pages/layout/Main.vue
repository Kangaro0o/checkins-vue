<template>
  <el-main :style="mainStyle">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </el-main>
</template>

<script>
  export default {
    name: "Main",
    data() {
      const win_height = window.innerHeight - 120 + 'px'
      return {
        mainStyle: {
          minHeight: win_height
        }
      }
    }
  }
</script>

<style scoped>
</style>
