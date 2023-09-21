const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cardSections = document.querySelectorAll(".card");
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        main.style.backgroundColor = "#000";
        main.style.color = "#fff";
        cardSections.forEach(card => {
            card.style.backgroundColor = "#111";
            card.style.color = "#fff";
        });
        modeButton.textContent = "❎";
    } else {
        main.style.backgroundColor = "#eee";
        main.style.color = "#000";
        cardSections.forEach(card => {
            card.style.backgroundColor = "#fff";
            card.style.color = "#000";
        });
        modeButton.textContent = "☑️";
    }
});