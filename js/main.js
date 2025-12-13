// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");

    const items = Array.from(document.querySelectorAll(".stats-value"));
    if (items.length) {
      items.forEach((el) => {
        const raw = (el.textContent || "").trim();
        const numMatch = raw.match(/\d+/);
        const target = numMatch ? parseInt(numMatch[0], 10) : 0;
        const suffix = raw.replace(String(numMatch ? numMatch[0] : ""), "");
        const obj = { v: 0 };
        gsap.fromTo(obj, { v: 0 }, {
          v: target,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => { el.textContent = `${Math.round(obj.v)}${suffix}`; }
        });
      });
    }
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
  // Mobile nav toggle
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".nav-toggle");
  const mobileLinks = document.querySelectorAll(".nav-links-mobile a");
  if (navbar && toggle) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("mobile-open");
    });
    mobileLinks.forEach((a) => a.addEventListener("click", () => navbar.classList.remove("mobile-open")));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) navbar.classList.remove("mobile-open");
    });
  }

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
  const rotator = document.querySelector(".hero-rotator");
  if (!rotator) return;
  const slides = Array.from(rotator.querySelectorAll(".hero-slide"));
  const captionEl = document.querySelector(".hero-rotator-caption");
  const items = [
    { folder: "Projects/Coconut Villas, Fairdeal Properties", img: "Projects/Coconut Villas, Fairdeal Properties/Fairdeal3.jpg" },
    { folder: "Projects/Crawford Internnational School, Ark Construction Limited", img: "Projects/Crawford Internnational School, Ark Construction Limited/Crawford3.jpg" },
    { folder: "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd", img: "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd/Redhills (1).jpg" },
    { folder: "Projects/Tiles and Granite work, Ole-Sereni Hotel", img: "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (3).jpg" },
    { folder: "Projects/Renovation & Extension, Bogani Road", img: "Projects/Renovation & Extension, Bogani Road/Boganiroad (5).jpg" },
    { folder: "Projects/Thindigua View Apartments, Thindigua Estate Kiambu", img: "Projects/Thindigua View Apartments, Thindigua Estate Kiambu/Thindigua (2).jpg" },
  ];
  slides.forEach((s, i) => {
    const img = s.querySelector(".hero-slide-image");
    const item = items[i % items.length];
    img.src = item.img;
    img.alt = item.folder;
  });
  gsap.set(slides, { autoAlpha: 0 });
  if (slides.length) gsap.set(slides[0], { autoAlpha: 1 });
  if (captionEl) captionEl.textContent = items[0].folder;
  let idx = 0;
  setInterval(() => {
    const current = slides[idx];
    const next = slides[(idx + 1) % slides.length];
    const nextItem = items[(idx + 1) % items.length];
    gsap.to(current, { autoAlpha: 0, duration: 0.6, ease: "power1.out" });
    gsap.fromTo(next, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: "power1.out" });
    if (captionEl) captionEl.textContent = nextItem.folder;
    idx = (idx + 1) % slides.length;
  }, 3500);
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

