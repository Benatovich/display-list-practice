export function renderCandy(candy) {
    const div = document.createElement('div');
    // brand
    const brandDiv = document.createElement('p');
    // eg chocolate, sour, etc
    const typeDiv = document.createElement('p');
    const makerDiv = document.createElement('p');

    div.classList.add('candy-item');
    brandDiv.classList.add('brand');
    typeDiv.classList.add('type');
    makerDiv.classList.add('maker');

    brandDiv.textContent = candy.brand;
    typeDiv.textContent = candy.type;
    makerDiv.textContent = candy.maker;

    div.append(brandDiv, typeDiv, makerDiv);

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
