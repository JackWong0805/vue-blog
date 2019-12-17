/* eslint-disable standard/no-callback-literal */
import jwt from 'jsonwebtoken'
const TOKEN_KEY = 'token'
const PUB_KEY = 'pub'
export default {
  // 获取token
  getJwtToken () {
    return localStorage.getItem(TOKEN_KEY)
  },
  // 设置token
  setJwtToken (token) {
    return localStorage.setItem(TOKEN_KEY, token)
  },
  // 移除publicKey
  removeJwtToken () {
    return localStorage.removeItem(TOKEN_KEY)
  },
  // 获取token
  getPublicKey () {
    return localStorage.getItem(PUB_KEY)
  },
  // 设置publicKey
  setPublicKey (pub) {
    return localStorage.setItem(PUB_KEY, pub)
  },
  // 移除publicKey
  removePublicKey () {
    return localStorage.removeItem(PUB_KEY)
  },
  verify (callback) {
    jwt.verify(this.getJwtToken(), this.getPublicKey(), { algorithms: ['RS256'] }, (_err) => {
      if (_err) {
        callback(false)
      } else {
        callback(true)
      }
    })
  }
}
