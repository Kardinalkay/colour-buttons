	
	// Background toggle feature

	let colours = ['rgba(246, 34, 23, .5)', 'rgba(80, 235, 236, .5)', 'rgba(52, 124, 44, .5)'];

	let el = document.querySelectorAll('.toggle-bg-color button');

	for (let i=0; i < el.length; i++) {
	    el[i].addEventListener ('click', function () {
	        // let className = this.className;
	        document.querySelector("body").style.background = colours[i];
	    }, false);
	}