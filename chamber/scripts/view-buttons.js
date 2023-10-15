const url = 'data/members.json'; 
const cards = document.querySelector('#cards');

document.getElementById('gridView').addEventListener('click', function() {
    changeView('grid-view');
});

document.getElementById('listView').addEventListener('click', function() {
    changeView('list-view');
});

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data);
}

const displayData = (data) => {
    data.forEach((item) => {
      let card = document.createElement('section');
      card.classList.add('member'); //prva per me
      let name = document.createElement('h2');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let image = document.createElement('img');
      let website = document.createElement('a');
  
      name.textContent = item.name;
      address.innerHTML = `<strong>Address:</strong> ${item.address}`;
      phone.innerHTML = `<strong>Phone:</strong> ${item.phone}`;
      website.href = item.website;
      website.textContent = 'Website';
      image.setAttribute('src', item.imageurl);
      image.setAttribute('alt', `Image of ${item.name}`);
      image.setAttribute('loading', 'lazy');

      image.style.width = '150px';
      image.style.height = '100px';

      card.style.border = '1px solid #000000';
      card.style.padding = '20px';
      card.style.backgroundColor = '#d8e5ff';
  
      name.style.margin = '0 0 10px 0';
  
      card.appendChild(name);
      card.appendChild(website);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(image);
  
      cards.appendChild(card);
    });
}

function changeView(viewClass) {
    let members = document.getElementsByClassName('member'); //prova per me
    for(let i = 0; i < members.length; i++) {
        if(members[i].classList.contains('grid-view')) {
            members[i].classList.remove('grid-view');
        } else if(members[i].classList.contains('list-view')) {
            members[i].classList.remove('list-view');
        }
        members[i].classList.add(viewClass);
    }
}

getData();
