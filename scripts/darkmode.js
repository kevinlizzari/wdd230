function toggleDarkMode() {
    const main = document.querySelector("main");
    const cardSections = document.querySelectorAll(".card");
    //const modeButton = document.querySelector("#mode"); i keep this for testing one old error on the chrome console
  
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      main.style.backgroundColor = "#eee";
      main.style.color = "#000";
      cardSections.forEach(card => {
        card.style.backgroundColor = "#fff";
        card.style.color = "#000";
      });
      document.querySelectorAll(".link").forEach(link => {
        link.style.color = "blue"; 
      });
    } else {
      document.body.classList.add("dark-mode");
      main.style.backgroundColor = "#000";
      main.style.color = "#fff";
      cardSections.forEach(card => {
        card.style.backgroundColor = "#111";
        card.style.color = "#fff";
      });
      document.querySelectorAll(".link").forEach(link => {
        link.style.color = "#ff5733"; //  color in dark mode
      });
    }
  }
  