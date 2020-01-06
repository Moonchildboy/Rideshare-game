
// // class Trip
// class Trip {
// 	// constructor(){} takes origin -- 
// 	constructor(origin, destination) {

// 	const randomShort = [this.points = this.trips * .65, this.points = this.trips * .85, this.points = this.trips * .9]
// 	const long = [this.points = this.trips * 1.2] 
// 	// const random tip [] <-- 

// 	this.origin: [
// 	{neighborhood:function(){this.points = this.trips * .89}}, //put curly values inside of an array √√√
// 	{downtown:function(){this.points = this.trips * .89}}, //try Math.floor(Math.random() * )
// 	{airport:function(){this.points = this.trips * .89}},
// 	{suburbub:function(){this.points = this.trips * .89}}
// 	]
// 	// based on origin, set random dest -- n, d, a, sub

// 	if (origin === this.neighborhood){
// 		//const destination = [Math.floor(Math.random() * origin.length)
// 		//keep track of user 
// 		this.points = this.trips * .89
// 	// and short/long (dist) -- dictates earnings
// 		}
// 	// getValue() {}
// 	}

// } //end of class





class Trip {

	constructor(lorem) {

		// later: use origin + destination to determine value

		// this.lorem = Math.random() * 30
	}

}

















const game = { 
	points: 0, // 
	days: 0, // equivalent to rounds
	trips: 0, // []

	currentRegion: "", // this will be set when user clicks region

	tripRequest: null,

	userLocation: [], 

	// called when user clicks button
	chooseRegion(region) {
		// sets currentRegion to region

		// tell the user the region they chose  (use KPI scoreboard)
		console.log(region);

		this.currentRegion = this.region
		const showOrigin = document.querySelector('#region')
		showOrigin.innerText = this.region

		console.log(this.currentRegion);
		// this.getNextTrip()


	},

	getNextTrip() {
		// create Trip -- instantiate (later: use currentRegion)


		// <<< Darron: build out trip class now >>>


		// object -- store in this.tripRequest

		// displayTripRequest()

	},


	displayTripRequest() { //stage method that increments KPIs √√√
		

		const options = document.querySelector('#options')
	
		options.innerText = 'You have a new request!'
		
		// show the buttons 
		const displayButtons = document.querySelector



/* 1. 	

		Also add rating buttons in html and hide them

*/
		
	},//End of 1st Method

	accept() {

		// text telling what happened -- 28 pts user was rude etc

		// adds points to scoreboard

		// prompt for rating (add more text) -- show ragin buttons


	},

	rateRider() {
		// hide rating buttons

		// getNextTrip()


	},

	decline() {

		// -1 point, tell user, 

		// pickWhereToStartMessage

	},


	goalSetter(){

		const bills = [9, 14, 19]

		const goals = document.querySelector("#goal-text")

		const interface = document.createElement('p')
		interface.innerText = `Make at least $${bills[Math.floor(Math.random() * bills.length)]} today!` //if points are less than this number by the end of the day, player loses round. 

		goals.appendChild(interface)

	},

	requestCycleCentral () { // 1B. on click of the downtown button call the following code block. // call central param to denote origin in if statment
		const region = document.querySelector('#downtown') //button
		const dtRequest = document.createElement('p')
		dtRequest.innerText = `you've have a request`
		// setAttribute,
		region.appendChild(dtRequest) //appending a p to a button may be problematic. consider appending a button to the p tag. 

		
		// on accept do the following 
		// const origin = this.central // not yet an option
		// const destination = //Math.floor(Math.random() * mixedtrips.length)// not yet an option
		// if (origin === central and destination === n, s, ap, or, dt) {
			//}

	}

// 	// where is user (n, s, d, a) -- store data here <--- why am I storing this data


// 	// choseLocation: function(Origin) {
// 		// set location //<-- this.
// 		// once sets, random trip
// 	// }

// 	// shortTrip: function () { //redacted },

}//End of Game Object 


// when game loads...
game.goalSetter()

document.querySelector('#downtown').addEventListener('click', (e) => {// move outside of obj later. insert actual functionality also. 
	// console.log(e.target);
	game.chooseRegion('downtown') // pass argument here
	
})

document.querySelector('#airport').addEventListener('click', (e) => {// move outside of obj later. insert actual functionality also. 
	// console.log(e.target);
	console.log('airport')
	game.chooseRegion('airport') // pass argument here
	
})



document.querySelector('#central').addEventListener('click', (e) => {
	console.log('downtown')

	// console.log(e.target);

	// game.pickWhereToStartMessage()	
})



// document.querySelector('#confirm').onclick = function () {// move outside of obj later. insert actual functionality also. 
// 	console.log(e.target);

// 	game.pickWhereToStartMessage()	
	
// 	;}

// document.querySelector('#confirm').addEventListener('click', game.pickWhereToStartMessage(){
	// document.querySelector('#choose-region').hidden = true;}, false)































