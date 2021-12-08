// import functions
import { renderCandy } from './render-candy.js';
import { candies } from './candies-data.js';
import { renderChips } from './render-chips.js';
import { chips } from './chips-data.js';
import { renderColors } from './render-colors.js';
import { colors } from './colors-data.js';


// grab DOM elements
const candyListEl = document.getElementById('candy-list');
const chipsListEl = document.getElementById('chips-list');
const colorListEl = document.getElementById('color-list');

// loop through arrays, render elements, append those elements for each item
for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candyListEl.append(candyEl);
}

for (let chip of chips) {
    const chipsEl = renderChips(chip);
    chipsListEl.append(chipsEl);
}

for (let color of colors) {
    const colorsEl = renderColors(color);
    colorListEl.append(colorsEl);
}

console.log(chipsListEl);
console.log(candyListEl);
console.log(colorListEl);


  // OLD CODE 
  // import { displayCandies } from '/candies-data.js';