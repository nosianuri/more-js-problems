const greetings = 'Hello, how are you?';
let reverse = '';
function reverseString(text){
    for(const letter of text){
        console.log(letter);
        reverse = reverse + letter;
    }
}
const reversed = reverseString(greetings);
console.log(reversed);
