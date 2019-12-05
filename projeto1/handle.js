var querystring = require('querystring')
function handle(request, response){
    
    var body = '';
    request.on('data',function(data){
       
        body += data.toString();
    });

    request.on('end',function(){
       
        var decode = querystring.parse(body);

        console.log(decode);
    });

	response.end('hello from http module');
}

module.exports = handle;