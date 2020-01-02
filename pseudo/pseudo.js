pseudo.js
const game = { 
	points: 0,
	days: 0, // equivalent to rounds
	trips: 0,

	grind: function () {//
		// for every instance days is less than 1 ++ until trips is equal to 10
		if (this.trips <= 10){
			const = prompt ("Accept trip?" "(yes/no)" ) 
			if (input === "yes") {
				this.trips += 1
			}
		} 
		if (this.trips === 10){
			this.day + 1
		}

	},

}//End of Game Object 

// call game object