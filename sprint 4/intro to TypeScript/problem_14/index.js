function getThirdElement(arr) {
    if (arr.length < 3) {
        console.error("Error: The array has fewer than three elements.");
        return undefined;
    }
    return arr[2];
}
var numbers = [1, 2, 3, 4];
var words = ["apple", "banana", "cherry", "date"];
var shortArray = [10, 20];
console.log(getThirdElement(numbers));
console.log(getThirdElement(words));
console.log(getThirdElement(shortArray));
