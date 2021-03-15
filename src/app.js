import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import logger from './logger'
import router from './routes'

// 增加 swagger
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerui from 'swagger-ui-express'

// Express 引用实例化
const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'express-template',
      version: '1.0.0',
      description: 'express-template 的 Api 文档'
    },
  },
  apis: [path.join(__dirname, '/routes/*.js')], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options);
app.use('/api-doc', swaggerui.serve, swaggerui.setup(openapiSpecification))


// 项目配置允许跨域加载
app.all('*', (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
  res.header("Access-Control-Allow-Origin", allowOrigin);
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", 'Express');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// 视图模板设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 使用 morgan 打印日志
app.use(morgan('dev'));

// 使用对 Post 来的数据 json 格式化  // 这一行（坑）害我找了好久原因，请求的接口拿不到数据,, 跨域之间存在问题
app.use(express.json());   // 给为如下

// 使用对 表单提交的数据 进行格式化
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

router(app, express);

//  捕捉404错误 catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 处理非404的错误（throw 出来的错误)
const _errorHandler = (err, req, res, next) => {
  logger.error(`${req.method} ${req.originalUrl} ` + err.message)
  const errorMsg = err.message
  res.status(err.status || 500).json({
    code: -1,
    success: false,
    message: errorMsg,
    data: {}
  })
}
app.use(_errorHandler)


export default app
