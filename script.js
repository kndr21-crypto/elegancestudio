// STUDIO ELEGANCE - INTERACTIVE ENGINE
document.addEventListener("DOMContentLoaded", () => {

  // Dynamic booking handler (Official Studio Elegance WhatsApp link)
  window.agendarProcedimento = function(nome) {
    const texto = encodeURIComponent(`Olá, Studio Elegance! Vi o site e gostaria de agendar um horário para: *${nome}*. Poderia me informar os horários disponíveis?`);
    window.open(`https://wa.me/message/WZKDVHFIW23HO1?text=${texto}`, "_blank");
  };

  // Filter Pills for Procedures
  const pills = document.querySelectorAll(".v-pill");
  const cards = document.querySelectorAll(".feature-card");

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const category = pill.dataset.cat;
      cards.forEach(card => {
        if (category === "all" || card.dataset.cat === category) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-button");
    btn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

});
