function gensequences(numsequences, env, horizon) {


	// FUNCTION TO CREATE ARRAY OF OUTCOMES, N IS LENGTH OF ARRAY, P IS PROBABILITY FROM BERNOULLI
	function rbernoulli(n,p) {
		var k;
		var benarray = new Array(n)
		for (k = 0; k < n; k++) {
				benarray[k] = Math.random() < p ? 1 : 0;
		};
	return benarray;
};


// // GENERATE THOUSANDS OF SEQUENCES BASED ON HORIZON
// for (s = 0; s < numsequences; s++) {
// 	var hello = new Array(s)
// 	 hello[s] = rbernoulli(horizon,0.5);
// };

// FUNCTION TO CREATE EMPTY ARRAY OF ARRAYS BASED ON NUMSEQUENCES
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
}

var newArray = createArray(numsequences, horizon); //

//FILL ARRAY WITH SEQUENCES
for (s = 0; s < numsequences; s++) {
	 newArray[s] = rbernoulli(horizon,0.5);
};

//newArray has [numsequences][horizon]

// console.log(newArray)
// console.log(newArray[1][7])
// console.log(newArray[1][1])
// console.log(newArray[1][0])

// console.log(hello)


// CHECK WHICH SEQUENCES HAVE 75% 1S

// FUNCTION TO SUM ARRAY
function sum(input){
 if (toString.call(input) !== "[object Array]")
    return false;

            var total =  0;
            for(var i=0;i<input.length;i++)
              {
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
					 } //end of sum function

// FOR EACH SEQUENCE, CHECK SUM, IF SUM IS CORRECT, ADD SEQUENCE TO NEW ARRAY
var sumArray = new Array;
var corrArray = new Array;
// for (s = 0; s < numsequences; s++) {
// 		sumArray[s] = sum(newArray[s]);  //sum array 1 (sequence1)
// 	};

	for (s = 0; s < numsequences; s++) {
			sumArray[s] = sum(newArray[s]);  //sum array 1 (sequence1)
			if (sumArray[s] === 6) {
				corrArray[s] = newArray[s]
			} else {
			}
		};

// console.log(sumArray)
// console.log(corrArray)



// console.log(sum(newArray[0]));  //sum array 1 (sequence1)
// console.log(sum(newArray[1]));  //sum array 2

// console.log(sum); // Prints: 15


return newArray;

}
