var dbCongif = require('../util/dbconfig')

var multiparty = require('multiparty')
// 获取列表
exports.getuser = (req, res, next) => {
  var sql = `select * from getuser`

  var sqlAll = []

  var callBack = (err, data) => {
    if (err) {
      console.log('链接出错')
    } else {
      res.send({
        'list': data
      })
    }
  }
  dbCongif.sqlConnect(sql, sqlAll, callBack)
}
// 获取指定分类文张列表
exports.getpost = (req, res) => {
  
  var sql = `select * from getuser ORDER BY id DESC`
  var callBack = (err, data) => {
    if (err) {      
      console.log('链接出错')
    } else {    
      res.send({
        "code": 200,
        "msg": "查询成功",
        "data": 
          data
        ,
        "count": data.length,
        "time": 11111111
      })
    }
  }
  dbCongif.sqlConnect(sql, callBack)
}

// 获取指定分类文张列表
exports.addpost = (req, res) => {
 var {name, address, age, id } = req.body 
 console.log(id);
 var sql = ''
 var msg = ''
 if(id){
  sql = `UPDATE getuser SET NAME='${name}',address =' ${address}', age='${age}' WHERE id=${id}`
  msg = '修改成功'
 } else{
  sql = `INSERT INTO getuser  VALUES (NULL,'${name}','${age}','${address}')`
  msg = '添加成功'
 }
 console.log(sql);
 
  var callBack = (err, data) => {
    
    if (err) {      
      console.log('链接出错')
    } else {    
      res.send({
        "code": 200,
        "msg": msg,
        "data": 
          data
        ,
        "count": data.length,
        "time": 11111111
      })
    }
  }
  dbCongif.sqlConnect(sql, callBack)
}


// 删除指定分类文张列表
exports.removepost = (req, res) => {
  console.log(req.body);
  
  var {id} = req.body
  console.log(id);
  
   var sql = `DELETE FROM getuser WHERE id = ${id}`
   console.log(sql);
   
   var callBack = (err, data) => {
     
     if (err) {      
       console.log('链接出错')
     } else {    
       res.send({
         "code": 200,
         "msg": "删除成功",
         "data": 
           data
         ,
         "count": data.length,
         "time": 11111111
       })
     }
   }
   dbCongif.sqlConnect(sql, callBack)
 }

 // 获取单个指定文张
exports.getontitem = (req, res) => {
  var {id} = req.body
   var sql = `SELECT * FROM getuser WHERE id = ${id}`
   console.log(sql);
   
   var callBack = (err, data) => {
     
     if (err) {      
       console.log('链接出错')
     } else {    
       res.send({
         "code": 200,
         "msg": "获取成功",
         "data": 
          data[0]
         ,
         "count": data.length,
         "time": 11111111
       })
     }
   }
   dbCongif.sqlConnect(sql, callBack)
 }