let input = ("turpentine and turtles");
input = input.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];

const resultArray= [];

for (let i = 0; i < input.length; i++) {
    
   if (input[i] === 'e') {
   resultArray.push('e');
  
   } if (input[i] === 'u'){
 resultArray.push('u');
   }
  
    for (let j = 0; j < vowels.length; j++) {  
        
    
        if (input [i] === vowels [j]){
            resultArray.push(input[i]);
        }
    }

}

// console.log(resultArray);

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);
