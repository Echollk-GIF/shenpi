/* 
  环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/6b578f5e267fc4e5057ff56f8ef7b92c/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/6b578f5e267fc4e5057ff56f8ef7b92c/api'
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/6b578f5e267fc4e5057ff56f8ef7b92c/api'
  }
}
export default {
  env,
  mock: true,
  ...EnvConfig[env]
}