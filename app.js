var fs  = require('fs');
var http = require("http");
http.createServer(function(req,res){
//console.log(req, res);
if (req.url == '/message' && req.method == 'POST') {
	var messageText = ""; // This is an empty string, the use will be known soon
	        req.on('data', function (data) {
	            var formMessage = data.toString();
	            var msg = formMessage;
	            fs.writeFile('./message.txt', msg, function () {
	                console.log('Done!!');
	            })
	        });
	
	        req.on('end', function () {
	            res.end("Done writing the file");
	        });
}
else{
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("Please enter a message below");
	res.write("<form method='POST' action='/message'><br><input type='text' name='message'><input type='submit' value='Submit'>");
	res.end();
}
		
}).listen(8080);

