document.addEventListener("DOMContentLoaded", function() {
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");
    const musica = document.getElementById("musica");

    // Función para cuando se presiona "Sí"
    btnSi.addEventListener("click", function() {
        inicio.style.display = "none"; // Oculta la primera pantalla
        contenido.classList.remove("oculto"); // Muestra la parte de los corazones y flores
        document.body.style.backgroundColor = "pink"; // Cambia el fondo a rosa
        musica.play(); // Reproduce la canción
    });

    // Función para cuando se intenta presionar "No"
    btnNo.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
        const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
        btnNo.style.position = "absolute";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
    });
});

    function animarCorazones() {
        const corazones = document.querySelector(".corazones");
        for (let i = 0; i < 10; i++) {
            let corazon = document.createElement("div");
            corazon.classList.add("corazon");
            corazon.style.left = `${Math.random() * 100}%`;
            corazon.style.top = "100vh";
            corazones.appendChild(corazon);
            setTimeout(() => corazon.remove(), 5000);
        }
    }

    function animarFlores() {
        const flores = document.querySelector(".flores");
        for (let i = 0; i < 5; i++) {
            let flor = document.createElement("div");
            flor.classList.add("flor");
            flor.style.left = `${Math.random() * 100}%`;
            flor.style.top = "100vh";
            flores.appendChild(flor);
            setTimeout(() => flor.remove(), 7000);
        }
    }
});

/* Archivo: script.js */
