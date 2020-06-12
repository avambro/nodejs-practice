const add = (a,b) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(a+b)
		},1000)
	})
}


const doWork = async () => {
	
	const sum= await add(1,99)
	const sum2 = await add(sum,1)
	const sum3 = await add(sum2,1)
	return sum3
}


doWork().then((result) => {
	console.log('result',result)
}).catch((e) => {
	console.log('e',e)
})


