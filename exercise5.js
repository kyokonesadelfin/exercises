

function reverseArray(arr) {

    var newArray = [];

    for(var i = arr.length - 1; i >= 0; i--) {
        newArray = newArray + arr[i];
    }

    var splitArray = newArray.split("");

    console.log(splitArray);
}

reverseArray([1, 2, 3, 4, 5]);