document.addEventListener("DOMContentLoaded", () => {
  const map = {
    "Coconut Villas": "Projects/Coconut Villas, Fairdeal Properties/Fairdeal1.jpg",
    "Crawford International School": "Projects/Crawford Internnational School, Ark Construction Limited/Crawford1.jpg",
    "Redhill Brooks – 43 Villas": "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd/Redhills (1).jpg",
    "Client Residence": "Projects/Renovation & Extension, Bogani Road/Boganiroad (1).jpg",
    "Commercial Block": "Projects/Thindigua View Apartments, Thindigua Estate Kiambu/Thindigua (1).jpg",
    "Hotel Atrium Renovation": "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (1).jpg",
    "Industrial Warehouse": "Projects/Boundary Wall Kilimanjaro, Karen/WALL1.jpg",
    "Luxury Apartment Fit-Out": "Projects/Tile & Granite word, Rumasia Residency/Rumasia (1).jpg",
  };
  const cards = Array.from(document.querySelectorAll(".project-card"));
  cards.forEach((card) => {
    const nameEl = card.querySelector(".project-name");
    const imgEl = card.querySelector(".project-image");
    if (!nameEl || !imgEl) return;
    const key = (nameEl.textContent || "").trim();
    const src = map[key];
    if (src) {
      imgEl.src = src;
      imgEl.alt = key;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".photo-carousel .photo-track");
  if (!carouselTrack) return;
  const slides = Array.from(carouselTrack.querySelectorAll(".photo-slide"));
  const imgs = [
    "Projects/Coconut Villas, Fairdeal Properties/Fairdeal2.jpg",
    "Projects/Crawford Internnational School, Ark Construction Limited/Crawford2.jpg",
    "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd/Redhills (2).jpg",
    "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (2).jpg",
    "Projects/Renovation & Extension, Bogani Road/Boganiroad (2).jpg",
    "Projects/Thindigua View Apartments, Thindigua Estate Kiambu/Thindigua (2).jpg",
  ];
  const order = imgs.slice().sort(() => Math.random() - 0.5);
  slides.forEach((s, i) => {
    const img = s.querySelector(".carousel-image");
    img.src = order[i % order.length];
    img.alt = "Project photo";
  });

  gsap.set(slides, { autoAlpha: 0 });
  if (slides.length) gsap.set(slides[0], { autoAlpha: 1 });
  let idx = 0;
  setInterval(() => {
    const current = slides[idx];
    const next = slides[(idx + 1) % slides.length];
    gsap.to(current, { autoAlpha: 0, duration: 0.6, ease: "power1.out" });
    gsap.fromTo(next, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: "power1.out" });
    idx = (idx + 1) % slides.length;
  }, 3500);
});

document.addEventListener("DOMContentLoaded", () => {
  const folderImages = {
    "Projects/Coconut Villas, Fairdeal Properties": [
      "Projects/Coconut Villas, Fairdeal Properties/Fairdeal1.jpg",
      "Projects/Coconut Villas, Fairdeal Properties/Fairdeal2.jpg",
      "Projects/Coconut Villas, Fairdeal Properties/Fairdeal3.jpg",
      "Projects/Coconut Villas, Fairdeal Properties/Fairdeal4.jpg",
    ],
    "Projects/Crawford Internnational School, Ark Construction Limited": [
      "Projects/Crawford Internnational School, Ark Construction Limited/Crawford1.jpg",
      "Projects/Crawford Internnational School, Ark Construction Limited/Crawford2.jpg",
      "Projects/Crawford Internnational School, Ark Construction Limited/Crawford3.jpg",
      "Projects/Crawford Internnational School, Ark Construction Limited/Crawford4.jpg",
    ],
    "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd": [
      "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd/Redhills (1).jpg",
      "Projects/Redhill Brooks - 43 Villas Limuru road, Globalize Impex Ltd/Redhills (2).jpg",
    ],
    "Projects/Tiles and Granite work, Ole-Sereni Hotel": [
      "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (1).jpg",
      "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (2).jpg",
      "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (3).jpg",
      "Projects/Tiles and Granite work, Ole-Sereni Hotel/Sereni (4).jpg",
    ],
    "Projects/Renovation & Extension, Bogani Road": [
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (1).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (2).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (3).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (4).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (5).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (6).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (7).jpg",
      "Projects/Renovation & Extension, Bogani Road/Boganiroad (8).jpg",
    ],
    "Projects/Thindigua View Apartments, Thindigua Estate Kiambu": [
      "Projects/Thindigua View Apartments, Thindigua Estate Kiambu/Thindigua (1).jpg",
      "Projects/Thindigua View Apartments, Thindigua Estate Kiambu/Thindigua (2).jpg",
    ],
    "Projects/Boundary Wall Kilimanjaro, Karen": [
      "Projects/Boundary Wall Kilimanjaro, Karen/WALL1.jpg",
      "Projects/Boundary Wall Kilimanjaro, Karen/WALL2.jpg",
    ],
    "Projects/Tile & Granite word, Rumasia Residency": [
      "Projects/Tile & Granite word, Rumasia Residency/Rumasia (1).jpg",
      "Projects/Tile & Granite word, Rumasia Residency/Rumasia (2).jpg",
      "Projects/Tile & Granite word, Rumasia Residency/Rumasia (3).jpg",
      "Projects/Tile & Granite word, Rumasia Residency/Rumasia (4).jpg",
    ],
  };
  const carousels = Array.from(document.querySelectorAll(".project-carousel"));
  carousels.forEach((el) => {
    const folder = el.getAttribute("data-folder");
    const imgs = folderImages[folder] || [];
    const slides = imgs.map((src) => {
      const slide = document.createElement("div");
      slide.className = "project-carousel-slide";
      const img = document.createElement("img");
      img.className = "project-carousel-image";
      img.src = src;
      slide.appendChild(img);
      el.appendChild(slide);
      return slide;
    });
    gsap.set(slides, { autoAlpha: 0 });
    if (slides.length) gsap.set(slides[0], { autoAlpha: 1 });
    let idx = 0;
    setInterval(() => {
      if (!slides.length) return;
      const current = slides[idx];
      const next = slides[(idx + 1) % slides.length];
      gsap.to(current, { autoAlpha: 0, duration: 0.5, ease: "power1.out" });
      gsap.fromTo(next, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: "power1.out" });
      idx = (idx + 1) % slides.length;
    }, 3000);
  });
});

