for(let i = 0; i < 10 ; i++){
    if( i%2 == 1){
        console.log(i + "\n");
    }
}

for(let i = 1 ; i < 40 ; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else if(i % 3 === 0 ){
        console.log("Fizz");       
    } else{
        console.log(i);
    }
}