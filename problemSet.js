

function frameYourPhrase(phrase) {
   /*
     TODO: Write a function that takes a string like "Hello World!" and
     returns the string as a framed phrase like:
     **********
     * Hello  *
     * World! *
     **********

     Pay attention to the spacing.  The box should be a square.  In other words,
     the longest word in the phrase will dictate the size of the box.
   */  
   return "**********\n* Hello  *\n* World! *\n**********";
}

function isPrime(num) {
   return false;
}


console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

