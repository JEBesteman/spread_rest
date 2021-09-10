// Functie 1:

// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert meerdere argumenten
// Gebruik de rest parameter om ervoor te zorgen dat je functie alle argumenten als een array behandelt.

const optellen = function(...numbers) {
    return numbers.reduce((acc, number) => {
        return acc + number;
    });
};

console.log(optellen(1, 2, 3, 4, 5, 6, 7)); //verwacht 28
console.log(optellen(12, 34, 45, 66, 12, 21)); //190

// Functie 2:

// Schrijf een simpele functie die meerdere cijfers bij elkaar optelt
// De functie accepteert 1 argument, namelijk een array van cijfers
// Gebruik de spread operator om ervoor te zorgen dat je functie alle items in de array bij elkaar optelt.


const telOp = function(num1, num2, num3) {
    return num1 + num2 + num3;
};

const numbers = [1, 5, 13];

console.log(telOp(...numbers)); //19