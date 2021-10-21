// Write a function which takes in a string and returns counts of each character in the string.

// Understand the problem

//Can I restate the problem in my own words?</li>
{/* What are the inputs that go into the problem?</li>
<li>What are the outputs that should come from the solution to the problem?</li>
<li>Can the outputs be determined from the inputs? Do I have enough info to solve the problem?</li>
<li>How should I label the inportant pieces of data that are a part of the problem?</li> */}

// function charCount(str){
//     //make object to return at end
//     var result = {};
//     // loop over string, for each character ....
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }   
    //if the char is a number/letter AND is a key in object, add one to count
        //if the char is a number/letter AND not in object, add i to object and set value to 1
        //if character is something else (space, period, etc.) don't do anything
    // return object at end
// }

// 
// Check if a permutation of a string is a palindrome
// 
//  suus
//   usu
// Example:
// 
// public bool ContainsPalindrome(string word);
// 
// ContainsPalindrome("gusus"); // must return true because "sugus" is a palindrome
// ContainsPalindrome("gusux"); // must return false because there is no palindrome
// 
// gggggggguuuuuusssssuuuuusssss
// s123546g654321s
// 
//Identificar pares de letras
// Posición de las letras para identificar si son iguales
// Un arreglo que identifique cuantas veces se repite

// let arreglo1 = {}
// let arreglo2 = {}


//for (let pali of str) {
// if (pali) {
// si es menor a 1 entonces str[i]=1 
//}
//}

//{1:1 , 2:2, 3:2, } // --->true
//{1:1 , 2:2 , 3:1, 5:1}// --->falso


// Un arreglo que diga si es verdad que se repite y si lo es regresar verdad sino no es un palindromo
// Verificar 


// Función para checar si es palindromo o no
function pali( str )
{
	let j = str.length -1;
	for( let i = 0 ; i < j/2 ;i++) //loop para checar si se divide entre 2
	{
	let arreglo1 = str[i] ;//checar si se lee igual para adelante
	let arreglo2 = str[j-i];//checar si se lee igual para atras
	if( arreglo1 != arreglo2)
	{
		return false;
	}
	}
	return true;
	
}

//función que dice si es palindromo o no

function es_pali( str )
{
	let resp = pali(str);
	// Condición
	if( resp == true )
	{
	console.log("passed string is palindrome ");
	}
	else
	{
	console.log("passed string not a palindrome");
	}
}

es_pali("anitalavalatina");
