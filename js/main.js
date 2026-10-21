/* ============================================================
   VISINA — Aerial Films · interactions + EN/BCS i18n
   ============================================================ */

(() => {
  "use strict";

  /* ---------- i18n dictionary ---------- */
  const I18N = {
    en: {
      nav_work: "Work", nav_reel: "Showreel", nav_services: "Services",
      nav_about: "About", nav_contact: "Contact", nav_cta: "Start a project",

      hero_kicker: "Aerial films · Banja Luka · Worldwide",
      hero_l1: "The world,",
      hero_l2: "from above.",
      hero_sub: "Cinematic drone videography that makes people stop and stare — shot in 4K, edited with feeling.",
      hero_cta1: "Watch showreel",
      hero_cta2: "Explore work",
      hero_scroll: "Scroll",

      work_label: "Selected work",
      work_title: "Frames that flew somewhere first.",
      work_sub: "Every clip below is a real flight. Hover to preview, tap to watch full screen. Filmed across the American Northwest — the standard I bring home to Banja Luka.",

      g_bf_t: "Benham Falls",   g_bf_tag: "Rapids",
      g_pr_t: "The Proposal",   g_pr_tag: "Wedding story",
      g_sr_t: "Sunriver",       g_sr_tag: "River crossing",
      g_mo_t: "The Crossing",   g_mo_tag: "From straight above",
      g_bc_t: "Pilot Butte",    g_bc_tag: "Sunset panorama",
      g_ob_t: "Old Mill Bridge",g_ob_tag: "Golden hour",
      g_lf_t: "Lava Canyon",    g_lf_tag: "Whitewater",
      g_vb_t: "Boardwalk",      g_vb_tag: "Vertical · 9:16",
      g_oc_t: "Old Mill District", g_oc_tag: "Town & river",
      g_bl_t: "Lava Fields",    g_bl_tag: "Texture from the air",
      g_bd_t: "Bend from Above",g_bd_tag: "City lines",

      reel_label: "Showreel",
      reel_title: "Thirty-six seconds of altitude.",
      reel_sub: "A cut from my first full edit — crater rims, whitewater, forest roads and big skies. Sound on.",
      reel_note: "36 seconds · with sound",

      serv_label: "Services",
      serv_title: "What I can film for you.",
      serv1_t: "Real Estate",
      serv1_d: "Aerial property tours that show scale, setting and light — the shots that sell houses before the viewing.",
      serv2_t: "Weddings & Events",
      serv2_d: "The moment everyone remembers, seen from the sky. Discreet, cinematic coverage of your day.",
      serv3_t: "Tourism & Hospitality",
      serv3_d: "Hotels, resorts, rivers and trails — films that make people want to book the trip.",
      serv4_t: "Custom Projects",
      serv4_d: "Brands, constructions, inspections, music videos — if it can be framed from the air, let's talk.",

      about_label: "About",
      about_title: "One pilot. One drone. No shortcuts.",
      about_p1: "I'm Đorđe Mirković — a drone pilot and filmmaker based in Banja Luka, Bosnia & Herzegovina. The portfolio on this page was filmed across the American Northwest; it taught me how far a story can travel when the camera does.",
      about_p2: "Now I bring that same cinematic eye home — to real estate, weddings, tourism and brands across Banja Luka, BiH and the region. Shot in 4K, delivered ready for web, socials and big screens.",
      stat1: "cinematic footage",
      stat2: "based in BiH",
      stat3: "available to travel",

      cont_label: "Contact",
      cont_title: "Let's put your story in the air.",
      cont_sub: "Tell me what you're building, selling or celebrating — I'll reply within a day.",
      cc_email: "Email", cc_phone: "Phone / WhatsApp",
      cc_loc: "Based in", cc_loc_v: "Banja Luka, BiH — working region-wide",
      form_name: "Your name", form_name_ph: "Name",
      form_email: "Your email", form_email_ph: "you@example.com",
      form_msg: "About the project", form_msg_ph: "Wedding in June, real estate tour, hotel promo…",
      form_send: "Send message",
      form_sending: "Sending…",
      form_success: "Message sent — I'll get back to you within a day.",
      form_error: "Couldn't send just now — opening your email app instead.",
      form_note: "Goes straight to my inbox — no signup, no spam.",

      footer_note: "Banja Luka, Bosnia & Herzegovina — the world, from above."
    },

    bs: {
      nav_work: "Radovi", nav_reel: "Showreel", nav_services: "Usluge",
      nav_about: "O meni", nav_contact: "Kontakt", nav_cta: "Započni projekat",

      hero_kicker: "Zračni filmovi · Banja Luka · Svijet",
      hero_l1: "Svet,",
      hero_l2: "odozgo.",
      hero_sub: "Kinematografski dron snimci zbog kojih ljudi staju i gledaju — snimljeno u 4K, montirano s osjećajem.",
      hero_cta1: "Pogledaj showreel",
      hero_cta2: "Istraži radove",
      hero_scroll: "Skroluj",

      work_label: "Izabrani radovi",
      work_title: "Kadrovi koji su prvo negdje letjeli.",
      work_sub: "Svaki klip ispod je pravi let. Pređi mišem za pregled, klikni za cijeli ekran. Snimljeno širom američkog Sjeverozapada — standard koji donosim u Banju Luku.",

      g_bf_t: "Benham Falls",    g_bf_tag: "Brzaci",
      g_pr_t: "Prosidba",        g_pr_tag: "Vjenčana priča",
      g_sr_t: "Sunriver",        g_sr_tag: "Prelaz preko rijeke",
      g_mo_t: "Most",            g_mo_tag: "Pravo odozgo",
      g_bc_t: "Pilot Butte",     g_bc_tag: "Zalazak sunca",
      g_ob_t: "Old Mill most",   g_ob_tag: "Zlatni sat",
      g_lf_t: "Lava kanjon",     g_lf_tag: "Bujičava voda",
      g_vb_t: "Šetalište",       g_vb_tag: "Vertikalno · 9:16",
      g_oc_t: "Old Mill District", g_oc_tag: "Grad i rijeka",
      g_bl_t: "Lava polja",      g_bl_tag: "Tekstura iz zraka",
      g_bd_t: "Bend odozgo",     g_bd_tag: "Linije grada",

      reel_label: "Showreel",
      reel_title: "Trideset šest sekundi visine.",
      reel_sub: "Isječak iz moje prve kompletne montaže — krateri, brzaci, šumski putevi i velika neba. Uključi zvuk.",
      reel_note: "36 sekundi · sa zvukom",

      serv_label: "Usluge",
      serv_title: "Šta mogu snimiti za tebe.",
      serv1_t: "Nekretnine",
      serv1_d: "Zračne ture nekretnina koje pokazuju volumen, okruženje i svjetlo — kadrovi koji prodaju kuću prije razgledanja.",
      serv2_t: "Vjenčanja i događaji",
      serv2_d: "Trenutak koji se pamti, viđen iz zraka. Diskretno, kinematografsko praćenje tvog dana.",
      serv3_t: "Turizam i ugostiteljstvo",
      serv3_d: "Hoteli, rezorti, rijeke i staze — filmovi zbog kojih ljudi žele rezervisati putovanje.",
      serv4_t: "Projekti po mjeri",
      serv4_d: "Brendovi, gradilišta, inspekcije, spotovi — ako se može ukadrirati iz zraka, razgovarajmo.",

      about_label: "O meni",
      about_title: "Jedan pilot. Jedan dron. Bez prečica.",
      about_p1: "Ja sam Đorđe Mirković — dron pilot i filmaš iz Banje Luke, Bosna i Hercegovina. Portfolio na ovoj stranici snimljen je širom američkog Sjeverozapada; naučio me koliko daleko priča može putovati kad kamera putuje.",
      about_p2: "Sada taj isti kinematografski izraz donosim kući — nekretninama, vjenčanjima, turizmu i brendovima u Banjoj Luci, BiH i regionu. Snimljeno u 4K, isporučeno spremno za web, društvene mreže i velika platna.",
      stat1: "kinematografski snimci",
      stat2: "baza u BiH",
      stat3: "dostupan za putovanje",

      cont_label: "Kontakt",
      cont_title: "Podignimo tvoju priču u zrak.",
      cont_sub: "Reci mi šta gradiš, prodaješ ili slaviš — odgovaram u roku od dana.",
      cc_email: "Email", cc_phone: "Telefon / WhatsApp",
      cc_loc: "Baza", cc_loc_v: "Banja Luka, BiH — radim u regionu",
      form_name: "Tvoje ime", form_name_ph: "Ime",
      form_email: "Tvoj email", form_email_ph: "ti@primjer.com",
      form_msg: "O projektu", form_msg_ph: "Vjenčanje u junu, tura nekretnine, promocija hotela…",
      form_send: "Pošalji poruku",
      form_sending: "Šaljem…",
      form_success: "Poruka poslana — odgovaram u roku od dana.",
      form_error: "Slanje trenutno nije uspjelo — otvaram ti email program.",
      form_note: "Ide pravo u moj inbox — bez registracije, bez spama.",

      footer_note: "Banja Luka, Bosna i Hercegovina — svet, odozgo."
    }
  };

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ---------- Language ---------- */
  let lang = localStorage.getItem("visina-lang")
    || ((navigator.language || "").toLowerCase().startsWith(("bs")) ? "bs" : "en");

  function setLang(next) {
    lang = next;
    localStorage.setItem("visina-lang", next);
    document.documentElement.lang = next === "bs" ? "bs" : "en";
    const dict = I18N[next];
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    $$("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    $$(".lang-opt").forEach(o => o.classList.toggle("active", o.dataset.langOpt === next));
    refreshLightboxCaption();
  }

  $("#langToggle").addEventListener("click", () => setLang(lang === "en" ? "bs" : "en"));

  /* ---------- Preloader ---------- */
  window.addEventListener("load", () => {
    setTimeout(() => $("#preloader").classList.add("done"), 500);
  });
  // Fallback: never trap the user behind the preloader
  setTimeout(() => $("#preloader").classList.add("done"), 3500);

  /* ---------- Header state ---------- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const burger = $("#burger");
  const mobileMenu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  $$("a", mobileMenu).forEach(a => a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));

  /* ---------- Gallery hover preview ---------- */
  $$(".card").forEach(card => {
    const video = $("video", card);
    card.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

  /* ---------- Lightbox ---------- */
  const lightbox = $("#lightbox");
  const lbVideo = $("#lbVideo");
  const lbTitle = $("#lbTitle");
  const lbLoc = $("#lbLoc");
  const cards = $$(".card");
  let current = -1;

  function openLightbox(i) {
    current = (i + cards.length) % cards.length;
    const card = cards[current];
    lbVideo.src = card.dataset.video;
    lbTitle.setAttribute("data-i18n", card.dataset.title);
    lbLoc.textContent = card.dataset.loc;
    refreshLightboxCaption();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lbVideo.play().catch(() => {});
  }

  function refreshLightboxCaption() {
    if (current < 0) return;
    const card = cards[current];
    const dict = I18N[lang];
    const key = card.dataset.title;
    lbTitle.textContent = dict[key] != null ? dict[key] : key;
    lbLoc.textContent = card.dataset.loc;
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lbVideo.pause();
    lbVideo.removeAttribute("src");
    lbVideo.load();
    current = -1;
  }

  cards.forEach((card, i) => card.addEventListener("click", () => openLightbox(i)));
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", e => { e.stopPropagation(); openLightbox(current - 1); });
  $("#lbNext").addEventListener("click", e => { e.stopPropagation(); openLightbox(current + 1); });
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(current - 1);
    if (e.key === "ArrowRight") openLightbox(current + 1);
  });

  /* ---------- Showreel ---------- */
  $("#showreelBtn").addEventListener("click", () => {
    current = -1;
    lbVideo.src = "assets/videos/showreel.mp4";
    const dict = I18N[lang];
    lbTitle.textContent = dict.reel_label;
    lbLoc.textContent = dict.reel_note;
    lbTitle.removeAttribute("data-i18n");
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lbVideo.play().catch(() => {});
  });

  /* ---------- Contact form → FormSubmit relay (no email client needed) ---------- */
  const form = $("#contactForm");
  const formStatus = $("#formStatus");
  const submitBtn = $("button[type=submit]", form);

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const dict = I18N[lang];
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = dict.form_sending;
    formStatus.textContent = "";
    formStatus.className = "form-status";

    const payload = {
      Name: form.name.value,
      Email: form.email.value,
      Message: form.message.value,
      _replyto: form.email.value,
      _subject: `VISINA — inquiry from ${form.name.value}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/mirkoviccdjordje@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`relay responded ${res.status}`);
      formStatus.textContent = dict.form_success;
      formStatus.classList.add("ok");
      form.reset();
    } catch (err) {
      // Relay unreachable (offline, blocked) — fall back to the visitor's email app
      const subject = encodeURIComponent(payload._subject);
      const body = encodeURIComponent(`${payload.Message}\n\n— ${payload.Name}\n${payload.Email}`);
      window.location.href = `mailto:mirkoviccdjordje@gmail.com?subject=${subject}&body=${body}`;
      formStatus.textContent = dict.form_error;
      formStatus.classList.add("err");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });

  /* ---------- Footer year ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Init ---------- */
  setLang(lang);
})();
