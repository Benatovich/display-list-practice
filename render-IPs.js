export function renderIPs(IP) {
    const div = document.createElement('div');
    const titleEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const protagonistDiv = document.createElement('div');
    const nameEl = document.createElement('p');
    const factionEl = document.createElement('p');
    const equipmentEl = document.createElement('p');

    div.classList.add('IP-item');
    titleEl.classList.add('title');
    genreEl.classList.add('genre');
    protagonistDiv.classList.add('protagonist');
    nameEl.classList.add('name');
    factionEl.classList.add('faction');
    equipmentEl.classList.add('equipment');

    titleEl.textContent = IP.title;
    genreEl.textContent = IP.genre;
    nameEl.textContent = IP.protagonist.name;
    factionEl.textContent = IP.protagonist.faction;
    equipmentEl.textContent = IP.protagonist.equipment;

    div.append(titleEl, genreEl, protagonistDiv);

    return div;
}