// Task 1.6

function longestString(arr) {
    let result = '';
    arr.map(
        function(str) {
            if (str.length > result.length) {
                return result += str;
            }
        })
        return result;
}

console.log(longestString(["once", " upon", "a", " time"]));













