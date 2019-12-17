var baseURL = ''

if (process.env.NODE_ENV === 'development') {//开发环境
    baseURL = '/api';
} else if (process.env.NODE_ENV === 'production') {//生产环境
    baseURL = 'http://laowangomg.com/';
}

export default {
  baseURL
}
