


try {
    nonExistentFunction();
} catch (error) {
    console.error(error);

}

try {
    throw 'myException'; //generates an exception

}
catch(e) {
    //statement to handle any exceptions
    logRaisedErrors(e); //pass exception object to error handler
}


