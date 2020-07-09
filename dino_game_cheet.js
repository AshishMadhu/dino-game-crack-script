/**
	Coding beast
**/
const dino = Runner.instance_;
var html_body = document.firstElementChild;
var speed = 5;

window.addEventListener('keydown', (event) => {
	if(event.key == 'a' || event.key == 'A') {
		window.gameOver = dino.gameOver;
		dino.gameOver = function() {}
	} else if(event.key == 's' || event.key == 'S') {
		speed += 5;
		dino.setSpeed(speed);
	} else if(event.key == 'd' || event.key == 'D') {
		speed -=5;
		if(speed <= 0) speed = 5
		dino.setSpeed(speed);
	} else if(event.key == 'f' || event.key == 'F') {
		html_body.classList.toggle('inverted');
	} else if(event.key == 't' || event.key == 'T') {
		toggleTable();
	} else if(event.key == 'g' || event.key == 'G') {
		dino.gameOver = () => window.gameOver.call(dino);
	}
});



var table_show = false;
var	table_div = createTableAndReturnContainer();
function toggleTable() {
	table_show = table_show ? false : true;
	if (table_show) table_div.style.visibility = 'visible';
	else table_div.style.visibility = 'hidden';
}

function createTableAndReturnContainer() {
	var row = 2;
	var coloumns = 7;
	var table_div = document.createElement("div");
	table_div.style.visibility = 'hidden';
	var h3 = document.createElement("h3");
	h3.style.color = "grey";
	h3.style.width = 'fit-content';
	h3.style.margin = '10px auto';
	h3.innerHTML = "Created by coding beast";

	var table = document.createElement("table");
	table.setAttribute("id", "table");
	table.setAttribute("border", "3");
	table.setAttribute("bordercolor", "grey");
	table.setAttribute("align", "center");
	table.setAttribute("cellspacing", "16");
	table.setAttribute("cellpadding", "5");
	table.setAttribute("width", "80%");

	table_div.appendChild(h3);

	var codes = [
		"To Do",
		"No Game Over",
		"Game Over back",
		"Decrease speed",
		"Increase speed",
		"Night Mode",
		"Show codes",
		"Cheat Codes",
		"a",
		"g",
		"d",
		"s",
		"f",
		"t",
	];

	var td = [],
		tr = [];
	let count = 0;
	for (let i = 0; i < row; i++) {
		tr[i] = document.createElement("tr");
		for (let j = 0; j < coloumns; j++) {
			if (i == 0 && j == 0) {
				td[j] = document.createElement("th");
				td[j].setAttribute("bgcolor", "grey");
				td[j].style.color = "white";
				td[j].innerHTML = codes[count];
				count++;
			} else if (i == 1 && j == 0) {
				td[j] = document.createElement("th");
				td[j].setAttribute("bgcolor", "grey");
				td[j].style.color = "white";
				td[j].innerHTML = codes[count];
				count++;
			} else if (i == 1 && j != 0) {
				td[j] = document.createElement("td");
				td[j].setAttribute("align", "center");
				td[j].setAttribute("style", "font-weight: bold; color : #504444");
				td[j].innerHTML = codes[count];
				count++;
			} else if (i == 0 && j != 0) {
				td[j] = document.createElement("td");
				td[j].setAttribute("align", "center");
				td[j].setAttribute("style", "font-weight: bold; color : grey");
				td[j].innerHTML = codes[count];
				count++;
			}
			tr[i].appendChild(td[j]);
		}
		table.appendChild(tr[i]);
	}
	table_div.appendChild(table)
	document.body.appendChild(table_div);
	return table_div;
}