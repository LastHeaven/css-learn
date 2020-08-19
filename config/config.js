// 环境常量设置
module.exports = {
  dev: {  // 前端开发环境
    __CTX__: "'/dev'",  // 前台根路径
    __SSO_CTX__: "'http://self.sso.com/account'",   // SSO服务器路径
    __CLIENT_ID__: "'c1ebe466-1cdc-4bd3-ab69-77c3561b9dee'", // 客户端id
    __STATIC_PATH__: JSON.stringify('http://192.168.2.202')
  },
  dev_local: {  // 后台开发环境
    __CTX__: "'/trip'",
    __SSO_CTX__: "'http://self.sso.com/account'",
    __CLIENT_ID__: "'c1ebe466-1cdc-4bd3-ab69-77c3561b9dee'",
    __STATIC_PATH__: JSON.stringify('http://static.cx5y.cn')
  },
  prod: { // 生产环境
    __CTX__: "'/trip'",
    __SSO_CTX__: "'//120.78.154.33/account'",
    __CLIENT_ID__: "'uat-order-client'",
    __STATIC_PATH__: JSON.stringify('http://static.cx5y.com')
  },
  uat: { // 测试环境
    __CTX__: "'/trip'",
    __SSO_CTX__: "'//self.sso.com/account'",
    __CLIENT_ID__: "'c1ebe466-1cdc-4bd3-ab69-77c3561b9dee'",
    __STATIC_PATH__: JSON.stringify('http://static.cx5y.cn')
  },
}
