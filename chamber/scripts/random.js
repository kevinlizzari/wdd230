async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data;
}

function filterMembers(members) {
    return members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
}

function selectRandomMembers(members, count) {
    let selectedMembers = [];
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * members.length);
        selectedMembers.push(members[randomIndex]);
        members.splice(randomIndex, 1);  
    }
    return selectedMembers;
}

function updateSpotlightsSection(members) {
    let spotlightsSection = document.querySelector('.spotlights');
    spotlightsSection.innerHTML = '<h2>Company Spotlights</h2>';  

    let cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';

    for (let member of members) {
        let spotlightDiv = document.createElement('div');
        spotlightDiv.className = 'spotlight';
        spotlightDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}">Website</a></p>
            <img src="${member.imageurl}" alt="${member.name}" style="width:30%;">
        `;
        cardsContainer.appendChild(spotlightDiv);
    }

    spotlightsSection.appendChild(cardsContainer);
}

window.addEventListener('load', async function() {
    const membersData = await getMembers();
    const filteredMembers = filterMembers(membersData);
    const selectedMembers = selectRandomMembers(filteredMembers, 3);
    updateSpotlightsSection(selectedMembers);
});
