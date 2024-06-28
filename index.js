/*
var prompt = require('prompt-sync')();
const age = prompt("What's your age?");
if(age < 18){
    console.log("you get a 20% discount!");
}else if(age >= 18 && age <=65 ){
    console.log("Normal ticket price applies");
}else{
    console.log("you get a 30% senior discount!");
}
*/
/*
const product = {
    name : "shirt",
    price: 499,
    inStock: true,
};
console.log(product.inStock);
*/

const guestList = ['abhi','anu','monu','nivi','abhimanyu'];
const guest = guestList.filter(checkGuest)

function checkGuest(g){
    if(g){
        console.log('welcome to the party,')
    }
}