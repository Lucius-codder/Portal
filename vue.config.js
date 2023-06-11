module.exports = {
    devServer: {
       port: 8080,
        open: true,
        proxy: {
          "/ISAPI": {
            //指定后端服务路径
            target: "http://127.0.0.1:3000",
            //后端路径中没有api,所以需要在代理中重写
            pathRewrite: {
              "^/ISAPI": "",
            },
          },
        }
    }
};
