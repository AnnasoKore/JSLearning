function arrayFruits(array) {
    console.log(`In given array the First element is - '${array[0]}' and last element is - '${array[array.length-1]}'`);
    console.log(`Add element 'Papaya' before the element 'Banana' -- [${array.unshift('Papaya'),array}]`);
    console.log(`Remove 'Mango' in given array - [${array.splice(array.length-2,1),array}]`);
    console.log(`Add element 'Pineapple' at the last position - [${array.push('Pineapple'),array}]`);   
    console.log(`Insert an element 'Dragon Fruit' before 'Water Melon' - [${array.splice(array.length-2, 0, 'Dragon Fruit'),array}] `);    
    console.log(`Replace an element 'Orange' with 'Kiwi' - [${array.splice(2,1,'Kiwi'), array}]`);
    console.log(`Elements starting from 1 to 4 [${array.slice(1,4)}]`);
    console.log(`Select last 3 elements - [${array.slice(array.length-3)}]`);
   // console.log(`final array after all modification -- `,array);
}
arrayFruits(['Banana','Orange','Apple','Mango','Water Melon']);
