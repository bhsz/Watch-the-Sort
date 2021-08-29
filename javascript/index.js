// Desktop only
if (window.innerHeight < 900 || window.innerWidth < 1024) {
	document.body.innerHTML = "";

	let error = document.createElement("h4");
	error.textContent = "Please ensure that window is at least 1024px wide and 900px tall.";

	document.body.appendChild(error);
} else {
	// Initialise elements
	const arraySizeSlider = document.getElementById("array-size");
	const sortSpeedSlider = document.getElementById("sort-speed");
	const algoSelector = document.getElementById("algo-select");
	const sortButton = document.getElementById("sort-btn");
	const resetButton = document.getElementById("reset-btn");

	// Initialise values on screen
	buildBars(arraySizeSlider.value);
	setSortSpeed(sortSpeedSlider.value);

	// Initialise event listeners
	arraySizeSlider.addEventListener("change", (e) => {
		let selectedValue = e.target.value;
		buildBars(selectedValue);
	});

	sortSpeedSlider.addEventListener("change", (e) => {
		let selectedValue = e.target.value;
		setSortSpeed(selectedValue);
	});

	const sort = async () => {
		arraySizeSlider.disabled = true;
		sortSpeedSlider.disabled = true;
		algoSelector.disabled = true;
		sortButton.disabled = true;
		resetButton.disabled = true;

		let selectedAlgo = document.getElementById("algo-select").value;
		let sortAlgo = algorithms[selectedAlgo];
		let arr = document.getElementById("array-container").childNodes;
		await sortAlgo(arr, getSpeedDelay(sortSpeedSlider.value));

		setCompleteSort(arr);
		alert("Sort complete!");

		arraySizeSlider.disabled = false;
		sortSpeedSlider.disabled = false;
		algoSelector.disabled = false;
		sortButton.disabled = false;
		resetButton.disabled = false;
	};
	sortButton.addEventListener("click", (_) => {
		sort();
	});

	resetButton.addEventListener("click", (_) => {
		buildBars(arraySizeSlider.value);
	});
}
