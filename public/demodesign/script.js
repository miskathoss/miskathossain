/* =====================================================================
   All personal content lives here. Change text, links and photos in CONTENT.
   ===================================================================== */
const CONTENT = {
  name: "Miskat Hossain",
  heroName: ["Miskat", "Hossain"],
  role: "Brand & Web Strategist",
  status: "Available for selected coaches & mentors",
  tagline:
    "Brand & web strategist for coaches and mentors. I build high-authority brand systems and conversion websites that help you stand out and attract ideal clients.",
  tools: [
    { k: "Fi", name: "Figma", color: "#a259ff" },
    { k: "Ai", name: "Illustrator", color: "#ff9a00" },
    { k: "Ps", name: "Photoshop", color: "#31a8ff" },
    { k: "Nx", name: "Next.js", color: "#3a3936" },
  ],
  skills: ["Positioning", "Brand identity", "Web design", "Conversion copy", "UI/UX", "Launch strategy"],

  // ID card
  card: {
    photo: "/demodesign/assets/me-card.webp",
    role: "Brand & Web Strategist",
    name: "Miskat Hossain",
    code: "ID · 2026 · MH-01",
    strapText: "BRAND & WEB STRATEGIST • MISKAT HOSSAIN • ",
  },

  // 01 Work, newest first
  work: [
    { title: "Carolyn Greiner", cat: "Learning systems & web experience", year: "2026", img: "/demodesign/assets/work/carolyn-greiner.webp", link: "/work/carolyn-greiner" },
    { title: "TW Communications", cat: "Web platform & SaaS experience", year: "2025", img: "/demodesign/assets/work/tw-communications.webp", link: "/work/tw-communications" },
    { title: "Ami Probashi", cat: "Mobile app UI/UX & product design", year: "2025", img: "/demodesign/assets/work/ami-probashi.webp", link: "/work/ami-probashi" },
    { title: "Semla AI", cat: "AI platform & web design", year: "2024", img: "/demodesign/assets/work/semla-ai.webp", link: "/work/semla-ai" },
    { title: "Samsara", cat: "Brand identity & emblem system", year: "2022", img: "/demodesign/assets/work/samsara.webp", link: "/work/samsara" },
  ],

  // 02 Process: four steps + the fake project timeline
  steps: [
    { title: "Discover", text: "Your offer, audience and competitors, so we know exactly why clients should choose you." },
    { title: "Position", text: "A sharp message and brand strategy your ideal clients recognise themselves in." },
    { title: "Design", text: "Identity and website designed as one system, built to earn trust and bookings." },
    { title: "Launch", text: "Build, polish and go live, with every path to a discovery call tested." },
  ],
  tracks: [
    { name: "BRAND", clips: [{ t: "Moodboard", s: 20, e: 40, c: "a" }, { t: "Identity system", s: 40, e: 72, c: "a" }] },
    { name: "WEB", clips: [{ t: "Wireframes", s: 30, e: 52, c: "b" }, { t: "UI design", s: 52, e: 78, c: "b" }, { t: "Build", s: 78, e: 99, c: "b" }] },
    { name: "STRAT", clips: [{ t: "Research", s: 0, e: 24, c: "c" }, { t: "Positioning", s: 24, e: 48, c: "c" }] },
    { name: "COPY", clips: [{ t: "Messaging", s: 26, e: 52, c: "d" }, { t: "Web copy", s: 52, e: 80, c: "d" }, { t: "QA", s: 80, e: 99, c: "d" }] },
  ],

  // 03 About + mask reveal
  aboutTitle: "I’m Miskat.",
  bio: [
    "I specialise in brand strategy and web systems for coaches, consultants and mentors.",
    "Whether you’re a business coach, executive mentor, life coach or career strategist, I help you drop outdated branding, clarify your offer and launch a platform that turns casual visitors into committed clients.",
  ],
  strengths: ["Positioning", "Brand systems", "Conversion design"],
  reveal: { normal: "/demodesign/assets/me-front.webp", hero: "/demodesign/assets/me-mask.webp" },

  // 04 Contact
  contactTitle: "Let’s build a brand worth trusting.",
  email: "hi.miskaat@gmail.com",
  call: "https://calendly.com/miskathossain/reserve-your-discovery-session",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/miskathossain", icon: "in" },
    { name: "Dribbble", url: "https://dribbble.com/miskathossain", icon: "dr" },
    { name: "Behance", url: "https://www.behance.net/miskathossain", icon: "be" },
  ],

  // Goo button
  collab: { label: "let’s collab", link: "#contact" },
};

/* ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const isPhone = () => innerWidth <= 760;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- fill in content ---------- */
function fill() {
  $('[data-c="status"]').textContent = CONTENT.status;
  $('[data-c="heroName"]').innerHTML = CONTENT.heroName.map(esc).join("<br />");
  $('[data-c="tagline"]').textContent = CONTENT.tagline;
  $('[data-c="aboutTitle"]').textContent = CONTENT.aboutTitle;
  $('[data-c="contactTitle"]').textContent = CONTENT.contactTitle;
  $('[data-c="navName"]').textContent = CONTENT.name.toLowerCase();

  $("#tools").innerHTML = CONTENT.tools.map((t) => `<li><b style="background:${t.color}">${esc(t.k)}</b>${esc(t.name)}</li>`).join("");
  const words = CONTENT.skills.map((s) => `<span>${esc(s)}</span>`).join("");
  $("#strip").innerHTML = words + words + words + words; // repeated so the loop never shows a gap

  $("#rail").innerHTML = CONTENT.work.map((w, i) => `
    <a class="proj" href="${esc(w.link)}">
      <div class="proj__img"><img src="${esc(w.img)}" alt="${esc(w.title)} project preview" loading="lazy" width="1200" height="900" /><span class="proj__num">${String(i + 1).padStart(2, "0")}</span></div>
      <div class="proj__meta"><div><h3 class="proj__title">${esc(w.title)}</h3><p class="proj__cat">${esc(w.cat)}</p></div><span class="proj__year">${esc(w.year)}</span></div>
    </a>`).join("");

  $("#steps").innerHTML = CONTENT.steps.map((s, i) => `<li class="step"><span class="step__n">0${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join("");
  $("#tracks").innerHTML = CONTENT.tracks.map((tr) => `
    <div class="track"><span class="track__name">${esc(tr.name)}</span>${tr.clips.map((c) => `<span class="clip clip--${c.c}" data-s="${c.s}" style="left:${c.s}%;width:${c.e - c.s - 0.6}%">${esc(c.t)}</span>`).join("")}</div>`).join("");
  $("#ruler").innerHTML = [0, 20, 40, 60, 80].map((p, i) => `<span style="left:${p}%">00:0${i}:00</span>`).join("");

  $("#bio").innerHTML = CONTENT.bio.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#strengths").innerHTML = CONTENT.strengths.map((s) => `<li>${esc(s)}</li>`).join("");

  const mail = $("#emailLink"); mail.textContent = CONTENT.email; mail.href = `mailto:${CONTENT.email}`;
  $("#callLink").href = CONTENT.call;
  $("#socials").innerHTML = CONTENT.socials.map((s) => `
    <li><a href="${esc(s.url)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="1" width="22" height="22" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16.2" text-anchor="middle" font-family="Geist, sans-serif" font-weight="700" font-size="10.5" fill="currentColor">${esc(s.icon)}</text></svg>${esc(s.name)}</a></li>`).join("");
  $("#year").textContent = new Date().getFullYear();
}
fill();

/* ---------- loader (timecode counter, under 1 s) ---------- */
function runLoader(done) {
  const el = $("#loader"), tc = $("#loaderTc");
  if (reduceMotion) { el.classList.add("done"); return done(); }
  const t0 = performance.now(), dur = 800;
  const fmt = (n) => String(n).padStart(2, "0");
  let finished = false;
  const finish = () => { if (finished) return; finished = true; el.classList.add("done"); done(); };
  const tick = (now) => {
    if (finished) return;
    const t = Math.min(1, (now - t0) / dur), frames = Math.floor(t * 24 * 6.5); // count up to ~6.5 s of timecode
    tc.textContent = `00:00:${fmt(Math.floor(frames / 24))}:${fmt(frames % 24)}`;
    if (t < 1) requestAnimationFrame(tick); else finish();
  };
  requestAnimationFrame(tick);
  setTimeout(finish, dur + 250); // never block the page if frames are throttled
}

/* ---------- nav: hide on scroll down, progress line, timeline ---------- */
const nav = $("#nav"), progress = $("#progress");
let lastY = scrollY, ticking = false;
function onScroll() {
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (y > 120 && y > lastY + 4) nav.classList.add("hide");
  else if (y < lastY - 4 || y < 120) nav.classList.remove("hide");
  lastY = y;
  updateTimeline();
  ticking = false;
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

/* ---------- 02 Process: timeline tilts flat, playhead + steps light up ---------- */
const timeline = $("#timeline"), playhead = $("#playhead");
const clips = [...document.querySelectorAll(".clip")], steps = [...document.querySelectorAll(".step")];
function updateTimeline() {
  const vh = innerHeight, r = timeline.getBoundingClientRect();
  if (r.bottom < -200 || r.top > vh + 200) return;
  const tilt = reduceMotion ? 1 : clamp((vh - r.top) / (vh * 0.6), 0, 1);
  timeline.style.setProperty("--tilt", `${(1 - tilt) * 32}deg`);
  timeline.style.setProperty("--tscale", (0.94 + tilt * 0.06).toFixed(3));
  const q = reduceMotion ? 1 : clamp((vh * 0.8 - r.top) / (vh * 0.7), 0, 1);
  const trackW = $("#tracks").clientWidth;
  timeline.style.setProperty("--ph", `${q * trackW}px`);
  playhead.style.transform = `translateX(${q * trackW}px)`;
  clips.forEach((c) => c.classList.toggle("on", q * 100 >= +c.dataset.s));
  const active = q <= 0.02 ? -1 : q >= 0.98 ? 4 : Math.floor(q * 4);
  steps.forEach((s, i) => s.classList.toggle("on", active === 4 ? true : i <= active));
}

/* ---------- 01 Work rail arrows ---------- */
const rail = $("#rail"), prev = $("#railPrev"), next = $("#railNext");
const stepW = () => { const c = rail.querySelector(".proj"); return c ? c.getBoundingClientRect().width + 20 : 400; };
prev.addEventListener("click", () => rail.scrollBy({ left: -stepW(), behavior: reduceMotion ? "auto" : "smooth" }));
next.addEventListener("click", () => rail.scrollBy({ left: stepW(), behavior: reduceMotion ? "auto" : "smooth" }));
const railState = () => { prev.disabled = rail.scrollLeft < 8; next.disabled = rail.scrollLeft > rail.scrollWidth - rail.clientWidth - 8; };
rail.addEventListener("scroll", railState, { passive: true }); addEventListener("resize", railState);

/* ---------- copy email ---------- */
$("#copyEmail").addEventListener("click", async (e) => {
  const b = e.currentTarget;
  try { await navigator.clipboard.writeText(CONTENT.email); }
  catch { const t = document.createElement("textarea"); t.value = CONTENT.email; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
  b.textContent = "Copied"; b.classList.add("done");
  setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600);
});

/* =====================================================================
   Effect 1: hanging, stretchy ID card (Verlet rope)
   ===================================================================== */
const IDCard = (() => {
  const SEGMENTS = 12, GRAVITY = 0.55, DAMPING = 0.982, MAX_SPEED = 16, CLIP_GAP = 16;
  const stage = $("#stage"), card = $("#card"), inner = $(".card__inner", card), holo = $(".card__holo", card), strap = $("#strapPath"), hint = $("#hint");
  const C = CONTENT.card;
  $("#cardName").textContent = C.name; $("#cardRole").textContent = C.role; $("#cardCode").textContent = C.code;
  $("#cardPhoto").src = C.photo; $("#strapText").textContent = C.strapText.repeat(10);

  let W, H, anchor, segLen, pts = [], cons = [], drag = null, hasDragged = false, settled = 0, still = 0, running = false;
  const anchorX = () => (isPhone() ? 0.5 : 0.76);

  function build() {
    W = card.offsetWidth; H = card.offsetHeight;
    const sh = stage.clientHeight;
    const restTop = isPhone() ? 120 : clamp((sh - H) / 2 - 30, 110, 260);
    const ropeLen = Math.max(60, restTop - CLIP_GAP + 20);
    anchor = { x: stage.clientWidth * anchorX(), y: -20 };
    segLen = ropeLen / SEGMENTS; pts = []; cons = [];
    const lift = reduceMotion ? 0 : ropeLen + H + 60, sway = reduceMotion ? 0 : 90;
    for (let i = 0; i <= SEGMENTS; i++) {
      const t = i / SEGMENTS, x = anchor.x + sway * t, y = anchor.y + i * segLen - lift * t;
      pts.push({ x, y, px: x, py: y, w: i === 0 ? 0 : 1 });
    }
    const clip = pts[SEGMENTS], top = clip.y + CLIP_GAP, cx = clip.x + (reduceMotion ? 0 : 30);
    [[cx - W / 2, top], [cx + W / 2, top], [cx + W / 2, top + H], [cx - W / 2, top + H]].forEach(([x, y]) => pts.push({ x, y, px: x, py: y, w: 0.35 }));
    const [TL, TR, BR, BL] = [SEGMENTS + 1, SEGMENTS + 2, SEGMENTS + 3, SEGMENTS + 4];
    for (let i = 0; i < SEGMENTS; i++) cons.push({ a: i, b: i + 1, len: segLen, stretchOnly: true }); // pulls only when stretched
    const d = Math.hypot(W / 2, CLIP_GAP), diag = Math.hypot(W, H);
    cons.push({ a: SEGMENTS, b: TL, len: d }, { a: SEGMENTS, b: TR, len: d },
      { a: TL, b: TR, len: W }, { a: TR, b: BR, len: H }, { a: BR, b: BL, len: W }, { a: BL, b: TL, len: H },
      { a: TL, b: BR, len: diag }, { a: TR, b: BL, len: diag });
    card.classList.add("ready");
    if (reduceMotion) for (let i = 0; i < 400; i++) step(); // settle instantly: show it hanging still
    wake();
  }
  const corners = () => pts.slice(SEGMENTS + 1, SEGMENTS + 5);
  function solve() {
    for (const c of cons) {
      const A = pts[c.a], B = pts[c.b];
      const dx = B.x - A.x, dy = B.y - A.y, dist = Math.hypot(dx, dy) || 0.0001;
      if (c.stretchOnly && dist <= c.len) continue;
      const diff = (dist - c.len) / dist, wsum = A.w + B.w;
      if (!wsum) continue;
      A.x += dx * diff * (A.w / wsum); A.y += dy * diff * (A.w / wsum);
      B.x -= dx * diff * (B.w / wsum); B.y -= dy * diff * (B.w / wsum);
    }
  }
  function bilinear(u, v) {
    const [a, b, c, d] = corners();
    return { x: (1-u)*(1-v)*a.x + u*(1-v)*b.x + u*v*c.x + (1-u)*v*d.x, y: (1-u)*(1-v)*a.y + u*(1-v)*b.y + u*v*c.y + (1-u)*v*d.y, w: [(1-u)*(1-v), u*(1-v), u*v, (1-u)*v] };
  }
  function step() {
    for (const p of pts) {
      if (!p.w) continue;
      const vx = clamp((p.x - p.px) * DAMPING, -MAX_SPEED, MAX_SPEED), vy = clamp((p.y - p.py) * DAMPING, -MAX_SPEED, MAX_SPEED);
      p.px = p.x; p.py = p.y; p.x += vx; p.y += vy + GRAVITY;
    }
    if (drag) {
      const g = bilinear(drag.u, drag.v), dx = drag.x - g.x, dy = drag.y - g.y;
      corners().forEach((p, i) => { const k = g.w[i] * 1.6; p.x += dx * k; p.y += dy * k; p.px = lerp(p.px, p.x, 0.25); p.py = lerp(p.py, p.y, 0.25); });
    }
    for (let i = 0; i < 14; i++) solve();
  }
  function render() {
    const [TL, TR, , BL] = corners();
    const ax = (TR.x - TL.x) / W, ay = (TR.y - TL.y) / W, bx = (BL.x - TL.x) / H, by = (BL.y - TL.y) / H;
    card.style.transform = `matrix(${ax},${ay},${bx},${by},${TL.x},${TL.y})`;
    const cxv = (TL.x - TL.px + TR.x - TR.px) / 2, cyv = (TL.y - TL.py + BL.y - BL.py) / 2;
    const ry = clamp(cxv * 2.2, -40, 40), rx = clamp(-cyv * 1.2, -25, 25);
    inner.style.transform = `perspective(900px) rotateY(${ry}deg) rotateX(${rx}deg)`;
    holo.style.setProperty("--gx", `${50 + ry * 1.5 + Math.atan2(ay, ax) * 60}%`);
    holo.style.setProperty("--gy", `${50 + rx * 1.5}%`);
    let d = `M ${pts[0].x} ${pts[0].y - 40} L ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < SEGMENTS; i++) d += ` Q ${pts[i].x} ${pts[i].y} ${(pts[i].x + pts[i + 1].x) / 2} ${(pts[i].y + pts[i + 1].y) / 2}`;
    d += ` L ${pts[SEGMENTS].x} ${pts[SEGMENTS].y + 6}`;
    strap.setAttribute("d", d);
    const moving = Math.abs(cxv) + Math.abs(cyv);
    still = moving < 0.05 && !drag ? still + 1 : 0;
    if (!hasDragged) {
      const [, , BR, BL2] = corners();
      hint.style.left = `${(BR.x + BL2.x) / 2}px`; hint.style.top = `${Math.max(BR.y, BL2.y) + 22}px`;
      settled = moving < 0.6 ? settled + 1 : 0;
      hint.classList.toggle("show", settled > 30);
    }
  }
  // the loop stops when the card is at rest and restarts on drag/resize
  function loop() {
    step(); render();
    if (still > 90) { running = false; return; }
    requestAnimationFrame(loop);
  }
  function wake() { still = 0; if (!running) { running = true; requestAnimationFrame(loop); } }

  const local = (e) => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  card.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const p = local(e), [TL, TR, , BL] = corners();
    const ux = TR.x - TL.x, uy = TR.y - TL.y, vx = BL.x - TL.x, vy = BL.y - TL.y, rx = p.x - TL.x, ry = p.y - TL.y;
    drag = { u: clamp((rx * ux + ry * uy) / (W * W), 0, 1), v: clamp((rx * vx + ry * vy) / (H * H), 0, 1), ...p };
    card.classList.add("dragging"); card.setPointerCapture(e.pointerId);
    if (!hasDragged) { hasDragged = true; hint.classList.remove("show"); }
    wake();
  });
  card.addEventListener("pointermove", (e) => { if (drag) { Object.assign(drag, local(e)); wake(); } });
  // on release, scale the throw speed down so the card can't leave the screen
  const release = () => { if (!drag) return; drag = null; card.classList.remove("dragging"); pts.forEach((p) => { p.px = lerp(p.px, p.x, 0.6); p.py = lerp(p.py, p.y, 0.6); }); wake(); };
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);

  let lastW = innerWidth;
  addEventListener("resize", () => {
    if (!anchor) return;
    const wasPhone = lastW <= 760; lastW = innerWidth;
    if (wasPhone !== isPhone()) { build(); return; } // layout changed: hang it again
    const nx = stage.clientWidth * anchorX(), dx = nx - anchor.x;
    pts.forEach((p) => { p.x += dx; p.px += dx; }); anchor.x = nx; pts[0].x = pts[0].px = nx;
    wake();
  });
  return { start: build };
})();

