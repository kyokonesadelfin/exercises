
// function reverseString(str) {
    
//     var splitString = str.split("")

//     var reverseArray = splitString.reverse();

//     var joinArray = reverseArray.join("");

//     console.log(splitString);
// }

// reverseString("Kyokonesa");


function reverseString(str) {

    var newString = "";

    for(var i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i];
    }

    console.log(newString);
}

reverseString("Kyokonesa");