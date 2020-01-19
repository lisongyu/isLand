const Koa = require('koa')

const app = new Koa();

//应用程序对象 中间件

//发送HTTP KOA 接收HTTp

//函数


//注册 中间件
app.use(async (ctx, next) => {
  console.log('hello 7yue')
  await next()
  console.log(ctx.r)
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log('hello 8yue')
  const axios = require('axios');
  ctx.r = await axios.get('http://7yue.pro')


  console.log(4)
})
app.listen(3000)