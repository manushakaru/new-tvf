const mysql = require('mysql');
var fs = require('fs')
var csv = require('fast-csv')

//create database function 
createdb = function(dbname){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
      });

    console.log("Connected!");
    con.query("CREATE DATABASE if not exists "+ dbname, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

}

insert =  function(path,dbname,tbname){
    var promise = new Promise(function(resolve,reject){
    console.log('csv insertion happening')
    let stream = fs.createReadStream(path);
    let myData = [];

    let csvStream = csv
        .parse()
        .on("data", function (data) {
            myData.push(data);
        })
        .on("end", function () {
            myData.shift();
            
            //create a new connection to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: dbname
    });
    
    //query for insertion to the table 
    let query = 'INSERT INTO ' +tbname+ ' (driverId,pickupx,pickupy,dropoffx,dropoffy,triptime) VALUES ?';
    //query for for drop table
    let query2 = 'drop table if exists ' + tbname + ' ';
    //query for table creation
    var sql = "CREATE TABLE if not exists " +tbname+ " (driverId varchar(255),pickupx float(3,7) ,pickupy float(3,7) ,dropoffx float(3,7) ,dropoffy float(3,7), triptime TIME)";
                    
    connection.query(query2,(error, response) => {
        console.log(error || response);
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
            connection.query(query, [myData], (error, response) => {
                console.log(error || response);
                resolve(true);
            });
            });
    });
    });
    stream.pipe(csvStream);
    })
    return promise;
}