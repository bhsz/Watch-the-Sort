// Constants
const PRIMARY_COLOR = "skyblue";
const SECONDARY_COLOR = "red";
const THIRD_COLOR = "orange";
const SUCCESS_COLOR = "lightgreen";

const SORT_SPEED_STRING = {
	0: "Sloth 🦥",
	1: "Slow",
	2: "Medium",
	3: "Fast",
	4: "The Flash ⚡",
};

const SORT_SPEED_DELAY = {
	0: 250,
	1: 100,
	2: 50,
	3: 25,
	4: 0,
};

// Getter and setter for sort speed
const setSortSpeed = (value) => {
	document.getElementById("sort-speed-val").innerHTML = SORT_SPEED_STRING[value];
};

const getSpeedDelay = (value) => {
	return SORT_SPEED_DELAY[value];
};

// Array and bar generation
const generateArrayOfRandoms = (size) => {
	let arr = [];
	for (var i = 0; i < size; i++) {
		let num = Math.floor(Math.random() * 700 + 100);
		arr.push(num);
	}
	return arr;
};

const buildBars = (size) => {
	document.getElementById("array-size-val").innerHTML = size;

	let arr = generateArrayOfRandoms(size);

	const arrayContainer = document.getElementById("array-container");
	const containerWidth = arrayContainer.offsetWidth - 2;
	const barWidth = containerWidth / arr.length - 2;

	arrayContainer.innerHTML = "";

	for (var i = 0; i < arr.length; i++) {
		let bar = document.createElement("div");
		bar.classList.add("bar");
		bar.style.width = `${barWidth}px`;
		bar.style.height = `${arr[i]}px`;
		arrayContainer.appendChild(bar);
	}
};

// Helper functions for sorting
const swapHeight = async (b1, b2) => {
	let temp = b1.style.height;
	b1.style.height = b2.style.height;
	b2.style.height = temp;
};

// Helper functions for visualisation
const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const setCompleteSort = (arr) => {
	for (var i = 0; i < arr.length; i++) {
		arr[i].style.backgroundColor = SUCCESS_COLOR;
	}
};

// Helper function for bar properties
const elemHeight = (element) => {
	return element.style.height;
};

const setBgColor = (element, color) => {
	element.style.backgroundColor = color;
};
