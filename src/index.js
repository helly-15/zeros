module.exports = function zeros(expression) {
  // your solution
  
  let factorialArray = expression.split("*");
  //console.log(" initial array "+factorialArray);
  let amountOf2= 0;
  let amountOf5 = 0;
  let numOfZeros=0;

  for (let i=0; i<factorialArray.length; i++){
    //work with only one!sign
    let elementLength =factorialArray[i].length;
    //console.log(" length of element "+elementLength);
    if (factorialArray[i].substr(-1,1) !=factorialArray[i].substr(-2,1)){
      //console.log(" element "+ factorialArray[i]);
      //console.log (factorialArray[i].substr(-2,1));
      for (let j=+factorialArray[i].slice(0,elementLength-1);j>0;j--){
        if (j%2==0&&j%5!=0){
          let a=j;
          while (a%2==0){
            amountOf2++;
            a=a/2;
          }

          //amountOf2=amountOf2+Math.floor(Math.log(j)/ Math.log(2));
        }
        if (j%5==0&&j%2!=0){
          let b=j;
          while (b%5==0){
            amountOf5++;
            b=b/5;
          }
          //amountOf5=amountOf5+Math.floor(Math.log(j)/ Math.log(5));
        }
        if (j%10==0){
          numOfZeros++;
        }
        if (j%100==0){
          numOfZeros++;
        }
        if (j==50){
          amountOf5++;
        }
        if (j==40){
          amountOf2=amountOf2+2;
        }
        if (j==20||j==60){
          amountOf2++;
        }
        if (j==80){
          amountOf2=amountOf2+3;
        }
      }

    }
    //work with !! signs
    else {
      //console.log ( "Double explanation"+ +factorialArray[i].slice(0,elementLength-2));
      for (let j=+factorialArray[i].slice(0,elementLength-2);j>0;j=j-2){
        
        if (j%2==0&&j%5!=0){
          let b=j;
          while (b%2==0){
            amountOf2++;
            b=b/2;
          }
          
          //amountOf2=amountOf2+Math.floor(Math.log(j)/ Math.log(2));
        }
        if (j%5==0&&j%2!=0){
          let b=j;
          while (b%5==0){
            amountOf5++;
            b=b/5;
          }
          //amountOf5=amountOf5+Math.floor(Math.log(j)/ Math.log(5));
        }
        if (j%10==0){
          numOfZeros++;
        }
          if (j%100==0){
            numOfZeros++;
          }
          if (j==50){
            amountOf5++;
          }
          if (j==40){
            amountOf2=amountOf2+2;
          }
          if (j==20||j==60){
            amountOf2++;
          }
          if (j==80){
            amountOf2=amountOf2+3;
          }
          

        }
      }

    }
  
  //console.log("num of zeroes now "+numOfZeros)
  if (amountOf2>amountOf5){
     numOfZeros+=amountOf5;
  }
  else numOfZeros+=amountOf2;
  //console.log ("num of 2: "+amountOf2+" num of 5: "+amountOf5);
  return numOfZeros;
}
//console.log(zeros('90!!*10!!'))


