# Sorting-searching-checkpoint
**Insertion Sort**
This project implements the Insertion Sort algorithm in JavaScript with two counters for improved clarity and efficiency.

**Algorithm Description:**
Insertion Sort is a simple sorting algorithm that works by iterating through an array and inserting each element
into its correct position within a sorted sub-array. It resembles the way we sort playing cards in our hands.

**The algorithm operates as follows:**

Starting with the second element:
Extract the current element (index i) to be inserted as a key.
Traverse the sorted portion:
Compare the key with the elements in the already sorted sub-array (index j).
Move the j pointer forward as long as the elements are less than or equal to the key.
Shift elements in the sorted portion:
Once a larger element is encountered, shift all elements from i to j + 1 to make space for the key.
Insert the key:
Place the key at the correct position (j + 1) in the sorted sub-array.
Repeat:
Increment i to move to the next element and reset j to 0 to start comparing from the beginning of the sorted sub-array.
The process continues until all elements have been inserted into their correct positions, culminating in a fully sorted array.

**Usage:**
Clone this repository.
Open the index.js file.
Modify the unsortedArray variable to contain your desired data.
Run the insertionSort function with the unsorted array as a parameter.
The sorted array will be returned and printed to the console.
**Advantages:**
Easy to understand and implement.
Efficient for small datasets.
Stable sorting algorithm (preserves the relative order of equal elements).
Limitations:
Less efficient for large datasets compared to other sorting algorithms.
Worst-case time complexity is O(n^2).
This project demonstrates the application of the Insertion Sort algorithm in a clear and concise manner,
allowing for easy comprehension and adaptation for different sorting needs.
