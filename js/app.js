


// define rounds and goals. firstly finish building out class and scoreboad. then go to goal setter method. 
	// store goal (and make it higher)
	// check goal on next trip
	// reduce count


// if goal met -- let them win a day -- endDay() <<---- another conversation. 
	// change goals to array 
	// track days
	// after last day, after last trip, win/lose?



// where is user (n, s, d, a) -- store data here <--- why am I storing this data


class Trip {

	// constructor gets called when you instatitate
	constructor() { //(origin, destination) 

		// later: use origin + destination to determine value
		this.value = Math.floor(Math.random() * 30)
	}

}

const game = { 
	points: 0, // 
	days: 1, // equivalent to rounds
	trips: [], /// number  of trips is trips.length
	currentRegion: "", // this will be set when user clicks region
	tripRequest: null, // defined in the getNextTrip() method
	userLocation: [], // base

	// trips left -- so you can lose -- limit 10 or 12

	// today's goal

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

		// check stuff

		// if 0 -- 
			// if goal not met 
				// lose 
				// return 


		// did they meet their goal?

		// if goal met
			// let them stop offer them to stop? (win for 1 round)


		// reduce trips left


		// create Trip -- instantiate (later: use currentRegion)
		const nextTrip = new Trip() // value automatically set
				
		// object -- store in this.tripRequest √√√
		this.tripRequest = nextTrip
		console.log('this is trip requests',this.tripRequest);

		this.displayTripRequest() //perhaps shouldn't call here as much as in a listener

	},

	lose() {

	},

	displayTripRequest() { 

		const options = document.querySelector('#options')
	
		options.innerText = 'You have a new request!' //shuold this be moved to the chooseRegion() method? 
		
		// show the buttons 
		const displayButtons = document.querySelectorAll('.displayRequest')

		displayButtons[0].style.display = 'inline-block'
		displayButtons[1].style.display = 'inline-block'  //create a listener for each of these buttons
		
		const ratings = document.querySelectorAll('.rating')

		ratings[0].style.display = 'none'
		ratings[1].style.display = 'none'
		ratings[2].style.display = 'none'
		ratings[3].style.display = 'none'

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
		const tripCount = document.querySelector('#trip-count')
		tripCount.innerHTML = this.trips.length
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
			// console.log('this is the number of trips accepted', this.trips);//logs an infinite loop...
		}
		this.rateRider() //should this be called here or on a button click
	},

	rateRider() { //button click calls the displayTripRequest() method. Restarts accept cycle
		const rate = document.querySelector('#options')
		options.innerText = 'Rate your rider ...'

		const ratings = document.querySelectorAll('.rating')
		for (let i = 0; i < ratings.length; i ++) {
			ratings[i].style.display = 'inline-block'
		}

	},

	decline() { 
		// -1 point, tell user, 

		// pickWhereToStartMessage

	},

	goalSetter(){

		const bills = [9, 14, 19] 

		const goals = document.querySelector("#goal-text")

		const interface = document.createElement('p')
		//if points are less than this number by the end of the day, player loses round. 
		// store goal in this. today's goal
		interface.innerText = `Make at least $${bills[Math.floor(Math.random() * bills.length)]} today!` 

		goals.appendChild(interface)

	},

	requestCycleCentral () { // 1B. on click of the downtown button call the following code block. // call central param to denote origin in if statment
		const region = document.querySelector('#downtown') //button
		const dtRequest = document.createElement('p')
		dtRequest.innerText = `you've have a request`
		// setAttribute,
		region.appendChild(dtRequest) //appending a p to a button may be problematic. consider appending a button to the p tag. 
		

	},


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

// change to querySelectorAll -- use for loop to add listeners to each
const fourStars = document.querySelectorAll('.rating')
for(i = 0; i < fourStars.length; i ++){
fourStars[i].addEventListener('click', (e) => {
;
	game.getNextTrip() 	
})}































