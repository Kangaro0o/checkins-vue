<template>
  <div id="task-list">
<!--    <el-form :inline="true" :model="formInline" :rules="rules" ref="formInline">-->
<!--      <el-form-item label="姓名：" prop="name">-->
<!--        <el-input v-model="formInline.name"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="手机号：" prop="phone">-->
<!--        <el-input v-model="formInline.phone"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSearch('formInline')">查询</el-button>-->
<!--        <el-button type="default" @click="onClear('formInline')">清空</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
    <el-table
      border
      ref="multipleTable"
      :data="onePageTableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        align="center"
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="任务名称"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="site_name"
        label="签到站点"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="username"
        label="站点账号"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="check_time"
        label="签到时间"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        label="状态"
        width="120">
        <template slot-scope="scope">{{ scope.row.is_work }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini">测试</el-button>
          <el-button size="mini" type="warning">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageTotal"
    ></el-pagination>
  </div>
</template>

<script>
  import {requestTaskList} from '@/api/task';
  export default {
    name: "TaskList",
    created() {
      // init table data
      requestTaskList().then(data => {
        this.tableData = data.result;
        this.pageTotal = this.tableData.length;
      });
    },
    data() {
      return {
        formInline: {
          name: '',
          phone: '',
          location: ''
        },
        rules: {
          phone: {pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号', trigger: 'change'}
        },
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        pageTotal: 0,
        multipleSelection: []
      }
    },
    methods: {
      // 设置分页大小
      handleSizeChange(size) {
        this.pageSize = size;
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    computed: {
      onePageTableData: function () {
        return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    }
  }
</script>

<style scoped>
  #task-list {
    width: 80%;
    margin-left: 50px;
  }
</style>
