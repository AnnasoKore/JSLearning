function myName() {
    console.log("Inside my name function");
}
myName();

// Self invoking function or IIFE - Immediately invoked function expression
( function(){
    console.log(`inside display function..`);
} )();