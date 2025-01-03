function minMax(arr) {
    let N = arr.length;
    if (N === 0) {
        console.log("error")
    }

    let min = arr[0]; 
    let max = arr[0]; 

    for (let i = 0; i < N; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 
			  else if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max]; 
}


//=> some of cubes
function sumOfCubes(nums) {
    if (!Array.isArray(nums)) {
        console.log("should be an array")
    }

    let sum = 0; 
    for (let num of nums) {
        sum += num ** 3; 
    }

    return sum; 
}

console.log(sumOfCubes([1, 2, 3]));

//=>filter out strings from an array

function filterArray(arr) {
	return arr.filter(a => typeof a === 'number');
}

function filterArray(arr) {
    let arr1=[];
    for(let i=0; i<arr.length; i++){
       if(typeof arr[i] === 'Number'){
           arr1.push(arr[i])
    }
    }
    return arr1;
    }


//=>Is the number symmetrical?

function isSymmetrical(num) {
	const numstr = num.toString();
	for ( let i=0 ; i<numstr.length ; i++){
		if(numstr[i] != numstr[numstr.length-1]){
			return false;
		}
		else{return true;}
	}
}

//=> special Array:

function isSpecialArray(arr) {
	for( let i=0; i<arr.length; i++){
		if(i%2 === 0 && arr[i]%2 !== 0){
			return false
		}
		else if (i%2 !== 0 && arr[i]%2 === 0){
			return false
		}
	}
	return true
}
 
//=>how much is true:
function countTrue(arr) {
	let count = 0
	for( let i=0; i<arr.length; i++){
		if(arr[i] === true){
			count++
			}
	}
	return count;
}

//=>Convert Key, Values in an Object to Array
function objectToArray(obj) {
	return Object.entries(obj)
	
}


//=>Array of Multiples
function arrayOfMultiples (num, length) {
	let arr=[]
	for( let i=1; i<=length; i++){
		arr.push(i*num)
	}
	return arr
}


//=>Square Every Digit
function squareDigits(n) {
	return Number((n.toString().split('').map(num => parseInt(num) * parseInt(num)).join('')))
}

//=>25-Mile Marathon

function marathonDistance(d) {
	if(!d || d.length === 0 ){
		return false
	}
	let sum = 0
	for( let i=0; i<d.length; i++){
		sum += Math.abs(d[i])
	}
	return sum === 25
}



