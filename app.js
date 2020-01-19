const Koa = require('koa')
const requireDirectory=require('require-directory')
const app = new Koa();
const Router=require('koa-router')

// const book = require('./api/v1/book')

// const classic = require('./api/v1/classic')
requireDirectory(module, './app/api', {
  visit: whenloadModule
});



function whenloadModule(obj) {
  if (obj instanceof Router) {
    app.use(obj.routes())
  }
  
}
//应用程序对象 中间件

//发送HTTP KOA 接收HTTp

//函数


//注册 中间件

app.listen(3000)