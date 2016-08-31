
//<><><><><><><><><><><><>FUNCTIONAL<><><><><><><><><><><><><><><><><><><>

// //------------------Parent class----------------------------//


// var Vehicle = function(options) { //Parent Class
// 	var public = options || {};
// 	public.getName = function() {
// 		return public.name;
// 	};

// 	public.getWheelCount = function() {
// 		return public.wheels + " wheels, ";
// 	};

// 	public.checkForEngine = function() {

// 		return public.engine;		
// 	};

// 	public.displayName = function() {
// 		console.log("This vehicle's name is " + public.getName());
// 	}

// 	public.displayVehicleInfo = function() {
// 		return "This is a " + public.getName() + ". " + public.getWheelCount();
// 	}

// 	return public;
// }

// //----------------Child class----------------------------//

// var Car = function(options) { 
// 	var public = Vehicle(options);

// 	// public.vehicleType = options.vehicleType;
// 	// console.log(public.vehicleType);

// 	public.getDoorCount = function() {

// 		return "It has " + public.doors + " doors, ";
// 	};

// 	public.checkForConvertible = function() {

// 		if(public.convertible == false){
// 			return " and is not a convertible.";
// 		}else {
// 			return " and is not a convertible."
// 		}

// 		// return public.convertible;
// 	};

// 	public.displayCarInfo = function() {
// 		return "This is a " + public.getName() + ". " + public.getDoorCount() + public.getWheelCount() + public.checkForConvertible();
// 	}
// 	return public;
// };
// var Lexus = Car({
// 	name:"Mercedes Benz",
// 	doors:4,
// 	convertible:false,
// 	wheels:4,
// 	engine:true
// });

// var Boat = Vehicle({
// 	name:"Donzi boat",
// 	vehicleType:"Boat",
// 	doors:0,
// 	wheels:0,
// 	coupe:false,
// 	convertible:true
// });

// var Bicycle = Vehicle({
// 	name:"Schwinn brand bicycle",
// 	vehicleType:"Bicycle",
// 	doors:0,
// 	coupe:false,
// 	convertible:false,
// 	wheels:2
// });
// console.log(Lexus.displayCarInfo());
// console.log(Boat.displayVehicleInfo());
// console.log(Bicycle.displayVehicleInfo());


//<><><><><><><><><><><><>PROTOTYPAL<><><><><><><><><><><><><><><><><><><>


// ----------------------Parent Class------------------------------//

// var Vehicle = {
// 	getName: function(){
// 		return this.name;
// 	},

// 	displayName: function(){
// 		console.log("This vehicle's name is " + this.getName());
// 	}
// }


// ----------------------Child Class-----------------------------//

// var Car = Object.create(Vehicle);
// Car.name = "Lexus sedan";
// Car.engine = true;
// Car.wheels = 4;
// Car.doors = 4;


// var Boat = Object.create(Vehicle);
// Boat.name = "V22 boat";
// Boat.engine = true;
// Boat.wheels = 0;
// Boat.doors = 0;

// var Bicycle = Object.create(Vehicle);
// Bicycle.name = "Huffy brand bicycle";
// Bicycle.engine = false;
// Bicycle.wheels = 2;
// Bicycle.doors = 0;

// Vehicle.getWheelCount = function() {
// 	return this.wheels;
// };

// Vehicle.checkForEngine = function() {
// 	if (this.engine == true){
// 		return " It also has an engine."
// 	}else{
// 		return " It does not have an engine."
// 	};
	
// };

// Vehicle.checkForDoors = function() {
// 	return this.doors;
// };

// Vehicle.getVehicleInfo = function() {
// 	console.log("This is a " + this.getName() + "." + " It has " + this.getWheelCount() + " wheels and " + this.checkForDoors() + " doors." + this.checkForEngine());
// };
// Car.getVehicleInfo();
// Boat.getVehicleInfo();
// Bicycle.getVehicleInfo();


//<><><><><><><><><><><><>PSEUDO CLASSICAL<><><><><><><><><><><><><><><><>

//------------------Parent Class----------------------------//

var Vehicle = function(options) {

	this.name = options ? options.name : "";
	this.getName = function() {
		return this.name;
	};

	this.displayName = function () {
		console.log("This vehicle's name is " + this.getName());
	};
};

//-------------------Child Class-----------------------------//
var VehicleType = function(options) {
	this.name = options.name;
	this.engine = options.engine;
	this.wheels = options.wheels;
	this.doors = options.doors;
	
	this.checkForEngine = function() {
		if (this.engine == true){
			return " It also has an engine."
		}else{
			return " It does not have an engine."
		};
	};

	this.getWheelCount = function() {
		return this.wheels;
	};

	this.checkForDoors = function() {
		return this.doors;
	};
	
	this.getVehicleInfo = function () {
		console.log("This is a " + this.getName() + "." + " It has " + this.getWheelCount() + " wheels and " + this.checkForDoors() + " doors." + this.checkForEngine());
	};
}
VehicleType.prototype = new Vehicle();

var Car = new VehicleType({
	name:"Chevy Corvette",
	engine:true,
	wheels:4,
	doors:4
});
Car.getVehicleInfo();


VehicleType.prototype = new Vehicle();

var Boat = new VehicleType({
	name:"Chris Craft Boat",
	engine:true,
	wheels:0,
	doors:0
});
Boat.getVehicleInfo();

VehicleType.prototype = new Vehicle();

var Bicycle = new VehicleType({
	name:"Specialized brand bicycle",
	engine:true,
	wheels:0,
	doors:0
});
Bicycle.getVehicleInfo();






