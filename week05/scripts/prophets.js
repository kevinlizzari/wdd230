const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let birthdate = document.createElement('p');
      let birthplace = document.createElement('p');
      let portrait = document.createElement('img');
  
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      birthdate.innerHTML = `<strong>Date of Birth:</strong> ${prophet.birthdate}`;
      birthplace.innerHTML = `<strong>Place of Birth:</strong> ${prophet.birthplace}`;
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(fullName);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    });
}
  

getProphetData();
