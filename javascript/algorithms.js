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
};
