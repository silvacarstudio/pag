const s = SITE,
      d = document,
      $ = x => d.querySelector(x);

// Colores y logos
document.documentElement.style.cssText = `
  --bg:${s.colors.bg};
  --surface:${s.colors.surface};
  --surface2:${s.colors.surface2};
  --text:${s.colors.text};
  --muted:${s.colors.muted};
  --accent:${s.colors.accent};
  --border:${s.colors.border};
  --logoD:${s.brand.logoDesktop}px;
  --logoM:${s.brand.logoMobile}px
`;

// WhatsApp link
const wa = `https://wa.me/${s.contactInfo.whatsapp}?text=${encodeURIComponent(s.contactInfo.message)}`;

// Navegación
$("#nav").innerHTML = s.nav.map(x => `<a href="${x[1]}">${x[0]}</a>`).join("");
$("#mobile").innerHTML = s.nav.map(x => `<a href="${x[1]}">${x[0]}</a>`).join("");

// Botones principales
$("#headBtn").href = wa;
$("#heroBtn").href = wa;
$("#heroBtn").textContent = s.hero.button;
$("#ctaBtn").href = wa;
$("#ctaBtn").textContent = s.cta.button;

// Hero
$("#heroEy").textContent = s.hero.eyebrow;
$("#heroTitle").innerHTML = s.hero.title;
$("#heroSub").textContent = s.hero.subtitle;
$(".hero-bg").style.cssText = `background-image:url("${s.hero.image}");background-position:${s.hero.position};`;
$(".overlay").style.background = `rgba(0,0,0,${s.hero.darkness})`;

// Servicios
$("#srvEy").textContent = s.services.eyebrow;
$("#srvTitle").textContent = s.services.title;
$("#srvSub").textContent = s.services.subtitle;
$("#services").innerHTML = s.services.items.map((x,i) =>
  `<article class="service">
     <button class="serviceHead" type="button" aria-expanded="false">
       <div class="serviceHeadText">
         <small>0${i+1}</small>
         <h3>${x[0]}</h3>
         <p>${x[1]}</p>
       </div>
       <span class="servicePlus" aria-hidden="true">+</span>
     </button>
     <div class="serviceBody">
       <div class="serviceBodyIn">
         <p class="serviceDetail">${x[3] || ""}</p>
       </div>
     </div>
   </article>`
).join("");

// Nosotros
$("#aboutEy").textContent = s.about.eyebrow;
$("#aboutTitle").textContent = s.about.title;
$("#aboutCopy").innerHTML = s.about.text.map(x => `<p>${x}</p>`).join("");

// Galería
$("#galEy").textContent = s.gallery.eyebrow;
$("#galTitle").textContent = s.gallery.title;
$("#gallery").innerHTML = s.gallery.images.map((x,i) =>
  `<button class="pic" data-img="${x}"><img src="${x}" alt="Trabajo ${i+1}"></button>`
).join("");

// CTA
$("#ctaEy").textContent = s.cta.eyebrow;
$("#ctaTitle").textContent = s.cta.title;

// Contacto
$("#conEy").textContent = s.contact.eyebrow;
$("#conTitle").textContent = s.contact.title;
$("#contactInfo").innerHTML = `
  <a href="${wa}">WhatsApp</a>
  <a href="${s.contactInfo.instagram}" target="_blank">Instagram</a>
  <span>${s.contactInfo.location}</span>
  <span>${s.contactInfo.hours}</span>
`;

// Footer
$("#foot").textContent = s.footer;

// Lightbox + acordeón de servicios
d.addEventListener("click", e => {
  let p = e.target.closest(".pic");
  if (p) {
    $("#lightImg").src = p.dataset.img;
    $("#lightbox").classList.add("open");
  }
  if (e.target.id === "close" || e.target.id === "lightbox") {
    $("#lightbox").classList.remove("open");
  }

  const head = e.target.closest(".serviceHead");
  if (head) {
    const article = head.closest(".service");
    const wasOpen = article.classList.contains("open");
    d.querySelectorAll(".service.open").forEach(a => {
      a.classList.remove("open");
      a.querySelector(".serviceHead").setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      article.classList.add("open");
      head.setAttribute("aria-expanded", "true");
    }
  }
});

// Menú móvil
$("#menu").onclick = () => $("#mobile").classList.toggle("open");
