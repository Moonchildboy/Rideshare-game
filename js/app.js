


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
		this.value = Math.floor(Math.random() * 10)
	}

}

const game = { 
	currentRegion: "", // this will be set when user clicks region
	points: 0, // 
	tripRequest: null, // defined in the getNextTrip() method
	days: 0, // equivalent to rounds
	dailyGoal: 0,
	trips: [], /// number  of trips is trips.length
	userLocation: [], // base

	// trips left -- so you can lose -- limit 10 <<-- maybe

	// trips for the week []
	// goals for the week []

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
		console.log(game);
		// check stuff

		// if goal met
			// let them stop offer them to stop? (win for 1 round)
		if (this.points >= this.dailyGoal){
			console.log("win")
			const options = document.querySelector('#options')
			const ratings = document.querySelectorAll('.rating')

			ratings[0].style.display = 'none'
			ratings[1].style.display = 'none'
			ratings[2].style.display = 'none'
			ratings[3].style.display = 'none'

			const offline = document.querySelector('#go-offline')
			offline.style.display = 'inline-block'
			const keepDriving = document.querySelector('#keep-driving')
			keepDriving.style.display = 'inline-block'

			options.innerText = 'You\'ve met your goal! Go offline?' //create a go offline button

			return 
		}
		const dayOfWk = document.querySelector('#days')
		dayOfWk.innerHTML = this.days

		// after 10 trips
		if (this.trips.length === 10) { // rounds should increase by 1
			
			console.log("day");
			this.days += 1

			// check lose
			if(this.points < this.dailyGoal) {// supposed lose scenario
				console.log("lose")

				// if goal not met 
				const ratings = document.querySelectorAll('.rating')

				ratings[0].style.display = 'none'
				ratings[1].style.display = 'none'
				ratings[2].style.display = 'none'
				ratings[3].style.display = 'none'

				const options = document.querySelector('#options')
				options.innerText = 'Might as well go offline'
				
				return
				// lose 


			} else {
				// win 
				// good job see you tomorrow
			}

			// reset goal for tomorrow
			// change scoreboard -- add today's data, 
			// reset daily data, and show, move things to other arrays, set everything back to 0/null/""
			// prompt choose region

		}


		// did they meet their goal?

		// reduce trips left

		// create Trip -- instantiate (later: use currentRegion)
		const nextTrip = new Trip() // value automatically set
				
		// object -- store in this.tripRequest √√√
		this.tripRequest = nextTrip
		console.log('this is trip requests',this.tripRequest);

		this.displayTripRequest() //perhaps shouldn't call here as much as in a listener //, may be overriding 
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
		status.innerText = `You've earned $${this.tripRequest.value}!`  //from where should earnings be pulled?
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

		const bills = [100, 150, 250, 300] 

		const goals = document.querySelector("#goal-text")

		const interface = document.createElement('p') //consider creating in html in order to hide and show
		//if points are less than this number by the end of the day, player loses round.
		const rndBill = bills[Math.floor(Math.random() * bills.length)] 
		// store goal in this. today's goal
		interface.innerText = `Make at least $${rndBill} today!` 

		this.dailyGoal += rndBill
		const goal = document.querySelector('#daily-goal')
		goal.innerText = rndBill

		goals.appendChild(interface) //consider creating in html

	},

	requestCycle () { // 1B. on click of the downtown button call the following code block. // call central param to denote origin in if statment
		const region = document.querySelector('#downtown') //button
		const dtRequest = document.createElement('p')
		dtRequest.innerText = `you've have a request`
		// region = 
		// setAttribute,
		region.appendChild(dtRequest) //appending a p to a button may be problematic. consider appending a button to the p tag. 
	},


}//End of Game Object 

console.log(game);
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
for(i = 0; i < fourStars.length; i++){
	fourStars[i].addEventListener('click', (e) => {
		game.getNextTrip() 	
	})
}































