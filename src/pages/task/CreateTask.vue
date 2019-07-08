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
            <el-select v-model="form.site" placeholder="请选择签到站点" style="margin-left: -12px;">
              <el-option label="百度贴吧" value="baidutieba"></el-option>
              <el-option label="网易云音乐" value="neteasemusic"></el-option>
            </el-select>
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
            <el-time-picker placeholder="选择时间" v-model="form.time"  style="margin-left: -10px;"></el-time-picker>
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
  export default {
    name: "CreateTask",
    data() {
      return {
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
