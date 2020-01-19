const Koa = require('koa')

const app = new Koa();

const book = require('./api/v1/book')

const classic = require('./api/v1/classic')

//应用程序对象 中间件

//发送HTTP KOA 接收HTTp

//函数




app.use(book.routes())
app.use(classic.routes())

//注册 中间件

app.listen(3000)