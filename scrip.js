document.addEventListener("DOMContentLoaded", () => {
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const inicio = document.getElementById("inicio");
    const contenido = document.getElementById("contenido");
    const musica = document.getElementById("musica");

    btnSi.addEventListener("click", () => {
        inicio.style.display = "none";
        contenido.style.display = "block";
        musica.play();
        animarCorazones();
        animarFlores();
    });

    btnNo.addEventListener("mouseover", () => {
        btnNo.style.position = "absolute";
        btnNo.style.top = `${Math.random() * window.innerHeight}px`;
        btnNo.style.left = `${Math.random() * window.innerWidth}px`;
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
