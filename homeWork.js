function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let sayac = 0;
        for (let dvide = 2; dvide < numbers[i]; dvide++) {

            if (numbers[i] % dvide == 0) {
                sayac++;
            }
        }
        if (sayac == 0) {
            console.log(dvide)
        }
    }
}
findPrime(4, 2, 3, 9, 13, 21)
