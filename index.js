/* The functions are divided into three categories: 
   array functions, object functions, 
   and functions that should work with either collection type. 
   
   Your job is to develop the code to implement these functions. */

   
   
   
   /*myEach  
Parameter(s):

a collection (either an object or an array)
a callback function
Return value:

The original collection
Behavior:

Iterates over the collection of elements, passing each element in turn to the callback function. 
Returns the original, unmodified, collection.*/

const checkElement = function(collection){

    return(collection instanceof Array) ? collection.slice() : Object.values(collection)

    }


 function myEach(collection, callback){
     let newCollection = checkElement(collection)

    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])

   }

    return collection;

}


const myMap = function(collection, callback){

   let newCollection = checkElement(collection)
    const collectionArr = [];

  for( let i = 0; i < newCollection.length; i++){

        collectionArr.push(callback(newCollection[i]))
   }

return collectionArr

}

 function myReduce(collection, callback, acc){
      let newCollection = checkElement(collection);

       if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
       }
 
       for(let i = 0; i < newCollection.length; i++){

       acc = callback(acc, newCollection[i], newCollection);
    }
 
   return acc

    }


function myFind(collection, predicate){
    let newCollection = checkElement(collection)

    for( let i = 0; i < newCollection.length; i++){

       if(predicate(newCollection[i])) return newCollection[i];
    }
    return undefined
}


function myFilter(collection, predicate){
    let newCollection = checkElement(collection);
    let emptyArr = [];

    for( let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])) emptyArr.push(newCollection[i])

    }
return emptyArr

}

function mySize(collection){
  let newCollection = checkElement(collection);

  for( let i = 0; i < newCollection.length; i++){

    return newCollection.length 
  }

return Object.keys.length(newCollection)

}

function myFirst(array, n){
    return (n) ? array.slice(0, n) : array[0];
}


function myLast(array, n) {
  return (n) ? array.slice(array.length-n, array.length) : array[array.length-1];
}
  

function myKeys(object){

    const keys = []; 
    for (let key in object){
      keys.push(key)    
    }
    return keys
}

function myValues(object){

    const values = [];

    for (let key in object){

        values.push(object [key])
    }
    return values
}
