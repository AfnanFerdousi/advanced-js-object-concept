const bottle = { color: 'black', hold: 'liquid', price: 200, isClean: true} ;

const keys = Object.keys(bottle);
// console.log(keys);

const values1 = Object.values(bottle);
// console.log(values1);

const pairs = Object.entries(bottle);
// console.log(pairs);



Object.seal(bottle)
/* 
you cant DELETE existing property or INSERT new property after using sEAL
*/

Object.freeze(bottle)
/* 
you cant change anything after using FREEZE
*/
bottle.price = 500;
delete bottle.isClean;
// console.log(bottle);

const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend()); 