var express = require('express');
var app = express();
var multer = require('multer');
var path = require('path');
var upload = require('express-fileupload');


app.use(upload()); // configure middleware
app.use(express.static(path.join(__dirname ,'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public/views','home.html'))
  })


app.post('/upload',function(req,res){
  // res.send(req.files.foo)
  
  // console.log(req.files.foo);
  if(req.files){
    console.log(req.files)
    console.log((req.files.upfile).length)
    var file = req.files.upfile
      // name = file.name,
      // type = file.mimetype;
      var promise_file_upload = new Promise(function (resolve,reject) {
        var loopnum = 0 ;
        for (let index = 0; index <file.length; index++) {
          var  file_= file[index]
          var name = file_.name;
        
        
      var uploadpath = __dirname + '/public/data/' + name;
      // if(type == 'application/vnd.ms-excel'){
        file_.mv(uploadpath,function(err){
          if(err){
            console.log("File Upload Failed",name,err);
            res.send("Error Occured!")
          }
          else {
            console.log("File Uploaded",name);
            //var textByLine = fs.readFileSync(uploadpath).toString().split("\n");
          //console.log(textByLine)
            
          }
        });
        loopnum +=1
      }
      if(loopnum == file.length){
        resolve(true)
      }
      })
      promise_file_upload.then(function(val){
        if(val){
          res.sendFile(path.join(__dirname,'public/views','index.html'))
        }
      })
   
    // }else{
    //   res.send('file type is wrong')
    // }
    
  }
  else {
   // res.send("No File selected !");
    //res.redirect(path.join(__dirname,'public/views','home.html'))
   // res.end();
  };
})
//server starting
app.listen(8080,function(){
    console.log('server started on port 8080')
  })
  