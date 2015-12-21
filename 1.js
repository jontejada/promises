var prom1 = new Promise(promExec);
function promExec(resolve,reject) {
	setTimeout(function(){
		console.log('timer');
		resolve("Some data");
	},1000);
	reject("BOOO"); //can only reject OR resolve
}

prom1.then(resolvedYay,resolvedBoo);


// prom1.then(function(data){
// 	console.log(data);
// });


function resolvedYay(data){
	console.log("resolved: ", data);
}

function resolvedBoo(data){
	console.log('rejected: ', data);
}

// var prom2 = new Promise(function(resolve,reject){

// });