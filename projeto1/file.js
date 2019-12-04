var fs = require('fs');

//escrever em arquivos
/*fs.writeFile('data.txt','Hello world, já basta!',function(err) {
    if(err) {
        throw err;
    }
})*/

//ler em arquivos
/*fs.readFile('data.txt',function(err,data) {
    if(err) {
        throw err;
    }
    console.log(data.toString('utf8'));
})*/

//visualizar arquivos existentes
/*fs.readdir('.',function(err,files){
    if(err){
        throw err;
    }

    for(var file in files){

        console.log(files[file]);
    }
})*/

//resgatar somente arquivos especificos
/*fs
  .readdirSync('.')
  .filter(function(file){
    return (file.endsWith('.js'))
})    

.forEach(function(file){
    console.log(file)   
});*/
