let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let odds = arr.filter(n => n%2)

for(let count=1; count <= arr.length; count++) {
    count % 2 == 0 ? console.log(`${arr[count-1]} is even`): console.log(`${count} is odd`);
} 