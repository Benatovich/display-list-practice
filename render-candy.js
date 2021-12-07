export function renderCandy(candy) {
    const div = document.createElement('div');
    // brand
    const makerDiv = document.createElement('p');
    // eg chocolate, sour, etc
    const typeDiv = document.createElement('p');

    div.classList.add('candy-item');
    makerDiv.classList.add('maker');
    typeDiv.classList.add('type');

    makerDiv.textContent = candy.maker;
    typeDiv.textContent = candy.type;

    div.append(makerDiv, typeDiv);

    return div;
}





// OLD WORK BELOW

// export function renderCandy(candyData) {
//     const candyDiv = document.createElement('div');
//     const candyNameEl = document.createElement('p');
//     const candyMakerEl = document.createElement('p');
    
//     candyDiv.classList.add('candy-item');

//     candyNameEl.textContent = candy.name;
//     candyMakerEl.textContent = candy.maker;


//     return candyDiv;
// }
