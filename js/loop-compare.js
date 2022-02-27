const bottle = {
    color: 'black',
    hold: 'liquid',
    price: 200,
    isClean: true,
};

for (const prop in bottle) {    
    // console.log(bottle[prop]);
}

const keys = Object.keys(bottle)
// console.log(keys);

for (const prop of keys) {
    // console.log(bottle[prop]);
}

// advanced
const entries = Object.entries(bottle)
// console.log(entries);
for (const [keys, value] of Object.entries(bottle)) {
    console.log(keys,value);
}