const Router = require('koa-router')
const router = new Router();
const { ValidationInteger } = require('../../../validators/validator')


router.post('/v1/:id/classic/latest',async (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body

  const V = await new ValidationInteger().validate(ctx)
   
  if (true) {
   const error= new global.errs.ParameterException()
   
    //error.requestUrl = `${ctx.method} ${ctx.path}`
 
    throw error
  }

  ctx.body = {
    key: 'classic'
  }

  //监听错误
  //输入有意义的信息

})

module.exports = router