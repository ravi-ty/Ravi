let count = 0;
const counting = (num) => {
	if(num == 1){
		count++;
	}else if(num == -1){
		if(count >= 1){
		count--;
		}else {count = 0; 
				console.log("num = -1 not works when count = 0");
				}       
	}else if(num == 0){
		count = 0;
	}
  
  return count;
}
module.exports = counting;