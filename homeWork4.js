for (let number = 1; number < 1000; number++) {
    let sayac = 0;
    for (let dvide = 2; dvide < number; dvide++){
        if(number % dvide == 0){
            sayac++;
        }
    }
if(sayac == 0 && number != 1){
    console.log(number)
}
}