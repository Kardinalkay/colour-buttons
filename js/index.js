	
	// BACKGROUND COLOUR FEATURE

	//let colours = ['rgba(246, 34, 23, .5)', 'rgba(52, 124, 44, .5)', 'rgba(80, 235, 236, .5)'];

	let colours = ['red', 'green', 'blue'];

	let $redBtn = document.querySelector('#red-btn'),
		$greenBtn = document.querySelector('#green-btn'),
		$blueBtn = document.querySelector('#blue-btn');

	console.log('Green Button: %s', $greenBtn);

	let el = document.querySelectorAll('.toggle-bg-color button');

	for (let i=0; i < el.length; i++) {

		// Listen to click on either of 3 buttons : 
	    el[i].addEventListener ('click', function () {

	    	// First remove background colour set on body 
	    	document.querySelector("body").classList.remove('red', 'green', 'blue');

	        // Then now set background colour to the body
	        document.querySelector("body").classList.add(colours[i]);
	        console.log(el);
	    }, false);
	}