
// The Number of words in a sentence, Number of Letters.


var str = "Sally sells seashells on the seashore";

var wordCount = str.match(/(\w+)/g).length;

console.log(wordCount);

function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
    }
 console.log(countWords("Sally sells seashells on the seashore"));


//  function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     console.log(count);
//   }

//   count("Sally sells seashells by the seashore.")


// var str = "Sally sells seashells by the seashore";
// var n = str.length; 
// console.log(n);