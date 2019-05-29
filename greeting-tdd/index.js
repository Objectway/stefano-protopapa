/*
module.exports.greet =  (name) => {
    if(!!name)
    {
        if(Array.isArray(name))
        {
            if(isUppercase(name[0]) && isUppercase(name[1]))
            {
                return `Hello, ${name[0]} and ${name[1]}!`.toUpperCase();
            }else{
                return `Hello, ${name[0]} and ${name[1]}!`;
            }
        }
        if(name === name.toUpperCase())
        {
            return `Hello, ${name}!`.toUpperCase();
        }else{
            return `Hello, ${name}!`;
        }
    }
    return `Hello, my friend!`;
};
*/
//module.exports.greet = name => `Hello, ${name}!`;
module.exports.greet =  () => {
    for (var i=0; i < 100; i++){
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}