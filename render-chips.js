export function renderChips(chips) {
    const div = document.createElement('div');
    const brandDiv = document.createElement('p');
    const makerDiv = document.createElement('p');
    const flavorsDiv = document.createElement('p');

    div.classList.add('chips-item');
    brandDiv.classList.add('brand');
    makerDiv.classList.add('maker');
    flavorsDiv.classList.add('flavors');

    brandDiv.textContent = chips.brand;
    makerDiv.textContent = chips.maker;
    flavorsDiv.textContent = chips.flavors;

    div.append(brandDiv, makerDiv, flavorsDiv);

    return div;
}