/* =====================================================================
   Effect 2: superhero mask reveal
   ===================================================================== */
(() => {
  const SIZE = 0.2, PRESS = 0.32, SMOOTH = 0.18;
  const wrap = $("#reveal"), frame = $("#revealFrame"), layer = $("#revealLayer"), ring = $("#revealRing");
  $("#revealNormal").src = CONTENT.reveal.normal; $("#revealHero").src = CONTENT.reveal.hero;
  let tx = 0.5, ty = 0.5, x = 0.5, y = 0.5, r = 0, tr = 0, raf = null;
  const tick = () => {
    const k = reduceMotion ? 1 : SMOOTH;
    x = lerp(x, tx, k); y = lerp(y, ty, k); r = lerp(r, tr, reduceMotion ? 1 : 0.14);
    const w = frame.clientWidth, h = frame.clientHeight;
    layer.style.setProperty("--mx", `${x * w}px`); layer.style.setProperty("--my", `${y * h}px`); layer.style.setProperty("--r", `${r}px`);
    ring.style.left = `${x * w}px`; ring.style.top = `${y * h}px`; ring.style.width = ring.style.height = `${r * 2}px`;
    raf = Math.abs(r - tr) > 0.3 || Math.abs(x - tx) > 0.001 || Math.abs(y - ty) > 0.001 ? requestAnimationFrame(tick) : null;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
  const setPos = (e) => { const b = frame.getBoundingClientRect(); tx = (e.clientX - b.left) / b.width; ty = (e.clientY - b.top) / b.height; };
  frame.addEventListener("pointerenter", (e) => { setPos(e); if (r < 1) { x = tx; y = ty; } tr = frame.clientWidth * SIZE; wrap.classList.add("active"); kick(); });
  frame.addEventListener("pointermove", (e) => { setPos(e); if (e.pointerType === "mouse" && tr < frame.clientWidth * SIZE) tr = frame.clientWidth * SIZE; kick(); });
  frame.addEventListener("pointerleave", () => { tr = 0; wrap.classList.remove("active"); kick(); });
  frame.addEventListener("pointerdown", (e) => { setPos(e); if (r < 1) { x = tx; y = ty; } tr = frame.clientWidth * PRESS; wrap.classList.add("active"); frame.setPointerCapture(e.pointerId); kick(); });
  frame.addEventListener("pointerup", (e) => { tr = e.pointerType === "mouse" ? frame.clientWidth * SIZE : 0; if (!tr) wrap.classList.remove("active"); kick(); });
  frame.addEventListener("pointercancel", () => { tr = 0; wrap.classList.remove("active"); kick(); });
})();

/* =====================================================================
   Effect 4: cursor follower ring (off on touch + reduced motion)
   ===================================================================== */
(() => {
  if (!finePointer || reduceMotion) return;
  document.documentElement.classList.add("has-cursor");
  const root = $("#cursor"), dot = $(".cursor__dot", root), ring = $(".cursor__ring", root), halo = $(".cursor__halo", root);
  let mx = -100, my = -100, rx = -100, ry = -100, hx = -100, hy = -100, raf = null;
  const loop = () => {
    rx = lerp(rx, mx, 0.2); ry = lerp(ry, my, 0.2); hx = lerp(hx, mx, 0.12); hy = lerp(hy, my, 0.12);
    dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    halo.style.transform = `translate3d(${hx}px,${hy}px,0)`;
    raf = Math.abs(hx - mx) + Math.abs(hy - my) > 0.2 ? requestAnimationFrame(loop) : null;
  };
  const HOT = "a, button, .card, .proj, video, [data-hot]";
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    mx = e.clientX; my = e.clientY;
    const t = e.target instanceof Element ? e.target : null;
    root.classList.toggle("hot", !!(t && t.closest(HOT)));
    root.classList.toggle("off", !!(t && t.closest(".reveal__frame")));
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.documentElement.addEventListener("pointerleave", () => root.classList.add("off"));
  document.documentElement.addEventListener("pointerenter", () => root.classList.remove("off"));
})();

/* =====================================================================
   Effect 3: 3D "let's collab" goo button
   Venom Button by exteestudio (MIT): https://github.com/exteestudio/venom-button
   ===================================================================== */
(() => {
  const frame = $("#venomFrame"), hit = $("#venomHit");
  hit.textContent = CONTENT.collab.label; hit.href = CONTENT.collab.link;
  if (/^https?:/.test(CONTENT.collab.link)) { hit.target = "_blank"; hit.rel = "noopener"; }
  let slow = false; try { slow = localStorage.getItem("demodesign-goo-slow") === "1"; } catch {}
  if (!finePointer || reduceMotion || slow) { frame.remove(); return; } // phones / slow PCs keep the CSS pill

  let geo = null, ready = false, rect = null;
  // time 5 real goo frames; median over 10 ms = too slow for this PC
  function fastEnough() {
    try {
      const w = frame.contentWindow, v = w.VenomButton, cv = w.document.getElementById("stage");
      const probe = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
      const sync = () => { probe.drawImage(cv, 0, 0, 1, 1); probe.getImageData(0, 0, 1, 1); };
      v._debug.paused = true; sync();
      const t = [];
      for (let i = 0; i < 5; i++) { const s = performance.now(); v._debug.advance(1 / 240); sync(); t.push(performance.now() - s); }
      v._debug.paused = false;
      t.sort((a, b) => a - b);
      return t[2] < 10;
    } catch { return false; }
  }
  const measure = () => { rect = frame.getBoundingClientRect(); };
  const place = () => {
    if (!geo || !ready) return;
    measure();
    Object.assign(hit.style, { left: `${rect.left + geo.cx - geo.hw}px`, top: `${rect.top + geo.cy - geo.hh}px`, width: `${geo.hw * 2}px`, height: `${geo.hh * 2}px` });
  };
  const send = (t, e) => {
    if (!ready || !rect) return;
    frame.contentWindow.postMessage({ venom: "ptr", t, x: e ? e.clientX - rect.left : 0, y: e ? e.clientY - rect.top : 0, pt: e ? e.pointerType : "mouse" }, "*");
  };
  addEventListener("pointermove", (e) => send("move", e), { passive: true });
  addEventListener("pointerdown", (e) => send("down", e), { passive: true });
  addEventListener("pointerup", (e) => send("up", e), { passive: true });
  document.documentElement.addEventListener("pointerleave", () => send("leave"));
  addEventListener("blur", () => send("leave"));
  addEventListener("resize", () => { measure(); send("layout"); place(); });
  addEventListener("message", (m) => {
    if (m.source !== frame.contentWindow || !m.data) return;
    const d = m.data;
    if (d.venom === "layout") { geo = d; place(); }
    if (d.venom === "ready") setTimeout(() => {
      if (!fastEnough()) { frame.remove(); try { localStorage.setItem("demodesign-goo-slow", "1"); } catch {} return; }
      ready = true; measure(); document.documentElement.classList.add("goo-ready"); place();
    }, 400);
    if (d.venom === "engaged") document.documentElement.classList.toggle("venom-engaged", !!d.on);
  });
  // load the heavy WebGL last: ~3.5 s after the page, when idle
  const go = () => { frame.src = `/demodesign/collab/venom.html?label=${encodeURIComponent(CONTENT.collab.label)}`; };
  addEventListener("load", () => setTimeout(() => ("requestIdleCallback" in window ? requestIdleCallback(go, { timeout: 2000 }) : go()), 3500));
})();

/* ---------- start ---------- */
onScroll(); railState();
runLoader(() => IDCard.start());
