// Define the function 'luhnCheck' to perform the Luhn algorithm check on a given number.
const ValidateLuhnCheckDigit = num => {
    //convert the number into an array of string values for each digit and reverse the array
    let valueArray = num.split('').reverse().map(c => parseInt(c));
    //Extract the check digit from the array
    let checkDigit = valueArray.splice(0, 1)[0];
    //Calculate the Luhn sum by splitting the odd and even array items and adding or multiplying then adding them to the sum.
    let luhnSum = valueArray.reduce((acc, val, i) => (
      i % 2 !== 0 //Check if the numbers index is equally divisible by two to check if the number is in an even or odd position
      ? acc + val //if odd add the value to the sum total.
      : acc + ((val*2) % 9) || 9
    ), 0)
    //add the check digit to the sum
    luhnSum += checkDigit;
    //test if the Luhn sum is divisible by 10
    return sum % 10 === 0;
  };
  
  // Example usages:
  console.log(luhnCheck('978469158942561'));  
  console.log(luhnCheck('9701305032082'));  
  console.log(luhnCheck('123789654194369'));