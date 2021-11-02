//1
let areBothSame = (a , b) =>{
  return ((a == b) ? true : false);
}

//2
let areBothEqual = (a, b)=> {
   return ((a === b) ? true : false);
}

//3
let areAllFourEqual = (a, b, c, d) =>{
   return ((a === b && b === c && c === d) ? true : false);
}


//4
let areAllFourSame = (a, b, c, d) => {
  return ((a == b && b == c && c == d) ? true : false);
}

//5
let  areAllFourSameOrEqual = (a, b, c, d) => {
   return ((a == b && b == c && c == d) ? "same" : ((a === b && b === c && c === d) ? "equal" : "null"));
}


