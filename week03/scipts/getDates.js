const currentYearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModifiedParagraph = document.getElementById("lastModified");
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = `${(lastModifiedDate.getMonth() + 1).toString().padStart(2, '0')}/${lastModifiedDate.getDate().toString().padStart(2, '0')}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours().toString().padStart(2, '0')}:${lastModifiedDate.getMinutes().toString().padStart(2, '0')}:${lastModifiedDate.getSeconds().toString().padStart(2, '0')}`;

lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
