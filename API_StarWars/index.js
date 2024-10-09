const contenedor = document.getElementById("personajes-container");
const array = [];




async function personajesPrincipales() {
  try {
    for (let i = 1; i < 20; i++) {
      const respuesta = await fetch(`https://swapi.dev/api/people/${i}`);
      const arrData = await respuesta.json();

      array.push(arrData);
    }
    
    let pintar = ""
    pintar += array
      .slice(0, 5)
      .map((principal) => {
        return `
               <div class="personaje-card">
          <p><strong>Nombre:</strong> ${principal.name}</p>
          <p><strong>Altura:</strong> ${principal.height} cm</p>
          <p><strong>Peso:</strong> ${principal.mass} kg</p>
        </div>
            `;
      })
      .join("");

  
    contenedor.innerHTML = pintar;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function personajesSecundarios() {
  try {

    for (let i = 1; i < 20; i++) {
      const respuesta = await fetch(`https://swapi.dev/api/people/${i}`);
      const arrData = await respuesta.json();

      array.push(arrData);
    }
    
    let pintar = "<h4 class=' p-5'>Lista de Bancos</h4>";
    pintar += "<table class='table table-hover w-50 mx-auto d-block'>";
    pintar +=
      "<thead class='table-dark'><tr><th>Codigo</th><th>Nombre</th><th>Swift</th><th>Website</th></tr></thead>";
    pintar += "<tbody class='align-center fw-medium'>";

    pintar += array
      .slice(5, 11)
      .map((secundarios) => {
        return `
                <tr>
                    <td>${secundarios.name}</td>
                     <td>${secundarios.height}</td>
                   <td>${secundarios.mass}</td>
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

    for (let i = 1; i < 20; i++) {
      const respuesta = await fetch(`https://swapi.dev/api/people/${i}`);
      const arrData = await respuesta.json();

      array.push(arrData);
    }
    
    let pintar = "<h4 class=' p-5'>Lista de Bancos</h4>";
    pintar += "<table class='table table-hover w-50 mx-auto d-block'>";
    pintar +=
      "<thead class='table-dark'><tr><th>Codigo</th><th>Nombre</th><th>Swift</th><th>Website</th></tr></thead>";
    pintar += "<tbody class='align-center fw-medium'>";

    pintar += array
      .slice(11, 16)
      .map((otros) => {
        return `
                <tr>
                    <td>${otros.name}</td>
                     <td>${otros.height}</td>
                   <td>${otros.mass}</td>
            `;
      })
      .join("");

    pintar += "</tbody></table>";
    contenedor.innerHTML = pintar;
  } catch (error) {
    console.error("Error:", error);
  }
}
