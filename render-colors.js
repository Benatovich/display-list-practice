export function renderColors(color) {
    const container = document.createElement('div');
    container.textContent = color;
    return container;
}

// const container = document.createElement('div');
// for (let singleColor of colors) {
//     const colorDiv = document.createElement('div');
//     colorDiv.textContent = singleColor;
//     container.append(colorDiv);
// }