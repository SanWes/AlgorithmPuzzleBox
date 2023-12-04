
export default class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }

}






// // Example usage:
// const windowSize = new Size(); // Creates with default size (80, 60)
// console.log(windowSize.width, windowSize.height); // Output: 80 60

// windowSize.resize(100, 120); // Changes size to (100, 120)
// console.log(windowSize.width, windowSize.height); // Output: 100 120
