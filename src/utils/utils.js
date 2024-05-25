// Function to shuffle the puzzle tiles
// Returns an array of 16 tile objects, each with a value and index
export const shuffle = () =>
    new Array(16) // Create an array with 16 elements
        .fill() // Fill the array with undefined values
        .map((_, i) => i + 1) // Map each element to its index + 1 (values 1 to 16)
        .sort(() => Math.random() - 0.5) // Randomly shuffle the array
        .map((x, i) => ({ value: x, index: i })); // Map each value to an object with value and index

// Function to check if the shuffled puzzle is solvable
// Parameters:
// - numbers: Array of tile objects containing value and index
// Returns a boolean indicating whether the puzzle is solvable
export const isSolvable = (numbers) => {
    let inversions = 0; // Initialize the inversion count
    const flattened = numbers.map(n => n.value); // Flatten the array to get the tile values

    // Count the number of inversions in the array
    for (let i = 0; i < flattened.length - 1; i++) {
        for (let j = i + 1; j < flattened.length; j++) {
            if (flattened[i] !== 16 && flattened[j] !== 16 && flattened[i] > flattened[j]) {
                inversions++;
            }
        }
    }

    // Calculate the row of the empty tile (16) from the bottom
    const emptyRowFromBottom = 4 - Math.floor(numbers.find(n => n.value === 16).index / 4);

    // Determine solvability based on the inversion count and the row of the empty tile
    return (emptyRowFromBottom % 2 === 0) ? (inversions % 2 !== 0) : (inversions % 2 === 0);
};
