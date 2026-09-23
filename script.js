const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}


/* ANIMAÇÃO DOS CARDS */

const cards = document.querySelectorAll(".card");

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                    observador.unobserve(entrada.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach((card) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";

        card.style.transition =
            "opacity .6s ease, transform .6s ease";

        observador.observe(card);

    });

}


/* ROLAGEM SUAVE */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", function (e) {

            const destino =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (destino) {

                e.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });