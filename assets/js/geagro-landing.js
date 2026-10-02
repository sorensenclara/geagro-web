/* GEAGRO · Landing: menú mobile, dropdown Versiones y formulario de demo */
(function () {
  // Vista local (archivo abierto con doble clic): el navegador no abre index.html solo
  // en las carpetas, así que completamos los enlaces. En el servidor no hace nada.
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach((a) => {
      const h = a.getAttribute('href');
      if (/^[a-z]+:|^#|^\/\//i.test(h)) return;
      const [path, hash] = h.split('#');
      if (path === '' || path.endsWith('/')) a.setAttribute('href', path + 'index.html' + (hash ? '#' + hash : ''));
    });
  }
})();
(function () {
  const WHATSAPP = '5492494521418';

  // Menú mobile
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('menuToggle');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));

  // Dropdown Versiones
  const dd = document.getElementById('ddVersiones');
  const ddBtn = document.getElementById('ddBtn');
  const ddMenu = document.getElementById('ddMenu');
  const setDD = (open) => {
    dd.classList.toggle('is-open', open);
    ddBtn.setAttribute('aria-expanded', String(open));
    ddMenu.hidden = !open;
  };
  ddBtn.addEventListener('click', (e) => { e.stopPropagation(); setDD(ddMenu.hidden); });
  document.addEventListener('click', (e) => { if (!dd.contains(e.target)) setDD(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !ddMenu.hidden) { setDD(false); ddBtn.focus(); } });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { setDD(false); setMenu(false); }));

  // Botones "Solicitar demo de CEREALES/VID" preseleccionan la versión
  document.querySelectorAll('[data-version]').forEach((a) => a.addEventListener('click', () => {
    const radio = document.getElementById('v-' + a.dataset.version);
    if (radio) radio.checked = true;
  }));

  // Formulario de demo
  // Por ahora arma el mensaje y abre WhatsApp. Cuando haya endpoint, reemplazar por fetch(form.action, {method:'POST', body:new FormData(form)}).
  const form = document.getElementById('demoForm');
  const status = document.getElementById('formStatus');
  const say = (text, kind) => { status.textContent = text; status.className = 'form-status' + (kind ? ' ' + kind : ''); };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form).entries());
    if (!d.nombre.trim()) { say('Completá tu nombre.', 'err'); form.nombre.focus(); return; }
    if (!/^\S+@\S+\.\S+$/.test(d.email)) { say('Revisá el email: parece incompleto.', 'err'); form.email.focus(); return; }

    const lines = [
      'Hola GENEOS, quiero solicitar una demo de GEAGRO ' + d.version + '.',
      'Nombre: ' + d.nombre,
      d.empresa && 'Establecimiento: ' + d.empresa,
      'Email: ' + d.email,
      d.telefono && 'Teléfono: ' + d.telefono,
      d.localidad && 'Localidad: ' + d.localidad,
      d.superficie && 'Superficie: ' + d.superficie + ' ha',
      d.mensaje && 'Mensaje: ' + d.mensaje,
    ].filter(Boolean);

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    say('Abrimos WhatsApp con tu pedido listo para enviar.', 'ok');
  });
})();

/* FAQ acordeón: una sola pregunta abierta a la vez + "Ver todas las preguntas" */
(function () {
  document.querySelectorAll('.faq-list').forEach((list) => {
    const items = list.querySelectorAll('details');
    items.forEach((d) => d.addEventListener('toggle', () => {
      if (d.open) items.forEach((o) => { if (o !== d) o.open = false; });
    }));
  });
  const all = document.getElementById('faqAll');
  if (all) all.addEventListener('click', () => {
    const extra = document.querySelectorAll('.faq-extra');
    const show = all.getAttribute('aria-expanded') !== 'true';
    extra.forEach((d) => { d.hidden = !show; if (!show) d.open = false; });
    all.setAttribute('aria-expanded', String(show));
    all.firstChild.textContent = show ? 'Ver menos preguntas ' : 'Ver todas las preguntas ';
  });
})();
