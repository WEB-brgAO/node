const mysql = require('mysql')
// 配置数据库
module.exports = {
  config: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'user'
  },
  // 连接数据库 连接池
  sqlConnect: function(sql, callBack){
    var pool = mysql.createPool(this.config)
    pool.getConnection((err,conn)=> {
      if(err) console.log('连接失败');
      // 事件驱动回调
      conn.query(sql, callBack)
      // 释放链接
      conn.release()
    })
  }
}