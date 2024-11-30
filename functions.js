// function square(number) {
//     return number * number
// }

// console.log(square(8))

function myFunc(theObject) {
    theObject.make = 'Toyota';
}

const myCar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
}

console.log(myCar.make)
myFunc(myCar)

console.log(myCar.make)


function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]);
myFunc(arr);
console.log(arr[0]);

const square =  (number) => {
return number * number;
};

console.log(square(4))

// let firstName = 'Antonia';
// let lastName = 'Francesca';

// function fullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }


const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

console.log(fullName('Antonia', 'Francesca'));




