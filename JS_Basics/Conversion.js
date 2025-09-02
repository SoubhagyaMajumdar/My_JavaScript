let value1 = "1002"
let value2 = "10abCDef"                    // "100abcdef" cannot be converted to 'Number' (X)  ----> [Output:  NaN] (Not a Number)
let value3 = null                           // 'null'  --->  Number(0)
let value4 = undefined                      // 'undefined'  --->  Number(NaN)    (Not a Number)
let value5 = true                           // 'true'(Boolean)  ---> Number(1)   (true = 1,  false = 0)

console.log(typeof(value1))
console.log(typeof(value2))
console.log(typeof(value3))
console.log(typeof(value4))
console.log(typeof(value5))


// Convert to 'Number'
let s1 = Number(value1)
let s2 = Number(value2)         
let s3 = Number(value3)         
let s4 = Number(value4)         
let s5 = Number(value5)


console.log(typeof(s1))
console.log(s1)
console.log(typeof(s2))
console.log(s2)
console.log(typeof(s3))
console.log(s3)
console.log(typeof(s4))
console.log(s4)
console.log(typeof(s5))
console.log(s5)





let A = 1               //true
let B = 104             //true
let C = "Hello"         //true
let D = ""              //false (Empty)
let E;                  //false
let F = undefined;      //false
let G = null;           //false


//Convert to 'Boolean'
let a = Boolean(A)
let b = Boolean(B)
let c = Boolean(C)
let d = Boolean(D)
let e = Boolean(E)
let f = Boolean(F)
let g = Boolean(G)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)














