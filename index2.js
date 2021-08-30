// Some(), Every(), Find(), FindIndex()

const people = [
{name: 'Wes', year: 1988},
{name: 'Kait', year: 1986},
{name: 'Irv', year: 1970},
{name: 'Lux', year: 2015},
]; 

const comments =[
{text: 'Love this!', id: 354789},
{text: 'Super good!', id: 354790},
{text: 'You are the best!', id: 354801},
{text: 'Ramen is my favorite food', id: 355901},
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19) {
//         return true;
//     }
// });

const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});



// Array.prototype.every() // is every person 19?
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 354789

const comment = comments.find (comment => comment.id === 354789);

console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
//Delete the comment with the ID of 354790

const index = comments.findIndex(comment => comment.id === 354790);

// comments.splice(index, 1)

console.table(comments)
console.log(index)

//or with Redux
const newComments = [
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];

console.table(newComments)