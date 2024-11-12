function calculate(num1,num2){
    function operation(num1,num2,callback){
        return callback(num1,num2)
    }
    let add = (a,b)=>{return a+b}
    let mul = (a,b)=>{return a*b}

    const addResult = operation(num1,num2,add)
    const mulResult = operation(num1,num2,mul)

    console.log(addResult);
    console.log(mulResult)
}


calculate(5,3)