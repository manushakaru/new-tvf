// import readFileSync from 'fs';
// var textByLine;
// function getdata(){
//     // var datapromise = new Promise(function(resolve,reject){
//         textByLine = readFileSync(__dirname+'/public/data/taxi-1.txt').toString().split("\n");
//         //resolve(true)
//         //console.log(textByLine)
//     //})
//     //return datapromise;
//     return textByLine;
// }


function readfile(){
    jQuery.get('js/taxi-1.txt',function(txt){
        data = txt.split('\n');
        latlon = []
        passenger =[]
        state = []
      for (let index = 0; index < data.length; index++) {
        
         latlon[index] = [data[index][0],data[index][1]];
         passenger[index] = data[index][2];
         state[index] = data[index][3];


          
      }
      console.log(latlon)
       // console.log(txt.split('\n'))
        
    })
}