const game = { 
	points: 0,
	days: 0, // equivalent to rounds
	trips: 0,

	grind: function () { //stage method
		
		for (let i = 0; i < 11; i++) {
		const input = prompt ("Accept trip? (yes/no)") 
		if (input === "yes") {
			this.trips += 1
			
			console.log(this.trips); 
			if (this.trips % 10 === 0) {
				this.days +=1
				console.log(this.days); 
				} 
			}	
		}
	},//End of 1st Method

}//End of Game Object 
game.grind()
