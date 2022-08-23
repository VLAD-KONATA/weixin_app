const express=require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
app.use(bodyParser.json())


app.get('/getUser/',(req,res)=>{
  console.log(req.body.openid)
  //const openid = req.body.openid
  var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    //password:'wxcf7b1f40b24b05db',
    database:'jdbctest'
  })
  connection.connect();
  connection.query("select * from student",function(error,results,fields){
    if(error) console.log(error);
    res.json(results)
  })
  connection.end();
})

app.listen(3000,()=>{
  console.log('server running at http://127.0.0.1:3000')
})