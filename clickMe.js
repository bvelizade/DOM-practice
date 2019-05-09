

// var button = document.querySelector("#btn");

// button.addEventListener("click", function(){
// 	var bodys = document.body.style.backgroundColor;

// 			if(bodys === "pink"){
// 		document.body.style.backgroundColor = "white";
// 	}		else{
// 		document.body.style.backgroundColor = "pink";
// 	};
// 	});

	
		
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementsByTagName("button")[0];
const myTextInput = document.getElementById("myTextInput");


myButton.addEventListener("click", () => {
	
	myHeading.style.borderStyle = "solid";
	myHeading.style.borderWidth = "5px";
	myHeading.style.borderColor = myTextInput.value;
	});

const p = document.getElementsByTagName('p')[0];
const secondBtn = document.querySelector("#secondBtn");
const secondInput = document.querySelector("#secondInput");

secondBtn.addEventListener('click', () => {
		p.textContent = secondInput.value;
		myHeading.textContent = secondInput.value;
});

//Changing BG color
//Changing BG color
//Changing BG color

const thirdBtn = document.getElementById("thirdBtn");
const thirdInput = document.getElementById("thirdInput");
const body = document.getElementsByTagName("body")[0];

thirdBtn.addEventListener("click", () => {
	
	body.style.backgroundColor = thirdInput.value;
	});

//Hiding and Showing with one click
//Hiding and Showing with one click
//Hiding and Showing with one click

const toggleList = document.querySelector("#toggle");
const everything = document.querySelector("#everything");

toggleList.addEventListener("click", () => {
	if(everything.style.display == "none") {
		toggleList.textContent = "Hide list";
		everything.style.display = "block";
	} else {
		toggleList.textContent = "Show list";
		everything.style.display = "none";
	}
});


//adding element
//adding element
//adding element

const addItemInput = document.querySelector("input.addItemInput")
const addItemButton = document.querySelector("button.addItemButton")

addItemButton.addEventListener("click", () => {
	let ul = document.getElementsByTagName("ul")[0];
	let li = document.createElement("li");
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = "";	

})

// removing element from the page
// removing element from the page
// removing element from the page

const removeItemButton = document.querySelector("button.removeItemButton")

removeItemButton.addEventListener("click", () => {
	let ul = document.getElementsByTagName("ul")[0];
	let li = document.querySelector("li:last-child");
	ul.removeChild(li);
})





///function in function in DOM
///function in function in DOM
///function in function in DOM

//syntax
function exec(func, arg){
	func(arg);
}

exec((something) => {
	console.log(something);
}, "Greetings guys");

//with time out. (1000 = 1 second)
//with time out. (1000 = 1 second)
//with time out. (1000 = 1 second)
window.setTimeout((something) => {
	console.log(something);
}, 3000, "salam ayeee");




// BUNA YENIDEN BAXXXXXXXXX!!!!!!!!!!!!!!!!!!!!!!!!!
// BUNA YENIDEN BAXXXXXXXXX!!!!!!!!!!!!!!!!!!!!!!!!!
// BUNA YENIDEN BAXXXXXXXXX!!!!!!!!!!!!!!!!!!!!!!!!!
// BUNA YENIDEN BAXXXXXXXXX!!!!!!!!!!!!!!!!!!!!!!!!!
// BUNA YENIDEN BAXXXXXXXXX!!!!!!!!!!!!!!!!!!!!!!!!!
const listItems = document.getElementsByTagName("li");

listItems.addEventListener("click", (event) => {
	if (event.target.tagName == "BUTTON"){
	let li = event.target.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);
}
});

document.addEventListener("click", (event) => {
	console.log(event.target);
});

