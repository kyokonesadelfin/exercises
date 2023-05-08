

// a function that takes an array of words and converts it to an array of each words length


function convert() {

    const arrOfStr = ['Anna', 'Jose', 'May'];

    const arrOfNum = arrOfStr.map(str => {
      return Number(str.length);
    });
    
  
    console.log(arrOfNum);
       
}
convert()



// const arrOfStr = ['Kyokonesa', 'Delfin', 'Marie'];

// const arrOfNum = [];

// arrOfStr.forEach(str => {
//   arrOfNum.push(Number(str.length));
// });

// // 👇️ [1, 2, 3]
// console.log(arrOfNum);

