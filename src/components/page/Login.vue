<template>
  <div class="container">
    <b-row class="justify-content-center">
      <b-card class="col-xl-5 col-lg-5 col-md-6 col-sm-8 overflow-hidden border-0 shadow-lg my-5">
        <b-card-body class="p-0">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
          </div>

          <b-form class="user"  @submit.prevent.stop @reset.prevent.stop>
            <div class="form-group">
              <input type="text" class="form-control form-control-user" id="inputUsername" v-model="param.username" placeholder="用户名">
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-user" id="inputPassword" v-model="param.password" placeholder="密码">
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox small">
                <input type="checkbox" class="custom-control-input" id="rememberMeCheckbox" v-model="rememberme">
                <label class="custom-control-label" for="rememberMeCheckbox">记住我</label>
              </div>
            </div>
            <b-button variant="primary" class="btn-user btn-block" @click="signIn">
              登录
            </b-button>
            <b-button variant="secondary" class="btn-user btn-block" @click="signUp">
              注册
            </b-button>
          </b-form>
        </b-card-body>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import sha1 from 'sha1'
import token from '../../utils/token'

const Taost = Swal.mixin(
  {
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: false
  }
)

export default {
  data: function () {
    return {
      param: {
        username: '',
        password: ''
      },
      rememberme: false
    }
  },
  computed: {
    validation () {
      return this.param.username.length >= 1 && (this.param.password.length > 5)
    }
  },
  methods: {
    // 登录
    signIn () {
      if (this.validation) {
        var self = this
        this.axios({
          method: 'post',
          url: '/users/signin',
          data: {
            name: this.param.username,
            password: sha1(this.param.password)
          }
        }).then(response => {
          if (response.data.success) {
            Taost.fire({
              icon: 'success',
              title: '登录成功'
            })

            self.$store.state.hasPresimission = true
            self.$store.state.token = response.data.token
            // 保存publicKey
            token.setPublicKey(response.data.pub)
            if (this.rememberme) {
              token.setJwtToken(response.data.token)
            }
            // 跳转至后台管理首页
            this.$router.push('/admin')
          } else {
            Taost.fire({
              icon: 'error',
              title: '登录失败',
              text: response.data.message
            })
          }
        })
      } else {
        Taost.fire({
          toast: true,
          icon: 'error',
          title: '请输入正确的用户名或密码!'
        })
      }
    },
    // 注册
    signUp () {
      if (this.validation) {
        this.axios({
          method: 'post',
          url: '/users/signup',
          data: {
            name: this.param.username,
            password: sha1(this.param.password)
          }
        }).then(response => {
          if (response.data.success) {
            Taost.fire({
              title: '注册成功,请登录'
            })
          } else {
            Taost.fire({
              title: '注册失败: ' + response.data.message
            })
          }
        })
      } else {
        Taost.fire({
          title: '账号或密码(至少6位数)无效'
        })
      }
    }
  }
}
</script>

<style scoped>
form.user .form-control-user {
  font-size: .8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
}

form.user .custom-checkbox.small label {
    line-height: 1.5rem;
}

form.user .btn-user {
    font-size: .8rem;
    border-radius: 10rem;
    padding: .75rem 1rem;
}

</style>
