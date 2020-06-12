/*
const names = ['Andrew','Jen','Jess']

const shortNames = names.filter((name)=>{
	return name.length <=4;
})

const geocode = (address, callback) => {
	setTimeout(() =>{
		const data = {
			lat : 0,
			long:0
		};
		callback(data)
		//return data;
	},1000)
}

geocode('Arkansas',(data) =>{
	console.log(data)
})

*/


const add = (a,b,callback) =>{
	setTimeout(()=>{		
		callback(a+b);
	},1000)
}


add(1,4,(sum)=>{
	console.log(sum)
})