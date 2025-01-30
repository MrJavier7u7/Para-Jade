document.addEventListener("DOMContentLoaded", function() {
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");
    const musica = document.getElementById("musica");
    const body = document.body;

    // Función para cuando se presiona "Sí"
    btnSi.addEventListener("click", function() {
        inicio.style.display = "none"; // Oculta la primera pantalla
        contenido.classList.remove("oculto"); // Muestra la parte de los corazones y flores
        document.body.style.backgroundColor = "pink"; // Cambia el fondo a rosa
        musica.play(); // Reproduce la canción

        // Generar animaciones de corazones flotando
        setInterval(crearCorazon, 500);

        // Generar animación de flores en el centro
        generarFlores();
    });

    // Función para cuando se intenta presionar "No"
    btnNo.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
        const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });

    // Función para crear corazones flotando
    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duración aleatoria
        body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000); // Elimina el corazón después de 5 segundos
    }

    // Función para agregar las flores en el centro
    function generarFlores() {
        const flores = document.querySelector(".flores");
        for (let i = 0; i < 5; i++) {
            let flor = document.createElement("img");
            flor.src = "flor.png"; // Imagen de flores animadas
            flor.classList.add("flor");
            flor.style.left = `${20 * i + 30}%`;
            flores.appendChild(flor);
        }
    }
});
