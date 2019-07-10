<template>
  <div id="profile">
    <el-card>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="UID">
          <el-col :span="2">
            {{ form.id }}
          </el-col>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-col :span="20">
            <el-input v-model="form.name" placeholder="请输入修改用户名" :disabled="control.name"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="default" icon="el-icon-edit" circle title="修改" @click="control.name=false"></el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-col :span="20">
            <el-input v-model="form.email" placeholder="请输入修改邮箱" :disabled="control.email"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="default" icon="el-icon-edit" circle title="修改" @click="control.email=false"></el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="20">
            <el-input v-model="form.password" placeholder="请输入修改密码" :disabled="control.password"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="default" icon="el-icon-edit" circle title="修改" @click="control.password=false"></el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-col :span="2">
            {{ form.time }}
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="20">
            <el-button type="primary" @click="submitForm('form')">提交修改</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {requestUserInfo} from '@/api/user';
  export default {
    name: "Profile",
    created() {
      requestUserInfo({}).then(data => {
          this.form = data.result;
      });
    },
    data() {
      return {
        control: {
          name: true,
          email: true,
          password: true
        },
        form: {
          uid: '',
          name: '',
          email: '',
          password: '',
          time: ''
        },
        rules: {
          name: {required: true, message: '请输入修改用户名', trigger: 'blur'},
          email: [
            {required: true, message: '请输入修改邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ],
          password: {required: true, message: '请输入要修改的密码', trigger: 'blur'}
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
        // TODO 表单各项恢复成默认值
      }
    }
  }
</script>

<style scoped>
 #profile {
   top: 50px;
   left: 0;
   position: relative;
   width: 45%;
   margin-left: 15%;
 }

 .el-col {
   margin-left: -10px;
 }
</style>
