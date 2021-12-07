// import functions
import { renderCandy } from './render-candy.js';
import { candies } from './candies-data.js';

// grab DOM elements
const candyListEl = document.getElementById('candy-list');

// loop through arrays, render elements, append those elements for each item
for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candyListEl.append(candyEl);
}

console.log(candyListEl);


  // OLD CODE 
  // import { displayCandies } from '/candies-data.js';