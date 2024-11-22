<template>
  <div class="login_body">
    <div class="bg" />
    <div class="box">
      <div class="title">智慧园区-登录</div>
      <!--
      基础校验
        el-form :model="表单对象" :rules="规则对象"
        el-form-item prop属性指定一下要使用哪条规则
        el-input v-model数据双向绑定

      统一校验（兜底校验）
        当用户点击登录的时候，把所有需要校验的表单项都统一校验
        1、获取表单的实例对象 - ref
        2、调用 validate 方法
       -->
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item
          label="账号"
          prop="username"
        >
          <el-input v-model="form.username" />
        </el-form-item>

        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="form.password" />
        </el-form-item>

        <el-form-item prop="remember">
          <el-checkbox>记住我</el-checkbox>
        </el-form-item>

        <el-form-item>
          <!-- 当用户点击登录的时候，把所有需要校验的表单项都统一校验 -->
          <el-button type="primary" class="login_btn" @click="loginHandler()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      // 表单对象
      form: {
        username: '',
        password: ''
      },
      // 规则对象
      rules: {
        username: [ // 可以书写多个规则，所以是数组
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    loginHandler() {
      this.$refs.form.validate(async valid => {
        console.log(valid)
        // 所有的表单项都通过校验 valid 变量才为 true，否则都是 false
        if (valid) {
          // TODO LOGIN
          // 这里确保 token 返回之后再跳转到首页，防止首页有一些需要依赖 token 的逻辑
          await this.$store.dispatch('user/asyncLogin', this.form)
          // 跳转到首页
          this.$router.push('/')
          // 提示用户登录成功
          this.$message({
            type: 'success',
            message: '登录成功'
          })
        }
      })
    }
  }
}

</script>

<style scoped lang="scss">
  .login_body {
    display: flex;
  }
  .bg {
    width: 60vw;
    height: 100vh;
    background: url('~@/assets/login-bg.svg') no-repeat;
    background-position: right top;
    background-size: cover;
  }
  .box {
    margin: 200px 10% 0;
    flex: 1;
    .title {
      padding-bottom: 76px;
      font-size: 26px;
      font-weight: 500;
      color: #1e2023;
    }
    ::v-deep() {
      .ant-form-item {
        display: flex;
        margin-bottom: 62px;
        flex-direction: column;
      }
      .ant-form-item-label label {
        font-size: 16px;
        color: #8b929d;
      }
      .ant-input,
      .ant-input-password {
        border-radius: 8px;
      }
    }
  }
  .login_btn{
    width: 100%;
  }
</style>
