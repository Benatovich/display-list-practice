export function renderChips(chips) {
    const div = document.createElement('div');
    const brandDiv = document.createElement('p');
    const makerDiv = document.createElement('p');
    const flavorsArray = document.createElement('div');

    for (let flavor of chips.flavors) {
        const div = document.createElement('p');
        div.textContent = flavor;
        flavorsArray.append(div);
    }

    div.classList.add('chips-item');
    brandDiv.classList.add('brand');
    makerDiv.classList.add('maker');
    flavorsArray.classList.add('flavors');

    brandDiv.textContent = chips.brand;
    makerDiv.textContent = chips.maker;

    div.append(brandDiv, makerDiv, flavorsArray);

    return div;
}
