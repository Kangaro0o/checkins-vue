<template>
  <div id="create-task">
    <el-card>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="任务名称" prop="name">
          <el-col :span="20">
            <el-input v-model="form.name" placeholder="名称可任意取"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="签到站点" prop="site">
          <el-col :span="11">
            <el-select v-model="form.site" placeholder="请选择签到站点" style="margin-left: -12px;" @change="handleSelectChange">
              <el-option v-for="(site, index) in sites" :key="index" :label="site.name" :value="site.sid"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-link :underline="false" icon="el-icon-right" target="_blank" :href="goto">去看看</el-link>
          </el-col>
        </el-form-item>
        <el-form-item label="站点账号" prop="username">
          <el-col :span="20">
            <el-input v-model="form.username" placeholder="签到站点的账号"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="站点密码" prop="password">
          <el-col :span="20">
            <el-input v-model="form.password" placeholder="签到站点的密码"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button icon="el-icon-s-help" type="info" circle title="点击测试"></el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="签到时间" prop="time">
          <el-col :span="11">
            <el-time-select
              v-model="form.time"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              style="margin-left: -10px;"
              placeholder="选择时间">
            </el-time-select>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="20">
            <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  import {requestSiteList} from '@/api/site';
  export default {
    name: "CreateTask",
    created() {
      requestSiteList().then(data => {
        this.sites = data.result;
      });

    },
    data() {
      return {
        goto: '',
        sites: [],
        form: {
          name: '',
          site: '',
          username: '',
          password: '',
          time: ''
        },
        rules: {
          name: {required: true, message: '请输入任务名称', trigger: 'blur'},
          site: {required: true, message: '请选择签到站点', trigger: 'change'},
          username: {required: true, message: '请输入签到站点的账号', trigger: 'blur'},
          password: {required: true, message: '请输入签到站点的密码', trigger: 'blur'},
          time: {required: true, message: '请选择签到时间', trigger: 'blur'}
        }
      }
    },
    methods: {
      handleSelectChange(value) {
        let site = '';
        this.sites.forEach((s) => {
          if (s.sid === value)
            site = s;
        });
        this.goto = site.url;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  #create-task {
    width: 60%;
    margin-left: 100px;
  }

  .el-col {
    margin-left: -10px;
  }
</style>
