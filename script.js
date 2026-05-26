document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Menu Mobile (Hamburguer)
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer link (Mobile)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });


    // 2. Animação de Números/Contadores Regressivos (Estatísticas)
    const counters = document.querySelectorAll(".counter");
    const speed = 100; // Quanto menor, mais rápido a animação roda

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Ativa os contadores apenas quando o usuário rolar a tela até a seção
    const targetSection = document.getElementById("tecnologias");
    let animated = false;

    window.addEventListener("scroll", () => {
        if (!targetSection) return;
        const sectionPos = targetSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos && !animated) {
            startCounters();
            animated = true; // Impede que anime múltiplas vezes
        }
    });


    // 3. Validação e Envio do Formulário de Contato
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome && email && mensagem) {
            // Simulação de envio bem-sucedido
            feedback.innerText = `Obrigado, ${nome}! Sua mensagem sobre sustentabilidade no Agro foi recebida com sucesso.`;
            feedback.className = "success"; // Aplica classe CSS de sucesso
            
            // Limpa o formulário
            form.reset();

            // Desaparece com o aviso após 5 segundos
            setTimeout(() => {
                feedback.className = "hidden";
            }, 5000);
        }
    });
});
