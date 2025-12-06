// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 2000);
});

// GSAP Animation
gsap.utils.toArray(".reveal").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector(".hero-bg");
  if (!bg) return;
  const slides = Array.from(bg.querySelectorAll(".hero-bg-slide"));
  if (!slides.length) return;

  gsap.set(slides, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", autoAlpha: 0 });
  gsap.set(slides[0], { autoAlpha: 1 });

  const info = [
    { name: "Redhill Brooks – 43 Villas", details: "Large-scale villa community" },
    { name: "Coconut Villas", details: "Residential development" },
    { name: "Crawford International School", details: "Educational infrastructure" },
  ];
  const nameEl = document.querySelector(".hero-project-name");
  const detailsEl = document.querySelector(".hero-project-details");
  if (nameEl && detailsEl) {
    nameEl.textContent = info[0]?.name || "Project";
    detailsEl.textContent = info[0]?.details || "";
  }

  const effects = [
    (el) => gsap.fromTo(el, { autoAlpha: 0, scale: 1.08 }, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" }),
    (el) => gsap.fromTo(el, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" }),
    (el) => gsap.fromTo(el, { autoAlpha: 0, rotation: -2 }, { autoAlpha: 1, rotation: 0, duration: 0.8, ease: "power2.out" }),
    (el) => gsap.fromTo(el, { autoAlpha: 0, x: -30 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: "power2.out" }),
    (el) => gsap.fromTo(el, { autoAlpha: 0, rotateY: 45 }, { autoAlpha: 1, rotateY: 0, transformPerspective: 800, duration: 0.9, ease: "power2.out" }),
  ];

  let index = 0;
  const showNext = () => {
    const current = slides[index];
    const nextIndex = (index + 1) % slides.length;
    const next = slides[nextIndex];
    gsap.to(current, { autoAlpha: 0, duration: 0.6, ease: "power1.out" });
    const effect = effects[nextIndex % effects.length];
    effect(next);
    index = nextIndex;

    if (nameEl && detailsEl) {
      const nextInfo = info[nextIndex % info.length] || {};
      gsap.to([nameEl, detailsEl], { autoAlpha: 0, duration: 0.2 });
      nameEl.textContent = nextInfo.name || "Project";
      detailsEl.textContent = nextInfo.details || "";
      gsap.to([nameEl, detailsEl], { autoAlpha: 1, duration: 0.3 });
    }
  };

  setInterval(showNext, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    const resultEl = document.getElementById("form-result");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !phone || !email || !message) {
        resultEl.textContent = "Please fill out all required fields.";
        resultEl.style.color = "#f87171"; // red-400
        return;
      }
      resultEl.textContent = "Thanks! Your request has been received. We will contact you soon.";
      resultEl.style.color = "#facc15";
      form.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const rotator = document.querySelector(".showcase-rotator");
  if (!rotator) return;
  const cards = Array.from(rotator.querySelectorAll(".project-card"));
  if (cards.length < 3) return;

  const order = cards.map((_, i) => i);
  const cardWidth = cards[0].offsetWidth || 300;
  const gap = 48;
  const leftX = -((cardWidth + gap) / 2);
  const rightX = (cardWidth + gap) / 2;

  const place = (el, x, scale, alpha, z) => {
    gsap.set(el, { x, y: 0, scale, autoAlpha: alpha, zIndex: z });
  };

  // Set container height based on first card
  const h = cards[0].offsetHeight || 260;
  rotator.style.height = `${h + 10}px`;

  let start = 0;
  let directionRight = true; // alternate right-out then left-out

  const idx = (i) => order[i % order.length];
  const L = () => cards[idx(start)];
  const C = () => cards[idx(start + 1)];
  const R = () => cards[idx(start + 2)];
  const IN = () => cards[idx(start + 3)];

  // Initial placement
  place(L(), leftX, 0.96, 1, 2);
  place(C(), 0, 1, 1, 3);
  place(R(), rightX, 0.96, 1, 2);
  cards.slice(3).forEach((el) => place(el, 0, 1, 0, 1));

  const cycle = () => {
    const left = L();
    const center = C();
    const right = R();
    const incoming = IN();

    place(incoming, 0, 1, 0, 4);

    if (directionRight) {
      gsap.to(right, { x: rightX + cardWidth * 1.4, autoAlpha: 0, duration: 0.6, ease: "power1.out" });
      gsap.to(center, { x: rightX, scale: 0.96, duration: 0.6, ease: "power2.out" });
      gsap.fromTo(incoming, { y: -60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" });
      // left stays in place
    } else {
      gsap.to(left, { x: leftX - cardWidth * 1.4, autoAlpha: 0, duration: 0.6, ease: "power1.out" });
      gsap.to(center, { x: leftX, scale: 0.96, duration: 0.6, ease: "power2.out" });
      gsap.fromTo(incoming, { y: -60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" });
      // right stays in place
    }

    // After animation completes, reset z-index so center is above
    gsap.delayedCall(0.75, () => {
      place(incoming, 0, 1, 1, 3);
      place(center, directionRight ? rightX : leftX, 0.96, 1, 2);
      place(directionRight ? right : left, 0, 1, 0, 1);
      start += 1;
      directionRight = !directionRight;
    });
  };

  setInterval(cycle, 7000);
});
