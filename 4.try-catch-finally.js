const numerator = 100, denominatior = 'a';

try {
    console.log(numerator/denominatior);
    console.log(a);
}

catch(error) {
    console.log('An error caught');
    console.log('Error message' + error);
}
finally {
    console.log('Finally will execute every time');
}