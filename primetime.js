function foundPrime(number){
    let foundPrime = false;

    while(!foundPrime) {
        number++;
        let isPrime = true; 

        let limit = Math.sqrt(number);
        for(let i = 2; i <= limit; i++) {
            if(number % i === 0) {
            isPrime = false;
            break;
            }
        }
        if(isPrime) {
            console.log(`The next prime number is`,number);
            foundPrime = true; 
        }

    }
}

let number = 2; 
foundPrime(number);