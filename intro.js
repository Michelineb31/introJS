function printIntro() {
    console.log ("Introduction to JavaScript");
}

function fizzBuzz() {
    for(i = 0; i <= 100; i ++) {
        if (i % 3 === 0 && i % 5 ===0) {
            console.log("Fizzbuzz");   
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }  
}

function countBs(bees) {
    count = 0;
    for(i =0; i <= bees.length; i++) {
        if (bees.charAt(i) == "B") {
            count ++;
        } 
    }
    console.log(count);
  
}