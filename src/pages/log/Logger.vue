<template>
  <div id="task-log">
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
      :data="onePageTableData"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        align="center"
        prop="id"
        label="日志ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="任务名称"
        width="220">
      </el-table-column>
      <el-table-column
        align="center"
        prop="site_name"
        label="签到站点"
        width="220">
      </el-table-column>
      <el-table-column
        align="center"
        label="结果"
        width="120"
        prop="result"
        :filters="[{ text: '成功', value: 'success' }, { text: '失败', value: 'error' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.result === 'success' ? 'success' : 'danger'"
            disable-transitions>{{scope.row.result === 'success' ? '成功' : '失败'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="real_time"
        label="签到时间"
        width="200">
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
  import {requestLogList} from '@/api/log';

  export default {
    name: "Logger",
    created() {
      // init table data
      requestLogList().then(data => {
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
        return row.result === value;
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
  #task-log {
    top: 50px;
    left: 0;
    position: relative;
    width: 80%;
    margin-left: 90px;
  }
</style>
