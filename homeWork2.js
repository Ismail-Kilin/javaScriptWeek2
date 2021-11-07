function friendNumber(number1,number2) {
    let gecici1=0;
    let total1 = 0
    let gecici2=0;
    let total2 = 0
    for (let dvide1 = 1; dvide1 < number1; dvide1++) {
        if(number1 % dvide1 == 0){
             gecici1 = dvide1
            total1= total1 + gecici1
        } 
    }
    for (let dvide2 = 1; dvide2 < number2; dvide2++) {
        if(number2 % dvide2 == 0){
         gecici2 = dvide2
        total2 = total2 + gecici2
    } 
}
if(total1 == number2 && total2 == number1 ) {
console.log("Arkadaş sayılar")
}
else{
console.log("Arkadaş sayı değiller")
}
}
friendNumber(1210,1184)
