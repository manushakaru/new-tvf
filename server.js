var express = require('express');
var app     = express();
var path    = require('path');
var upload  = require('express-fileupload');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");

  });
  con.changeUser({database : 'mydb'}, function(err) {
    if (err) throw err;
    console.log('user changed ')
  });
  var sql = "CREATE TABLE IF NOT EXISTS taxi (lat float(9,6), lon float(9,6), num_passengers int(1),pick_drop int(1))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 
});



app.use(upload()); // configure middleware
app.use(express.static(path.join(__dirname, 'public'))); //set static path

//home page routing
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/views', 'home.html'))
})


//upload routing
app.post('/upload', function (req, res) {

  if (req.files) {

    var file = req.files.upfile  //inputed file set
    
    // var promise_file_upload = new Promise(function (resolve, reject) {
var promises =[]

      async function forend(file) {


        for (let index = 0; index < file.length; index++) {
          
          var promise_ = new Promise(function(resolve,reject){
            var file_      = file[index] 
            var name       = file_.name;
            var uploadpath = __dirname + '/public/data/' + name;
            console.log(uploadpath)
            
            file_.mv(uploadpath, function (err) {
              if (err) {
                console.log("File Upload Failed", name, err);
                res.send("Error Occured!")
                reject(false)
              }
              else {
                console.log("File Uploaded");
                resolve(name)
              }
            });
          })
          promises.push(promise_)
        }
        
      }

      forend(file)

    // })
    Promise.all(promises).then(function (files) {
      console.log(files)
      var childpromises = []
      con.query('DELETE FROM taxi',function(err){
        if(err) throw err;

      })
        
      
      // if (files) {
        for (let index = 0; index < files.length; index++) {
          var childpromise = new Promise(function(resolve,reject){

         
          var file_      = file[index] 
          var name       = file_.name;
          //file path can be changed 
        con.query("LOAD DATA INFILE '"+'F:/moving marker/Leaflet.MovingMarker/public/data/'+name+"' INTO TABLE taxi FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'",function(err, result){
          if (err) throw err;
          resolve(true)
          //console.log('inerted data')
        })
      })
      childpromises.push(childpromise)
      } 
      Promise.all(childpromises).then(function(result){
        res.sendFile(path.join(__dirname, 'public/views', 'index.html'))
      })
   
      // } else {
      //   res.send('Error occured')
      // }
    })

  }
  else {
  };
})
//server starting
app.listen(8080, function () {
  console.log('server started on port 8080')
})
