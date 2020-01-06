pseudo.js

//origin is an array of objects with a methods. 
// const origin = [
// {neighborhood (){this.points = this.trips * .89}}, 
// {downtown (){this.points = this.trips * .89}},
// {airport (){this.points = this.trips * .89}},
// {suburbub (){this.points = this.trips * .89}}
// ]

// 1 
	// win/lose scenario <-- if point = __ after day 1, you won the day! otherwise, you loose. 
// 2
	// make long trips and short trips metods that can be ran on Submarket classes 


// call game object

const game = { 
	points: 0,
	days: 0, // equivalent to rounds
	trips: 0, // []
	userLocation: [],
//------------------------------------------------------------------------------------------------------------------------
// Show an element
	grind: function () { //stage method that increments KPIs √√√
		
		const options = document.querySelector('#options')

		for (let i = 0; i < 11; i++) { 
			// const input = prompt("You have a new request: Accept trip? (yes/no)") //call goalSetter
			options.innerText = 'You have a new request'
			if (input === "yes") { //should be an event listener for the accept button
				this.trips += 1
				// this
				console.log(this.trips); 
				if (this.trips % 10 === 0) {
					this.days +=1
					console.log(this.days); 
				} //adds a day for every 10 trips
			}	
		}
	},//End of 1st Method

}//End of Game Object 
game.grind()
game.textBox()
// adapt the following
document.querySelector('#choose-region').onclick = function () {// 

			console.log("live laugh love");
			;}
document.querySelector('#choose-region').addEventListener('click', );