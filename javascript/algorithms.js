//  ___      _    _    _       ___          _
// | _ )_  _| |__| |__| |___  / __| ___ _ _| |_
// | _ \ || | '_ \ '_ \ / -_) \__ \/ _ \ '_|  _|
// |___/\_,_|_.__/_.__/_\___| |___/\___/_|  \__|
// *********************************************

// Proper optimised version
// const bubbleSort = (arr) => {
// 	for (var i = 0; i < arr.length - 1; i++) {
// 		for (var j = 0; j < arr.length - i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				swap(arr[j], arr[j + 1]);
// 			}
// 		}
// 	}
// };

// For visualisation
const bubbleSort = async (arr, delay) => {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			// Red for current bar
			setBgColor(arr[j], SECONDARY_COLOR);
			await sleep(delay);

			if (elemHeight(arr[j]) > elemHeight(arr[j + 1])) {
				swapHeight(arr[j], arr[j + 1]);
			}
			// Reset color for current bar
			setBgColor(arr[j], PRIMARY_COLOR);
		}
		setBgColor(arr[arr.length - 1 - i], SUCCESS_COLOR);
	}
};

//  ___                  _   _            ___          _
// |_ _|_ _  ___ ___ _ _| |_(_)___ _ _   / __| ___ _ _| |_
//  | || ' \(_-</ -_) '_|  _| / _ \ ' \  \__ \/ _ \ '_|  _|
// |___|_||_/__/\___|_|  \__|_\___/_||_| |___/\___/_|  \__|
// ********************************************************

// Proper version
// const insertionSort = async (arr) => {
// 	for (var i = 1; i < arr.length; i++) {
// 		let curr = i;
// 		let pred = i - 1;
// 		while (pred >= 0 && arr[curr] < arr[pred]) {
// 			swap(arr[curr--], arr[pred--]);
// 		}
// 	}
// };

// For visualisation
const insertionSort = async (arr, delay) => {
	for (var i = 1; i < arr.length; i++) {
		let curr = i;
		let pred = i - 1;

		// Red for current bar
		setBgColor(arr[curr], SECONDARY_COLOR);
		await sleep(delay);

		// Swap to front while smaller
		while (pred >= 0 && elemHeight(arr[curr]) < elemHeight(arr[pred])) {
			swapHeight(arr[curr], arr[pred]);
			setBgColor(arr[curr--], PRIMARY_COLOR);
			setBgColor(arr[pred--], SECONDARY_COLOR);
			await sleep(delay);
		}
		// Reset color of current bar
		setBgColor(arr[curr], PRIMARY_COLOR);
	}
};

//  ___      _        _   _            ___          _
// / __| ___| |___ __| |_(_)___ _ _   / __| ___ _ _| |_
// \__ \/ -_) / -_) _|  _| / _ \ ' \  \__ \/ _ \ '_|  _|
// |___/\___|_\___\__|\__|_\___/_||_| |___/\___/_|  \__|
// *****************************************************

// Proper version
// const selectionSort = async (arr, delay) => {
// 	for (var i = 0; i < arr.length; i++) {
// 		let indexOfMin = i;
// 		for (var j = i; j < arr.length; j++) {
// 			if (arr[j] < arr[indexOfMin]) {
// 				indexOfMin = j;
// 			}
// 		}
// 		swap(arr[i], arr[indexOfMin]);
// 	}
// };

// For visualisation
const selectionSort = async (arr, delay) => {
	for (var i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (var j = i; j < arr.length; j++) {
			// Red for current bar
			setBgColor(arr[j], SECONDARY_COLOR);
			await sleep(delay);

			if (elemHeight(arr[j]) < elemHeight(arr[indexOfMin])) {
				// Reset color of old min bar and set color of new min bar
				setBgColor(arr[indexOfMin], PRIMARY_COLOR);
				indexOfMin = j;
				setBgColor(arr[indexOfMin], THIRD_COLOR);
			} else {
				// Reset colour of current bar
				setBgColor(arr[j], PRIMARY_COLOR);
			}
		}

		// Swap min to i and reset colors
		swapHeight(arr[i], arr[indexOfMin]);
		setBgColor(arr[indexOfMin], PRIMARY_COLOR);
		setBgColor(arr[i], SUCCESS_COLOR);
	}
};

//  __  __                    ___          _
// |  \/  |___ _ _ __ _ ___  / __| ___ _ _| |_
// | |\/| / -_) '_/ _` / -_) \__ \/ _ \ '_|  _|
// |_|  |_\___|_| \__, \___| |___/\___/_|  \__|
// 							 |___/
// ***********************************(Inplace)

// Proper version
// const mergeSort = (arr, l, r) => {
// 	if (l >= r) {
// 		return;
// 	}

// 	let m = Math.floor((l + r) / 2);
// 	mergeSort(arr, l, m, delay);
// 	mergeSort(arr, m + 1, r, delay);
// 	merge(arr, l, m, r, delay);
// };

// const merge = (arr, l, m, r) => {
// 	let p1 = l;
// 	let p2 = m + 1;

