
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

	// constructor gets called when you instatitate
	constructor() { //(origin, destination) 

		// later: use origin + destination to determine value
		this.value = Math.floor(Math.random() * 30)
	}

}

const game = { 
	points: 0, // 
	days: 0, // equivalent to rounds
	trips: [], /// number  of trips is trips.length

	currentRegion: "", // this will be set when user clicks region

	tripRequest: null,

	userLocation: [], 

	// called when user clicks button
	chooseRegion(region) {
		// sets currentRegion to region

		// tell the user the region they chose (use KPI scoreboard) √√√
		this.currentRegion = region
		const showOrigin = document.querySelector('#region')
		showOrigin.innerHTML = this.currentRegion

		this.getNextTrip()


	},

	getNextTrip() {
		// create Trip -- instantiate (later: use currentRegion)
		const nextTrip = new Trip() // value automatically set
				
		// object -- store in this.tripRequest √√√
		this.tripRequest = nextTrip

		this.displayTripRequest() //perhaps shouldn't call here as much as in a listener

	},

	displayTripRequest() { 

		const options = document.querySelector('#options')
	
		options.innerText = 'You have a new request!' //shuold this be moved to the chooseRegion() method? 
		
		// show the buttons 
		const displayButtons = document.querySelectorAll('.displayRequest')

		displayButtons[0].style.display = 'inline-block'
		displayButtons[1].style.display = 'inline-block'  //create a listener for each of these buttons
/* 1. 	

		Also add rating buttons in html and hide them
*/		
	},

	accept() {
		const displayButtons = document.querySelectorAll('.displayRequest')

		displayButtons[0].style.display = 'none'
		displayButtons[1].style.display = 'none'

		const status = document.querySelector('#options')

		// text telling what happened -- 28 pts rider was rude etc
		status.innerText = `you've earned $${this.tripRequest.value}!`  //from where should earnings be pulled?
		const acknowledgement = document.querySelector('#okay')
		acknowledgement.style.display = 'inline-block'

		// store trip in the trips array. use this array of objects to access the kpi in the scoreboard method.
		const storeTrip = this.trips.push(this.tripRequest)

		// do not ca

		// prompt for rating (add more text) -- show ragin buttons <--- consider a seperate method
	},

	updateScoreboard() { 

		const acknowledgement = document.querySelector('#okay')
		acknowledgement.style.display = 'none'
		// updateScoreboard() method 

		// adds points to scoreboard 
		for(let i = 0; i < this.trips.length; i ++){
			this.points += this.trips[i].value
			const kpiPoints = document.querySelector('#track-points')
			kpiPoints.innerHTML = this.points
			// console.log(this.points);
			// this.updateScoreboard()
			console.log('this is the scoreboard');
		}
		this.rateRider() //should this be called here or on a button click
	},

	rateRider() {
		const rate = document.querySelector('#options')
		options.innerText = 'Rate your rider ...'

		// call all the buttons
		const ratings = document.querySelectorAll('.rating')

		for (let i = 0; i < ratings.length; i ++) {
			ratings[i].style.display = 'inline-block'
		}
		// hide ratings buttons

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

	},

	// where is user (n, s, d, a) -- store data here <--- why am I storing this data


// 	// choseLocation: function(Origin) {
// 		// set location //<-- this.
// 		// once sets, random trip
// 	// }

// 	// shortTrip: function () { //redacted },

}//End of Game Object 


// when game loads...
game.goalSetter()


document.querySelector('#downtown').addEventListener('click', (e) => {//  
	// console.log(e.target);
	game.chooseRegion('Downtown') // pass argument here
	// game.
	
})
document.querySelector('#airport').addEventListener('click', (e) => {// move outside of obj later. insert actual functionality also. 
	// console.log(e.target);
	game.chooseRegion('Airport') // pass argument here
	
})
document.querySelector('#suburb').addEventListener('click', (e) => {// move outside of obj later. insert actual functionality also. 
	// console.log(e.target);
	game.chooseRegion('Suburb') // pass argument here
	
})
document.querySelector('#neighborhood').addEventListener('click', (e) => {// move outside of obj later. insert actual functionality also. 
	// console.log(e.target);
	game.chooseRegion('Neighborhood') // pass argument here
	
})

document.querySelector('#confirm').addEventListener('click', (e) => {
	// console.log(e.target);
	game.accept()	
})

document.querySelector('#okay').addEventListener('click', (e) => {
	// console.log(e.target);
	game.updateScoreboard()	
})

// document.querySelector('#confirm').onclick = function () {// move outside of obj later. insert actual functionality also. 
// 	console.log(e.target);

// 	game.pickWhereToStartMessage()	
	
// 	;}

// document.querySelector('#confirm').addEventListener('click', game.pickWhereToStartMessage(){
	// document.querySelector('#choose-region').hidden = true;}, false)































