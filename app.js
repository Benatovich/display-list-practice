// import functions
import { renderCandy } from './render-candy.js';
import { candies } from './candies-data.js';
import { renderChips } from './render-chips.js';
import { chips } from './chips-array.js';


// grab DOM elements
const candyListEl = document.getElementById('candy-list');
const chipsListEl = document.getElementById('chips-list');

// loop through arrays, render elements, append those elements for each item
for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candyListEl.append(candyEl);
}

for (let chip of chips) {
    const chipsEl = renderChips(chip);
    chipsListEl.append(chipsEl);
}

console.log(chipsListEl);
console.log(candyListEl);


  // OLD CODE 
  // import { displayCandies } from '/candies-data.js';