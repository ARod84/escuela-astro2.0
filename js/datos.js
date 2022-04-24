/* HACE RETRIEVE A LOS DATOS DE LA API */
/*------ Solar System Open Data -------*/

const response = fetch('https://api.le-systeme-solaire.net/rest/bodies/lune')
        .then((response) => response.json())
        .then((luna) => {
            return luna;
        });

// Muestra la información en la interfaz
const printLuna = () => {
        response.then((luna) => {
            document.getElementById("displayVol").innerHTML = '<p>' + luna.vol.volValue + 'x' + '1<sup>' + luna.vol.volExponent + '</sup></p>';
            document.getElementById("displayDist").innerHTML = '<p>' + luna.aphelion + '</p>';;
            document.getElementById("displayGrav").innerHTML = '<p>' + luna.gravity + '</p>';;
        });
};


printLuna();
