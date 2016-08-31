

var rand = function	(min,max){
	return min + Math.random() * (max - min);
}

// A function that picks a random item from the provided array and returns it.
var randomItemFromArray = function(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}