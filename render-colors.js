export function renderColors(colors) {
    const div = document.createElement('div');
    const colorName = document.createElement('p');

    div.classList.add('colors-item');
    colorName.classList.add('name');

    colorName.textContent = colors.name;

    div.append(colorName);

    return div;
}