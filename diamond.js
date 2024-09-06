//A nice commented code from ChatGpt

// Function to print diamond pattern
function printDiamond(size) {
    if (size < 1 || size % 2 === 0) {
        console.log("Size must be a positive odd number.");
        return;
    }

    // Upper part of the diamond
    for (let i = 0; i < size; i++) {
        let line = '';

        // Add leading spaces
        for (let j = 0; j < size - i - 1; j++) {
            line += ' ';
        }

        // Add stars
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }

        console.log(line);
    }

    // Lower part of the diamond
    for (let i = size - 2; i >= 0; i--) {
        let line = '';

        // Add leading spaces
        for (let j = 0; j < size - i - 1; j++) {
            line += ' ';
        }

        // Add stars
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }

        console.log(line);
    }
}

// Example usage
const diamondSize = 5; // You can change this to any odd number
printDiamond(diamondSize);
