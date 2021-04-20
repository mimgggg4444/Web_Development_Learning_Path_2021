// var step;
// for (step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log('Walking east one step');
// }


while(true)
for(num = 20; num % 7== 0; num++){

    if(num % 7 ==0){
        num += num;
        if(num < 500){
            break;
        }
    }
 
    var result = num + '+' + num;
    console.log(result)
}

