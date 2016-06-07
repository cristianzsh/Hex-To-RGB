function convert() {
	hex = document.getElementById('hex').value;
	r = parseInt(hex.substring(0, 2), 16);
	g = parseInt(hex.substring(2, 4), 16);
	b = parseInt(hex.substring(4, 6), 16);
	
	document.getElementById('result').innerHTML = r + ', ' + g + ', ' + b;
	document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	chooseBodyColor(r, g, b);
	
	return false;
}

function chooseBodyColor(r, g, b) {
	if ((r < 140 || g < 140 || b < 140) && (r + g + b < 510)) {
		document.body.style.color = 'white';
	} else {
		document.body.style.color = 'black';
	}
}