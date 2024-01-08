let jelenlegi = 1;
const itemsPerPage = 20;

function fetchData() {
  console.log(jelenlegi);
    fetch(`https://api.restful-api.dev/objects?authuser=0&page=${jelenlegi}&limit=${itemsPerPage}`)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log('Hiba történt:', error));
}

function displayData(data) {
    let table = '<table>';
    table += '<tr><th>ID</th><th>Name</th></tr>';

    data.forEach(item => {
        table += `<tr><td>${item.id}</td><td>${item.name}</td></tr>`;
    });

    table += '</table>';
    document.getElementById('data').innerHTML = table;

    updatePagination();
}

function updatePagination() {
    document.getElementById('pagination').innerHTML = `<button onclick="elozo()">Előző</button> | <button onclick="kovetkezo()">Következő</button>`;
}

function elozo() {
    if (jelenlegi > 1) {
      console.log("Előző");
      jelenlegi--;
        fetchData();
    }
}

function kovetkezo() {
  console.log("Következő");
  jelenlegi++;
    fetchData();
}

window.onload = fetchData;