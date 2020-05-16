var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')// 处理post 请求
var path = require('path'); // 路径
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var http = require('http');
var server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:false})) // 配置post请求
app.use(bodyParser.json()) // 允许json格式    
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*',function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
      next();
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen('3000', () => {
  console.log('服务启动,端口3000');
})
