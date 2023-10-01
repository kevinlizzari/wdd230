var now = Date.now();
var lastVisit = localStorage.getItem('lastVisit');
var daysBetweenVisits = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
var sidebarContentDiv = document.getElementById('last-visit');

if (lastVisit === null) {
  sidebarContentDiv.innerHTML = "<h2>Visit Information</h2>Welcome! Let us know if you have any questions.";
} else if (daysBetweenVisits < 1) {

  sidebarContentDiv.innerHTML = "<h2>Visit Information</h2>Back so soon! Awesome!";
} else {

  sidebarContentDiv.innerHTML = "<h2>Visit Information</h2>You last visited " + daysBetweenVisits + " day" + (daysBetweenVisits > 1 ? "s" : "") + " ago.";
}

localStorage.setItem('lastVisit', now);
