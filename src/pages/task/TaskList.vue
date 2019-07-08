<template>
  <div id="task-list">
    <el-form :inline="true" :model="formInline" ref="formInline">
      <el-form-item label="任务名称：">
        <el-input v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch('formInline')">查询</el-button>
        <el-button type="default" @click="onClear('formInline')">清空</el-button>
      </el-form-item>
    </el-form>
    <el-table
      border
      ref="multipleTable"
      :data="onePageTableData"
      tooltip-effect="dark"
      style="width: 100%">
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
        width="120"
        prop="is_Work"
        :filters="[{ text: '可执行', value: true }, { text: '不可执行', value: false }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.is_work === true ? 'success' : 'danger'"
            disable-transitions>{{scope.row.is_work === true ? '可执行' : '不可执行'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
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
          name: ''
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
      filterTag(value, row) {
        // console.log('value:', value)
        // console.log('row:', row)
        return row.is_work === value;
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
