const contenedor = document.getElementById("mostrar");
const array = [];

async function personajesPrincipales() {
  try {
    let respuesta = await fetch("https://swapi.dev/api/people");
    let data = await respuesta.json();
    let banks = data.results;

    console.log(data);

    let pintar = "<h4 class=' p-5'>Lista de Bancos</h4>";
    pintar += "<table class='table table-hover w-50 mx-auto d-block'>";
    pintar +=
      "<thead class='table-dark'><tr><th>Codigo</th><th>Nombre</th><th>Swift</th><th>Website</th></tr></thead>";
    pintar += "<tbody class='align-center fw-medium'>";

    pintar += banks
      .slice(0, 5)
      .map((bank) => {
        return `
                <tr>
                    <td>${bank.name}</td>
                     <td>${bank.height}</td>
                   <td>${bank.mass}</td>
            `;
      })
      .join("");

    pintar += "</tbody></table>";
    contenedor.innerHTML = pintar;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function personajesSecundarios() {
  try {
    let respuesta = await fetch("https://swapi.dev/api/people");
    let data = await respuesta.json();
    let banks = data.results;

    console.log(data);

    let pintar = "<h4 class=' p-5'>Lista de Bancos</h4>";
    pintar += "<table class='table table-hover w-50 mx-auto d-block'>";
    pintar +=
      "<thead class='table-dark'><tr><th>Codigo</th><th>Nombre</th><th>Swift</th><th>Website</th></tr></thead>";
    pintar += "<tbody class='align-center fw-medium'>";

    pintar += banks
      .slice(6, 11)
      .map((bank) => {
        return `
                <tr>
                    <td>${bank.name}</td>
                     <td>${bank.height}</td>
                   <td>${bank.mass}</td>
            `;
      })
      .join("");

    pintar += "</tbody></table>";
    contenedor.innerHTML = pintar;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function otrosPersonajes() {
  try {
    let respuesta = await fetch("https://swapi.dev/api/people/");
    let data = await respuesta.json();
    let banks = data.results;

    console.log(data);

    let pintar = "<h4 class=' p-5'>Lista de Bancos</h4>";
    pintar += "<table class='table table-hover w-50 mx-auto d-block'>";
    pintar +=
      "<thead class='table-dark'><tr><th>Codigo</th><th>Nombre</th><th>Swift</th><th>Website</th></tr></thead>";
    pintar += "<tbody class='align-center fw-medium'>";

    pintar += banks
      
      .map((bank) => {
        return `
                <tr>
                    <td>${bank.name}</td>
                     <td>${bank.height}</td>
                   <td>${bank.mass}</td>
            `;
      })
      .join("");

    pintar += "</tbody></table>";
    contenedor.innerHTML = pintar;
  } catch (error) {
    console.error("Error:", error);
  }
}
