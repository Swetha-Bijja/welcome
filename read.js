var fs = require('fs');
fs.appendFile("hello.txt","HELLO\n",function(err){
  if(err) throw err;
  console.log("File updated")
});