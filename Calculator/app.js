function insert (num) {
	let input = document.getElementById('input');
	input.value = input.value + num;
}

function clean () {
	let clean = document.getElementById('input');
	clean.value = "";	
}

function back () {
	let input = document.getElementById('input');
	input.value = input.value.substring(0, input.value.length-1)
}

function equal () {
	let input = document.getElementById('input');
	input.value = eval(input.value);
}