// 	while (p1 <= m && p2 <= r) {
// 		if (arr[p1] <= arr[p2]) {
// 			p1++;
// 		} else {
// 			let index = p2;
// 			while (index > p1) {
// 				swap(arr[index], arr[index - 1]);
// 				index--;
// 			}
// 			p1++;
// 			m++;
// 			p2++;
// 		}
// 	}
// };

// For visualisation
const mergeSortWrapper = async (arr, delay) => {
	await mergeSort(arr, 0, arr.length - 1, delay);
};

const mergeSort = async (arr, l, r, delay) => {
	if (l >= r) {
		return;
	}

	let m = Math.floor((l + r) / 2);
	await mergeSort(arr, l, m, delay);
	await mergeSort(arr, m + 1, r, delay);
	await merge(arr, l, m, r, delay);
};

const merge = async (arr, l, m, r, delay) => {
	let p1 = l;
	let p2 = m + 1;

	while (p1 <= m && p2 <= r) {
		setBgColor(arr[p1], SECONDARY_COLOR);
		setBgColor(arr[p2], SECONDARY_COLOR);

		await sleep(delay);

		if (elemHeight(arr[p1]) <= elemHeight(arr[p2])) {
			p1++;
			setBgColor(arr[p2], PRIMARY_COLOR);
		} else {
			let index = p2;
			while (index > p1) {
				swapHeight(arr[index], arr[index - 1]);
				index--;
			}
			p1++;
			m++;
			setBgColor(arr[p2], PRIMARY_COLOR);
			p2++;
		}
		setBgColor(arr[p1 - 1], PRIMARY_COLOR);
	}
};

//   ___       _    _     ___          _
//  / _ \ _  _(_)__| |__ / __| ___ _ _| |_
// | (_) | || | / _| / / \__ \/ _ \ '_|  _|
//  \__\_\\_,_|_\__|_\_\ |___/\___/_|  \__|
// ****************************************

// Proper version
// const quicksort = (arr, l, r) => {
// 	if (l >= r) {
// 		return;
// 	}

// 	let pivotIndex = partition(arr, l, r);
// 	quicksort(arr, pivotIndex + 1, r);
// 	quicksort(arr, l, pivotIndex - 1);
// };

// const partition = (arr, l, r) => {
// 	const pivot = arr[r];

// 	// 2 iterators technique
// 	let lessThan = l;
// 	for (var i = l; i < r; i++) {
// 		if (arr[i] <= pivot) {
// 			swap(arr[lessThan++], arr[i]);
// 		}
// 	}

// 	swap(arr[lessThan], arr[r]);
// 	return lessThan;
// };

// For visualisation
const quicksortWrapper = async (arr, delay) => {
	await quicksort(arr, 0, arr.length - 1, delay);
};

const quicksort = async (arr, l, r, delay) => {
	// Single bar is sorted
	if (l >= r) {
		let index = Math.max(Math.min(l, r), 0);
		setBgColor(arr[index], SUCCESS_COLOR);
		return;
	}

	// Partition and quicksort on each side
	let pivotIndex = await partition(arr, l, r, delay);
	await quicksort(arr, l, pivotIndex - 1, delay);
	await quicksort(arr, pivotIndex + 1, r, delay);
};

const partition = async (arr, l, r, delay) => {
	// Visualisation for range of partition
	setBgColor(arr[l], SECONDARY_COLOR);
	setBgColor(arr[r], SECONDARY_COLOR);
	await sleep(delay);

	// Select pivot as last element of range
	const pivot = elemHeight(arr[r]);
	// Initialise smallest element index
	let lessThan = l;
	showHere(arr[lessThan]);

	for (var i = l; i < r; i++) {
		// Visualisation for current bar
		setBgColor(arr[i], THIRD_COLOR);
		await sleep(delay);

		// If current bar smaller than pivot, swap and update smallest index
		if (elemHeight(arr[i]) <= pivot) {
			hideHere(arr[lessThan]);
			swapHeight(arr[lessThan++], arr[i]);
			showHere(arr[lessThan]);
		}

		// Reset colour of current bar (If left bound, set to red)
		setBgColor(arr[i], i == l ? SECONDARY_COLOR : PRIMARY_COLOR);
	}

	// Swap pivot to correct position
	await sleep(delay);
	swapHeight(arr[lessThan], arr[r]);
	hideHere(arr[lessThan]);
	setBgColor(arr[lessThan], SUCCESS_COLOR);

	// If the correct position is not right bound, reset to primary color
	await sleep(delay);
	if (r != lessThan) {
		setBgColor(arr[r], PRIMARY_COLOR);
	}

	return lessThan;
};

//     _                     __  __
//    /_\  __ __ ___ ______ |  \/  |__ _ _ __
//   / _ \/ _/ _/ -_|_-<_-< | |\/| / _` | '_ \
//  /_/ \_\__\__\___/__/__/ |_|  |_\__,_| .__/
//                                      |_|
// *******************************************

const algorithms = {
	"bubble-sort": bubbleSort,
	"insertion-sort": insertionSort,
	"selection-sort": selectionSort,
	"merge-sort": mergeSortWrapper,
	"quick-sort": quicksortWrapper,
};
