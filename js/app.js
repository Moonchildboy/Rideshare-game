const game = { 
	points: 0,
	days: 0, // equivalent to rounds
	trips: 0,

	grind: function () {//
		// for every instance "trips" is less than 1 ++ until trips is equal to 10
		while (this.trips < 10){
			const input = prompt ("Accept trip? (yes/no)") 
			if (input === "yes") {
				this.trips += 1
				console.log(this.trips);
				if (this.trips === 10){
					this.days += 1
					console.log(this.days);
				}
			}
		} 
	},//End of 1st Method

}//End of Game Object 
game.grind()
