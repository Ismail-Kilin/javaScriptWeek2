for (let number = 1; number < 1000; number++) {
    let count = 0;
    let total = 0;
    for (let dvide = 1; dvide <= number; dvide++) {
        if(number % dvide == 0){
            count = dvide ;
            total = total  + count
        }
    }
if(total == 2 * number){
    console.log(number )
}
}