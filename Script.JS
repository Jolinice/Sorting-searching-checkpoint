function insertionSort(arr) {
    // We Iterate from 1 to the length of the array using the For loop
    for (let i = 1; i < arr.length; i++) {
        // Save the current element
        let key = arr[i];

        // We compare the current element with the previous elements
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            // we move the previous element to the right
            arr[j + 1] = arr[j];

            // Move to the previous element
            j--;
        }

        // Insert the current element in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Let us test the function
let arr = [12, 11, 13, 5, 6];
console.log("Sorted array is:", insertionSort(arr));