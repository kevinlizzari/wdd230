const baseURL = "https://kevinlizzari.github.io/wdd230/";
const linksURL = "https://kevinlizzari.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }

  function displayLinks(weeks) {
    let html = '';
    weeks.forEach(week => {
      html += `<li>${week.week}: `;
      week.links.forEach(link => {
        html += `<a href="${baseURL + link.url}" class="link">${link.title}</a> | `;
      });
      html = html.slice(0, -3); // remove the last ' | '
      html += '</li>';
    });
    document.querySelector('.card ul').innerHTML = html;
  }
getLinks();