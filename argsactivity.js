function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
        if(arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

console.log(longestString("kjshfajksfsjfsa", "saf", "ajfgsjkf"));
