let str = '';

for(let i = 0; i < 9; i++) {
    str = str + i;
}

console.log(str);
//expected output: "012345678"


//following are valid syntaxes

var i = 0;

for(; i < 9; i++) {
    console.log(i);
}

for(let i = 0;; i++) {
    console.log(i);
    if (i>3) break;
}

var i = 0;

for (;;) {
    if (i > 3) break;
    console.log(i);
    i++;
}