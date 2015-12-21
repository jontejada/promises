var request = require('request');
var prom2 = promisifyGet('http://www.etsy.com');

prom2.then(function(data){ //reject and resolve can only take one parameter. send an object if more needed
	console.log(data.body);
	throw new Error('after etsy');
})
.catch(function(error){
	console.log(error);
	console.log('bad');
});

function promisifyGet(url){
	return new Promise (function(resolve,reject){
		request (url,function(err,response,body){
			if (err) {
				reject(err);
			} else if (response.statusCode !== 200) {
				reject(response);
			} else {
				resolve(response);
			}
		});
	});
}


// body is shorthand for response.body