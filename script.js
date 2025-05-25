let url_base = 'http://api.weatherapi.com/v1'
let api_key = '359ab6608e274c47b5011557252505'
//let lugar = 'Santa Fe'


document.getElementById('botonBusqueda').addEventListener('click', () => {
const place = document.getElementById('ciudadEntrada').value
if(place){
      fetchDatosClima(place)
}
})  

function fetchDatosClima(lugar) {
  fetch(`${url_base}/current.json?key=${api_key}&q=${lugar}&aqi=no`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}



function mostrarDatosClima(response) {
  console.log(response);
  const divDatosClima = document.getElementById('datosClima');
  divDatosClima.innerHTML = ''; // Limpiar contenido anterior

  // Extraer datos de la API
  const placeName = response.location.name;
  const placeRegion = response.location.country;
  const placeTemp = response.current.temp_c;
  const localTime = response.location.localtime; // formato: "2025-05-24 18:30"
  const horaLocal = localTime.slice(11); // extrae "18:30"
  const description = response.current.condition.text;
  const icono = response.current.condition.icon;

  // Crear y poblar los elementos
  const ciudadTitulo = document.createElement('h2');
  ciudadTitulo.textContent = `${placeName}, ${placeRegion}`;

  const ciudadTemp = document.createElement('p');
  ciudadTemp.textContent = `Temperature: ${placeTemp}°C`;

  const horaLocalParrafo = document.createElement('p');
  horaLocalParrafo.textContent = `Local Time: ${horaLocal}`;

  const descripcionClima = document.createElement('p');
  descripcionClima.textContent = `Description: ${description}`;

  const iconoClima = document.createElement('img');
  iconoClima.src = `https:${icono}`;
  iconoClima.alt = description;

  // Insertar en el DOM
  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(ciudadTemp);
  divDatosClima.appendChild(horaLocalParrafo);
  divDatosClima.appendChild(descripcionClima);
  divDatosClima.appendChild(iconoClima);
}




/*fetch(`${url_base}/current.json?key=${api_key}&q=${lugar}&aqi=no`)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error('Error al obtener el clima:', error));*/

