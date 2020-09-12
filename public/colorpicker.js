var numSquares =6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors =generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors =generateRandomColors(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		}
});


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickcolor();
	//change colordisplay to match picked color
	colordisplay.textContent = pickedcolor;

	messagedisplay.textContent = "";
	resetButton.textContent = "New colors";
	//change color of squares
	for(var i=0;i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colordisplay.textContent = pickedcolor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click event listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedcolor = this.style.backgroundColor;
		//compare color to pickedcolor
		if(clickedcolor === pickedcolor){
			messagedisplay.textContent = "Correct";
			resetButton.textContent = "play again?"
			changecolors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
		} else{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try again";
		}
	});
}

function changecolors(color){
	//loop through all squares
	for(var i=0; i<colors.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = []
//repeat num times
for(var i=0; i<num; i++){
	//get random color and push into arr
	arr.push(randomColor())
}
//return array
return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}