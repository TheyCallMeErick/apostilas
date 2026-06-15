// Gerado por tools/build-navigation.mjs. Edite o pipeline, nao esta lista.
(function () {
  "use strict";

  const pages = [
  {
    "file": "apostila-geometry-nodes-blender.html",
    "title": "Geometry Nodes no Blender — Apostila completa: modelagem como função"
  },
  {
    "file": "guia-completo-uv-mapping-blender-5x.html",
    "title": "UV Mapping no Blender 5.x — Guia Completo: planificar a superfície"
  },
  {
    "file": "guia-completo-texturizacao-pbr-blender-5x.html",
    "title": "Texturização PBR no Blender 5.x — Guia Completo: pintar a superfície"
  },
  {
    "file": "apostila-shader-nodes-blender.html",
    "title": "Shader Nodes no Blender — Apostila completa: a linguagem visual dos materiais"
  },
  {
    "file": "bsdf-blender-guia-completo.html",
    "title": "BSDFs no Blender — Guia completo: da física à prática"
  },
  {
    "file": "guia-completo-baking-exportacao-blender-5x.html",
    "title": "Baking e Exportação no Blender 5.x — Guia Completo"
  },
  {
    "file": "apostila-luz-e-camera-blender.html",
    "title": "Luz e Câmera no Blender — Apostila completa: fotografia dentro do render"
  },
  {
    "file": "guia-completo-iluminacao-eevee-cycles-blender-5x.html",
    "title": "Iluminação no Blender 5.x — EEVEE e Cycles · A Apostila Completa"
  },
  {
    "file": "livro-composicao-cena-blender-5x.html",
    "title": "Composição de Cena no Blender 5.x — Livro de Bolso"
  },
  {
    "file": "guia-completo-topologia-blender-5x.html",
    "title": "Topologia no Blender 5.x — Livro de Bolso"
  },
  {
    "file": "guia-completo-boolean-blender-5x.html",
    "title": "Guia Completo — Boolean no Blender 5.x"
  },
  {
    "file": "guia-completo-modifiers-blender-5x.html",
    "title": "Modifiers no Blender 5.x — Livro de Bolso"
  },
  {
    "file": "guia-bolso-hard-surface-blender-5x.html",
    "title": "Guia de Bolso — Hard Surface Modeling no Blender 5.x"
  },
  {
    "file": "apostila-rigging-blender-5x.html",
    "title": "Apostila de Rigging no Blender 5.x — do zero ao avançado"
  }
];

  const currentFile = decodeURIComponent((window.location.pathname.split("/").pop() || "").toLowerCase());
  const currentIndex = pages.findIndex((page) => page.file.toLowerCase() === currentFile);

  if (currentIndex === -1 || document.querySelector("[data-apostilas-nav]")) return;

  const previous = pages[(currentIndex - 1 + pages.length) % pages.length];
  const next = pages[(currentIndex + 1) % pages.length];
  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const style = document.createElement("style");
  style.textContent = `
    .apostilas-nav{position:fixed;right:18px;bottom:18px;z-index:2147483647;font-family:Inter,Archivo,"Space Grotesk",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#f7f4ec}
    .apostilas-nav *{box-sizing:border-box}
    .apostilas-nav__panel{width:min(360px,calc(100vw - 36px));max-height:min(560px,calc(100vh - 36px));display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:#17191d;border:1px solid rgba(255,255,255,.16);border-radius:10px;box-shadow:0 16px 48px rgba(0,0,0,.34);overflow:hidden}
    .apostilas-nav__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 14px 12px;border-bottom:1px solid rgba(255,255,255,.1)}
    .apostilas-nav__title{display:grid;gap:2px;min-width:0}
    .apostilas-nav__eyebrow{font-size:11px;line-height:1;letter-spacing:.12em;text-transform:uppercase;color:#9fb5ff;font-weight:800}
    .apostilas-nav__current{font-size:13px;line-height:1.25;color:#d7d4ca;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .apostilas-nav__toggle,.apostilas-nav__close,.apostilas-nav__arrow{appearance:none;border:1px solid rgba(255,255,255,.16);background:#23262d;color:#f7f4ec;border-radius:8px;min-width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;font:700 14px/1 inherit;text-decoration:none;cursor:pointer}
    .apostilas-nav__toggle{gap:8px;padding:0 13px;box-shadow:0 8px 24px rgba(0,0,0,.25)}
    .apostilas-nav__toggle svg,.apostilas-nav__close svg,.apostilas-nav__arrow svg{width:18px;height:18px;display:block}
    .apostilas-nav__toggle span{font-size:13px;font-weight:800}
    .apostilas-nav__close{flex:0 0 auto}
    .apostilas-nav__toggle:hover,.apostilas-nav__close:hover,.apostilas-nav__arrow:hover,.apostilas-nav__link:hover{background:#2f333d;text-decoration:none}
    .apostilas-nav__list{overflow:auto;padding:8px}
    .apostilas-nav__link{display:grid;grid-template-columns:30px minmax(0,1fr);gap:10px;align-items:start;text-decoration:none;color:#ebe7dc;border-radius:8px;padding:10px;border:1px solid transparent}
    .apostilas-nav__link[aria-current="page"]{background:#263046;border-color:#44537b}
    .apostilas-nav__num{font:700 12px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#9fb5ff}
    .apostilas-nav__name{font-size:13px;line-height:1.3}
    .apostilas-nav__foot{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px;border-top:1px solid rgba(255,255,255,.1)}
    .apostilas-nav__arrow{min-width:0;justify-content:flex-start;gap:8px;height:auto;min-height:42px;padding:8px 10px;font-size:12px;line-height:1.2;text-align:left}
    .apostilas-nav__arrow:last-child{justify-content:flex-end;text-align:right}
    .apostilas-nav__arrow span{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .apostilas-nav.is-collapsed .apostilas-nav__panel{display:none}
    .apostilas-nav:not(.is-collapsed) .apostilas-nav__toggle{display:none}
    @media (max-width:700px){.apostilas-nav{right:10px;bottom:10px}.apostilas-nav__panel{width:calc(100vw - 20px);max-height:calc(100vh - 20px)}.apostilas-nav__current{white-space:normal}.apostilas-nav__foot{grid-template-columns:1fr}}
    @media print{.apostilas-nav{display:none!important}}
  `;
  document.head.appendChild(style);

  const iconMenu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const iconClose = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const iconPrev = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const iconNext = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const nav = document.createElement("aside");
  nav.className = "apostilas-nav is-collapsed";
  nav.dataset.apostilasNav = "";
  nav.setAttribute("aria-label", "Navegacao entre apostilas");
  nav.innerHTML = `
    <button class="apostilas-nav__toggle" type="button" aria-expanded="false">${iconMenu}<span>Apostilas</span></button>
    <section class="apostilas-nav__panel" aria-label="Colecao de apostilas">
      <div class="apostilas-nav__head">
        <div class="apostilas-nav__title">
          <div class="apostilas-nav__eyebrow">Colecao</div>
          <div class="apostilas-nav__current">${escapeHtml(pages[currentIndex].title)}</div>
        </div>
        <button class="apostilas-nav__close" type="button" aria-label="Fechar navegacao">${iconClose}</button>
      </div>
      <nav class="apostilas-nav__list" aria-label="Todas as apostilas">
        ${pages.map((page, index) => `
          <a class="apostilas-nav__link" href="./${page.file}" ${index === currentIndex ? 'aria-current="page"' : ""}>
            <span class="apostilas-nav__num">${String(index + 1).padStart(2, "0")}</span>
            <span class="apostilas-nav__name">${escapeHtml(page.title)}</span>
          </a>
        `).join("")}
      </nav>
      <div class="apostilas-nav__foot">
        <a class="apostilas-nav__arrow" href="./${previous.file}" title="${escapeHtml(previous.title)}">${iconPrev}<span>${escapeHtml(previous.title)}</span></a>
        <a class="apostilas-nav__arrow" href="./${next.file}" title="${escapeHtml(next.title)}"><span>${escapeHtml(next.title)}</span>${iconNext}</a>
      </div>
    </section>
  `;

  const toggle = nav.querySelector(".apostilas-nav__toggle");
  const close = nav.querySelector(".apostilas-nav__close");
  const setOpen = (isOpen) => {
    nav.classList.toggle("is-collapsed", !isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  document.body.appendChild(nav);
})();
