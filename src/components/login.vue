<template>
  <div>
    <section class="log-sec">
      <div class="log-wrap">
        <div class="main" id="log-app">
          <div class="box-border">
            <div class="login-box">
              <ul class="login-tab">
                <li class="tab-item cur"><a href="./log.html">登录</a></li>
                <li class="tab-item"><a href="./reg.html">注册</a></li>
              </ul>
              <div class="log-input">
                <div class="input-row">
                  <input
                  type="text"
                  id="user-txt"
                  placeholder="用户名/邮箱/手机号"
                  v-model="userTxt"
                  >
                </div>
                <div class="input-row">
                  <input
                  type="password"
                  id="user-pwd"
                  placeholder="请输入您的密码"
                  v-model="userPwd">
                </div>
                <div class="psword" style="margin-top:15px;">
                  <a href="./repassword.html" tabindex="-1" class="right" target="_blank">忘记密码?</a>
                </div>
                <div class="tishi">{{tishi}}</div>
                <button @click="simiLogin" id="logbtn" style="outline:none">登 录</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
  @import '../assets/css/base.css';
  @import '../assets/css/reset.css';
  @import '../assets/css/log.css';
  @import '../iconfont/iconfont.css';
</style>
<script>
import { JSEncrypt } from 'jsencrypt'
import { setCookie, getCookie, clearCookie} from '../util/cookie';
export default {
  data () {
    return {
      tishi: '',
      userTxt: '',
      userPwd: undefined,
      nameValid: false,
      pwdValid: false
    }
  },
  methods: {
    checkInput: function () {
      var _this = this
      this.$axios.get('../data/log-data.json')
        .then(function (response) {
          var userData = response.data['user']
          console.log(_this.userTxt)
          console.log(userData)
          for (var i = 0; i < userData.length; i++) {
            if (userData[i]['userName'] === _this.userTxt) {
              _this.nameValid = true
              if (userData[i]['password'] === _this.userPwd) {
                _this.pwdValid = true
              }
              break
            }
          }
          if (!_this.nameValid) {
            _this.tishi = '用户名不存在'
          } else {
            if (!_this.pwdValid) {
              _this.tishi = '密码错误'
            } else {
              _this.tishi = '登录成功'
            }
          }
        })
    },
    login: function () {
      this.checkInput()
    },
    realLogin: function () {
      var _this = this
      this.$axios({
        method: 'post',
        url: '../data/log-data.json',
        data: {
          userTxt: _this.userTxt,
          password: _this.userPwd
        }
      })
        .then(function (response) {
          if (response === true) {
            // 正确登录：跳转页面，简历客户端用户信息缓存
          } else {
            // 提示错误信息
          }
        })
    },
    simiLogin: function () {
      let encryptPwd = this.$md5(this.userPwd)
      let syncCode = 'M89et2'
      let keepTime = new Date();
      setCookie(this.userTxt, this.userPwd, keepTime);
      console.log(window.document.cookie);
    },
    // RSA JSEncrypt加密
    encryptData (publickKey, data) {
      let encryptor = new JSEncrypt()
      encryptor.setPublicKey(publickKey)
      console.log(encryptor)
      return encryptor.encrypt(data)
    },
    // 登录POST请求
    httpLog: function (opt) {
      let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标志
      let cancelToken = this.$axios.cancelToken;
      let removePending = (config) => {
        for (let p in pending) {
          if(pending[p].u === config.url + '&' + config.method) { // 当当前请求在数组中存在时执行函数体
            pending[p].f() // 执行取消操作
            pending.splice(p, 1) // 把这条记录从数组中移除
          }
        }
      }
      // 添加请求拦截器
      this.$axios.interceptors.request.use(config => {
        removePending(config)
        config.cancelToken = new cancelToken((c) => {
          pending.push({u: config.url+'&'+config.method, f: c})
        })
        return config
      }, error => {
        return Promise.reject(error)
      })
      // 添加响应拦截器
      this.$axios.interceptors.response.use(res => {
        removePending(res.config)
        return res
      }, error => {
        return { data: {}}
      })
      this.$axios({
        method: opt.method,
        url: opt.url,
        data: opt.data,
        timeout: opt.timeout
      })
      .then(response => {
        console.log(response)
      })
    }
  },
  mounted() {
    this.$store.commit('upToken',5)
  }
}
</script>
