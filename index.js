// Array practice functions

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwing', 'Begin, Menachem','Black, Elk', 'Berry, Wendell', 'Berger, Ric'];

console.log(people);

// Array.prototype.filter()
// 1. Filter the list of the inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor =>(inventor.year >= 1500 && inventor.year < 1600))

console.table (fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor =>`${inventor.first} ${inventor.last}`)

console.log(fullNames);

// Array.prototype.sort()

// 3. Sort the inventors by birthdate, oldest to youngest

// const ordered = inventors.sort(function(a,b){
//     if (a.year > b.year){
//         return 1;
//     } else {
//         return -1;
//     }
// })

const ordered = inventors.sort((a,b)=>a.year > b.year ? 1 : -1)

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
},0);

console.log(totalYears);

// 5. Sort the inventors by years lived

const oldest = inventors.sort (function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.year - a.passed;
    return lastGuy < nextGuy ? -1 : 1;
});

console.log(oldest)

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name 
// Websit link

// const category= document.querySelector('.mw-category);
// const links = Array.forom(categroy,querySectorAll('a'));
// const de = links
// .map(link => streetname.includes('de));

// 7. Sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort(function(lastOne, nextOne){
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1:-1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the intances of each of these
const data = ['car', 'car', 'truck', 'bike', 'walk', 'car', 'van','bike', 'walk', 'car', 'van', 'car', 'truck'];

const words = data.reduce
(function(obj,item)
{ if(!obj[item])
    obj[item]=0;

obj[item]++;
return obj
}
,{})
console.log(words);