/* HACE RETRIEVE A LOS DATOS DE LA API */
/*------ Solar System Open Data -------*/

async function moonData() {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/lune')
    .then(response => response.json())
    .then(data => console.log(data));

}


