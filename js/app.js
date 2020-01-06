
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

// consider a Region class for which varying methods will be applied.
class Region {
	constructor(neighborhood) {
		// this.Neighborhood = <-- why include this line
		const origin = this.neighborhood //pulls destinations randomly
		const destinations = [neighborhood, neighborhood, downtown, suburb]
	}
}


const game = { 
	points: 0,
	days: 0, // equivalent to rounds
	trips: 0, // []
	userLocation: [],

	pickWhereToStartMessage () { // 1A. this is the event handler method() that will instruct user to choose region. [SKIP to request cycle] 

		const pickRegion = document.querySelector('#choose-region')
		const options = document.createElement('p')
		options.setAttribute('id', 'options')
		options.innerText = `Select a region to get started` //consider interpolating options
		pickRegion.appendChild(options)

		// const confirmation = document.createElement('button')
		// confirmation.setAttribute('id', 'confirm')
		// options.appendChild(confirmation)
		// confirmation.innerHTML = 'Go Online'
		// pickRegion.hidden = false
		//include hide/show functionality
		//consider calling the grind method()
	}, 
	grind() { //stage method that increments KPIs √√√
		
		const options = document.querySelector('#options')
	
		options.innerText = 'You have a new request!'
		// show the buttons 


/* 1. move to html
		const confirmation = document.createElement('button')
		confirmation.setAttribute('id', 'confirm')
		options.appendChild(confirmation)
		confirmation.innerHTML = 'Accept'

		const decline = document.createElement('button')
		decline.setAttribute('id', 'decline')
		options.appendChild(decline)
		decline.innerHTML = 'Decline'//param 1 isn't a type of node


*/
		// if (input === "#confirm") {
		// 	this.trips += 1
		// 	console.log(this.trips); 
		// 	if (this.trips % 10 === 0) {
		// 		this.days +=1
		// 		console.log(this.days); 
		// 	} //adds a day for every 10 trips
		// }	
		
	},//End of 1st Method
	goalSetter(){
		// put the following inside a goal setter method/ call in the staging method
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

game.pickWhereToStartMessage()
game.goalSetter()

document.querySelector('#central').onclick = function () {// move outside of obj later. insert actual functionality also. 
	// console.log(e.target);

	game.grind()	
	
}





document.querySelector('#central').addEventListener('click', (e) => {
	// console.log(e.target);

	// game.pickWhereToStartMessage()	


})

// document.querySelector('#confirm').onclick = function () {// move outside of obj later. insert actual functionality also. 
// 	console.log(e.target);

// 	game.pickWhereToStartMessage()	
	
// 	;}

// document.querySelector('#confirm').addEventListener('click', game.pickWhereToStartMessage(){
	// document.querySelector('#choose-region').hidden = true;}, false)































