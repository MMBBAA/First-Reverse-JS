function FirstReverse(str) { 

  
var str=Array.from(str).reverse().toString().replace(/,/g,"");

  return str; 

}
   

console.log(FirstReverse(readline()));