
/*
Declare a function 'stringSearch', which takes in a single string as an argument and returns another function.
The returned function takes a string as an argument, and when invoked, it will search the string for the substring initially passed into 'stringSearch', counting every occurrence. It will return the number of occurrences of the substring in the current string.

Once complete, write some code to test your 'stringSearch' function.
*/




function stringSearch(sub){

    return function(str){
    let counter = 0;
    for(let i = 0; i< str.length; i++){
        const current = str.slice(i, i + sub.length)
        if (current === sub) {
        counter++;
        }
    }
    return counter;
    }
}



const searchIng = stringSearch('ing');
console.log(searchIng('I am singing while you are dancing.')); // 2
console.log(searchIng('Nothing to see here.')); // 0
console.log(searchIng('Bring the ring to the king.')); // 3


