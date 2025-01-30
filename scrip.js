document.addEventListener("DOMContentLoaded", function() {
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");
    const musica = document.getElementById("musica");
    const body = document.body;

    // FUNCIONA: Al presionar "Sí"
    btnSi.addEventListener("click", function() {
        console.log("Botón Sí presionado"); // Verifica en la consola si se ejecuta
        inicio.style.display = "none"; // Oculta el mensaje y botones
        contenido.classList.remove("oculto"); // Muestra el contenido de corazones y flores
        body.style.backgroundColor = "pink"; // Cambia el fondo a rosa
        musica.play(); // Reproduce la canción

        // Iniciar animaciones de corazones y flores
        setInterval(crearCorazon, 500);
        generarFlores();
    });

    // FUNCIONA: El botón "No" se mueve
    btnNo.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
        const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
        btnNo.style.position = "absolute"; // Asegura que tenga posición absoluta
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });

    // Generar corazones flotando
    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
        body.appendChild(corazon);

        setTimeout(() => corazon.remove(), 5000);
    }

    // Generar flores en el centro
    function generarFlores() {
        const flores = document.querySelector(".flores");
        flores.innerHTML = ""; // Limpia antes de agregar nuevas
        for (let i = 0; i < 5; i++) {
            let flor = document.createElement("img");
            flor.src = "flores.png"; // Imagen de flores animadas
            flor.classList.add("flor");
            flor.style.left = `${20 * i + 30}%`;
            flores.appendChild(flor);
        }
    }
});
