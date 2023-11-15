let input = ("I am a cat, not a dog");
input = input.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];

const resultArray= [];

for (let i = 0; i < input.length; i++) {
    
    for (let j = 0; j < vowels.length; j++) {  
    
        if (input[i] === vowels[j]){
            resultArray.push(input[i]);
        }
    }

}

console.log(resultArray);
