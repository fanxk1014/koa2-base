const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=>{
    ctx.body = 'hello xiaokun'
})

app.listen(3000)
console.log('[demo] is starting at port 3000')
