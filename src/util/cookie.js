// 设置cookie
// Name => 本例中是用户名，可以是其他任意值
// Pwd => 本例中是密码，可以是其他任意值
// KeepTime => 保存登陆状态的时间，也就是过期时间
export function setCookie (Name, Pwd, KeepTime) {
  // 登陆时间
  var loginTime = new Date()
  // 设置保存时间
  loginTime.setTime(loginTime.getTime() + 24 * 60 * 60 * 1000 * KeepTime)
  // 设置过期时间
  var expires = 'expires=' + loginTime.toGMTString()
  // 字符串拼接cookie
  window.document.cookie = 'username=' + Name + ';path=/home' + expires
  window.document.cookie = 'password=' + Pwd + ';path=/home' + expires
}

// 获取cookie
export function getCookie () {
  if (document.cookie.length > 0) {
    // 获取cookie数组
    let cArr = document.cookie.split(';')
    cArr.forEach((item, index) => {
      var newArr = item.split('=')
      if (newArr[0] === 'username') {
        this.ruleForm.username = newArr[1]
      } else if (newArr[0] === 'password') {
        this.ruleForm.password = newArr[1]
      }
    })
  }
}
//清除cookie
export function clearCookie () {
  this.setCookie('', '', -1)
}