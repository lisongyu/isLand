const Koa = require('koa')

const parser = require('koa-bodyparser')
const app = new Koa();

const InitMasnager = require('./core/init');
//全局异常处理
const catchError = require('./middlewares/exception');
app.use(parser());
app.use(catchError)
InitMasnager.initCore(app)


// const book = require('./api/v1/book')

// const classic = require('./api/v1/classic')

//应用程序对象 中间件

//发送HTTP KOA 接收HTTp

//函数


//注册 中间件

app.listen(3000)