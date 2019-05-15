var express = require('express');
var app     = express();
var path    = require('path');
var upload  = require('express-fileupload');

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
    
    var promise_file_upload = new Promise(function (resolve, reject) {

      async function forend(file) {

        for (let index = 0; index < file.length; index++) {
          
          var file_      = file[index] 
          var name       = file_.name;
          var uploadpath = __dirname + '/public/data/' + name;

          file_.mv(uploadpath, function (err) {
            if (err) {
              console.log("File Upload Failed", name, err);
              res.send("Error Occured!")
              reject(false)
            }
            else {
              console.log("File Uploaded");
            }
          });

        }
        resolve(true)
      }

      forend(file)

    })
    promise_file_upload.then(function (val) {
      console.log(val)
      if (val) {
        res.sendFile(path.join(__dirname, 'public/views', 'index.html'))
      } else {
        res.send('Error occured')
      }
    })

  }
  else {
  };
})
//server starting
app.listen(8080, function () {
  console.log('server started on port 8080')
})
