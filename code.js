//Fibonacci series 
function fibonacci(num){
    let a = 0,b=1, result = 0;
    for(let i=0;i<num;i++){
        console.log(result)
        a=b;
        b=result;
        result = a+b;
    }
}
fibonacci(10)
