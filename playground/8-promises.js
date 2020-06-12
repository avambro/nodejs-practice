
/* working  callbacks */
/*
const doWorkCallback = () => {
	setTimeout(()=>{
		callback('This is my function TimeOut',undefined)
		console.log('under setTimeout')
	},2000)
}


doWorkCallback((err,res)=>{
if(err){
	return console.log(err)
}
console.log(result)
})
*/


// Working with PROMISES
/*
const doWorkPromise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([1,2,5,10])
		reject('something went wrong')
	},1000)
})

doWorkPromise.then((result)=>{
	console.log('Success',result)
}).catch((err)=>{
	console.log('Error',err)
})*/

/*
const add = (a,b) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(a+b)
		},1000)
	})
}

add(1,2).then((sum)=>{
	console.log(sum)
	add(sum,5).then((sum2)=>{console.log(sum2)}).catch((e) => {console.log(e)})

}).catch((e) => {
	console.log(e)
})
*/

add(1,1).
then((sum)=>{
	console.log(sum)
	return  add(sum,5)
}).then((sum2)=>{
	console.log(sum2)
}).catch((e)=>{console.log(e)})