var express = require('express');
var app = express();
app.get('/', function(request, response) {
response.send('Hello Express');
});

app.listen(3000,function(){
	console.log('Express app on port 3000');
});
