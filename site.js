(function () {
  var D = document, reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  var cl = function (x, a, b) { return Math.max(a, Math.min(b, x)); }, sm = function (t) { t = cl(t, 0, 1); return t * t * (3 - 2 * t); };

  // ---------- Shared artwork: logo, phone, laptop ----------
  var wall = function (cx, cy, r, sx, sy) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#0a1226"/><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#a8d6ff" stroke-width="2"/>' +
      '<circle cx="' + sx + '" cy="' + sy + '" r="' + (r / 4) + '" fill="url(#g-sun)"/>' +
      '<circle cx="' + sx + '" cy="' + sy + '" r="' + (r / 12) + '" fill="none" stroke="#FF6B1A" stroke-opacity=".7"/><circle cx="' + sx + '" cy="' + sy + '" r="' + (r / 7) + '" fill="none" stroke="#FF6B1A" stroke-opacity=".35"/>';
  };
  D.body.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<linearGradient id="g-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#454a57"/><stop offset=".5" stop-color="#1a1d24"/><stop offset="1" stop-color="#0d0f13"/></linearGradient>' +
    '<linearGradient id="g-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
    '<linearGradient id="g-metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6e9ef"/><stop offset="1" stop-color="#868c98"/></linearGradient>' +
    '<radialGradient id="g-sun"><stop offset="0" stop-color="#fff"/><stop offset=".1" stop-color="#ffd2a1"/><stop offset=".35" stop-color="#FF6B1A" stop-opacity=".6"/><stop offset="1" stop-color="#FF6B1A" stop-opacity="0"/></radialGradient>' +
    '<linearGradient id="g-cw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8e95a2"/><stop offset=".28" stop-color="#fdfdfe"/><stop offset=".62" stop-color="#dde1e8"/><stop offset="1" stop-color="#737a87"/></linearGradient>' +
    '<linearGradient id="g-cd" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15171c"/><stop offset=".3" stop-color="#4d535f"/><stop offset=".62" stop-color="#262a32"/><stop offset="1" stop-color="#0a0b0e"/></linearGradient>' +
    '<linearGradient id="g-bell" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2a2d34"/><stop offset=".4" stop-color="#8a8f9a"/><stop offset="1" stop-color="#1b1d22"/></linearGradient>' +
    '<linearGradient id="g-fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="#ffd8a8"/><stop offset=".6" stop-color="#FF6B1A"/><stop offset="1" stop-color="#FF6B1A" stop-opacity="0"/></linearGradient>' +
    '<linearGradient id="g-soot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></linearGradient>' +
    '<clipPath id="c-ph"><rect x="16" y="16" width="188" height="408" rx="32"/></clipPath><clipPath id="c-lp"><rect x="62" y="22" width="436" height="266" rx="8"/></clipPath></defs>' +
    '<symbol id="mk" viewBox="0 0 100 100"><path d="M18 62A32 32 0 0 1 82 62" fill="none" stroke="#FF6B1A" stroke-width="4"/><path d="M30 62A20 20 0 0 1 70 62" fill="none" stroke="#FF6B1A" stroke-opacity=".65" stroke-width="4"/><path d="M42 62A8 8 0 0 1 58 62" fill="none" stroke="#FF6B1A" stroke-opacity=".35" stroke-width="4"/><line x1="8" y1="62" x2="92" y2="62" stroke="#fff" stroke-width="1.8"/><line x1="26" y1="72" x2="74" y2="72" stroke="#fff" stroke-opacity=".45" stroke-width="1.2"/></symbol>' +
    '<symbol id="phoneF" viewBox="0 0 220 440"><rect x="3" y="120" width="3" height="40" rx="1.5" fill="#3a3f4b"/><rect x="214" y="150" width="3" height="64" rx="1.5" fill="#3a3f4b"/><rect x="6" y="6" width="208" height="428" rx="40" fill="url(#g-body)" stroke="#4a505c" stroke-width="2"/><rect x="16" y="16" width="188" height="408" rx="32" fill="#05060A"/><g clip-path="url(#c-ph)">' + wall(110, 720, 420, 150, 300) +
    '<text x="110" y="112" text-anchor="middle" font-size="66" font-weight="300" fill="#fff" font-family="Outfit,sans-serif">6:00</text><text x="110" y="140" text-anchor="middle" font-size="14" fill="#9AA1AE" font-family="Outfit,sans-serif">Good morning</text><rect x="80" y="412" width="60" height="4" rx="2" fill="#fff" fill-opacity=".6"/></g><rect x="82" y="26" width="56" height="16" rx="8" fill="#000"/><rect x="16" y="16" width="188" height="408" rx="32" fill="url(#g-glass)"/></symbol>' +
    '<symbol id="phoneB" viewBox="0 0 220 440"><rect x="3" y="120" width="3" height="40" rx="1.5" fill="#3a3f4b"/><rect x="214" y="150" width="3" height="64" rx="1.5" fill="#3a3f4b"/><rect x="6" y="6" width="208" height="428" rx="40" fill="url(#g-body)" stroke="#4a505c" stroke-width="2"/><rect x="22" y="22" width="84" height="92" rx="22" fill="#0c0d10" stroke="#2b2e36" stroke-width="2"/><circle cx="52" cy="52" r="15" fill="#05060A" stroke="#4a505c" stroke-width="3"/><circle cx="52" cy="52" r="6" fill="#1a2a4a"/><circle cx="52" cy="90" r="15" fill="#05060A" stroke="#4a505c" stroke-width="3"/><circle cx="52" cy="90" r="6" fill="#1a2a4a"/><circle cx="86" cy="70" r="12" fill="#05060A" stroke="#4a505c" stroke-width="3"/><circle cx="86" cy="70" r="5" fill="#1a2a4a"/><circle cx="90" cy="30" r="4" fill="#FF6B1A" fill-opacity=".8"/><use href="#mk" x="60" y="170" width="100" height="100"/><rect x="6" y="6" width="208" height="428" rx="40" fill="url(#g-glass)"/></symbol>' +
    '<symbol id="laptop" viewBox="0 0 560 360"><ellipse cx="280" cy="344" rx="250" ry="9" fill="#000" fill-opacity=".55"/><rect x="50" y="10" width="460" height="290" rx="18" fill="url(#g-body)" stroke="#4a505c" stroke-width="2"/><rect x="62" y="22" width="436" height="266" rx="8" fill="#05060A"/><g clip-path="url(#c-lp)">' + wall(280, 560, 340, 390, 222) +
    '<rect x="62" y="22" width="436" height="16" fill="#fff" fill-opacity=".06"/><rect x="116" y="70" width="200" height="118" rx="10" fill="#fff" fill-opacity=".06" stroke="#fff" stroke-opacity=".15"/><use href="#mk" x="128" y="82" width="34" height="34"/><text x="172" y="106" font-size="15" fill="#fff" font-family="Outfit,sans-serif">Meridian</text><rect x="130" y="130" width="150" height="5" rx="2.5" fill="#fff" fill-opacity=".25"/><rect x="130" y="146" width="110" height="5" rx="2.5" fill="#fff" fill-opacity=".15"/><rect x="130" y="162" width="130" height="5" rx="2.5" fill="#FF6B1A" fill-opacity=".6"/><rect x="190" y="262" width="180" height="18" rx="9" fill="#fff" fill-opacity=".1"/></g><circle cx="280" cy="16" r="2" fill="#2b2e36"/><rect x="62" y="22" width="436" height="266" rx="8" fill="url(#g-glass)"/>' +
    '<path d="M20 300H540L526 324Q522 332 512 332H48Q38 332 34 324Z" fill="url(#g-metal)"/><rect x="240" y="300" width="80" height="6" rx="3" fill="#7c828e"/></symbol></svg>');

  // ---------- Starfield, shooting stars, cursor glow ----------
  var cv = D.getElementById('sky');
  if (cv) {
    var c = cv.getContext('2d'), stars = [], W, H, sy = 0, sh = null, next = 4000;
    var size = function () {
      W = cv.width = innerWidth; H = cv.height = innerHeight; stars = [];
      for (var i = 0, n = Math.min(280, W * H / 6000); i < n; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .2, d: Math.random() * .8 + .2, p: Math.random() * 6.28, s: Math.random() * 1.5 + .5 });
    };
    var loop = function (t) {
      c.clearRect(0, 0, W, H); c.fillStyle = '#fff';
      stars.forEach(function (s) {
        var y = (s.y - sy * s.d * .3) % H; if (y < 0) y += H;
        c.globalAlpha = reduce ? .7 : .3 + .7 * Math.abs(Math.sin(t / 1000 * s.s + s.p));
        c.beginPath(); c.arc(s.x, y, s.r, 0, 6.3); c.fill();
      });
      if (!reduce) {
        if (!sh && t > next) { sh = { x: Math.random() * W * .8 + W * .1, y: Math.random() * H * .4, l: 0 }; next = t + 5000 + Math.random() * 7000; }
        if (sh) {
          var g = c.createLinearGradient(sh.x, sh.y, sh.x - 120, sh.y - 60);
          g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(255,255,255,0)');
          c.globalAlpha = 1; c.strokeStyle = g; c.lineWidth = 1.6; c.beginPath(); c.moveTo(sh.x, sh.y); c.lineTo(sh.x - 120, sh.y - 60); c.stroke();
          sh.x += 14; sh.y += 7; sh.l++; if (sh.l > 40) sh = null;
        }
      }
      requestAnimationFrame(loop);
    };
    size(); addEventListener('resize', size); requestAnimationFrame(loop);
  }
  var glow = D.querySelector('.glow');
  if (glow && !reduce) addEventListener('mousemove', function (e) { glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)'; });

  // ---------- Scroll reveal, parallax, tilt ----------
  D.documentElement.classList.add('js');
  var rv = [].slice.call(D.querySelectorAll('.rv'));
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .15 });
    rv.forEach(function (el) { el.style.setProperty('--d', ([].indexOf.call(el.parentNode.children, el) * .12) + 's'); io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('in'); });
  var par = [].slice.call(D.querySelectorAll('[data-par]'));
  addEventListener('scroll', function () { sy = scrollY; if (!reduce) par.forEach(function (el) { el.style.transform = 'translateY(' + (scrollY * el.dataset.par) + 'px)'; }); }, { passive: true });
  if (!reduce) [].forEach.call(D.querySelectorAll('.tilt'), function (el) {
    var p = el.parentNode;
    p.addEventListener('mousemove', function (e) { var r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = 'perspective(800px) rotateY(' + (x * 22) + 'deg) rotateX(' + (-y * 16) + 'deg)'; });
    p.addEventListener('mouseleave', function () { el.style.transform = ''; });
  });

  // ---------- Nav highlight, countdown ----------
  var page = location.pathname.split('/').pop() || 'index.html';
  [].forEach.call(D.querySelectorAll('.links a'), function (a) { if (a.getAttribute('href') === page) a.classList.add('on'); });
  var cd = D.getElementById('cd');
  if (cd) cd.textContent = Math.max(0, Math.ceil((new Date(2030, 0, 1) - Date.now()) / 864e5)).toLocaleString() + ' days';

  // ---------- Waitlist form (Formspree) ----------
  var FORM_URL = 'https://formspree.io/f/xaeeejyp', f = D.getElementById('f');
  if (f) f.addEventListener('submit', async function (e) {
    e.preventDefault();
    var msg = D.getElementById('msg'), btn = f.querySelector('button');
    btn.disabled = true; btn.textContent = 'Sending...'; msg.textContent = '';
    try {
      var r = await fetch(FORM_URL, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(f) });
      if (r.ok) { f.reset(); f.classList.add('hide'); D.getElementById('done').classList.add('show'); return; }
      msg.textContent = 'Something went wrong. Please try again.';
    } catch (err) { msg.textContent = 'Something went wrong. Please try again.'; }
    btn.disabled = false; btn.textContent = 'Join the waitlist';
  });

  // ---------- Rocket that comes apart and goes back together ----------
  var root = D.getElementById('build');
  if (root) {
    var parts = [].slice.call(root.querySelectorAll('.part')), labs = [].slice.call(root.querySelectorAll('.lab')),
      phs = [].slice.call(root.querySelectorAll('.ph>div')), flame = root.querySelector('.flame'), bar = root.querySelector('.prog i'), tick = false;
    var upd = function () {
      tick = false;
      var r = root.getBoundingClientRect(), p = cl(-r.top / (r.height - innerHeight), 0, 1), e;
      if (p < .12) e = 0; else if (p < .45) e = sm((p - .12) / .33); else if (p < .6) e = 1; else if (p < .9) e = 1 - sm((p - .6) / .3); else e = 0;
      parts.forEach(function (el) { var d = el.dataset, k = reduce ? 0 : 1; el.setAttribute('transform', 'translate(' + (+d.dx * e) + ' ' + (+d.dy * e) + ') rotate(' + (+d.r * e * k) + ' ' + d.cx + ' ' + d.cy + ')'); });
      labs.forEach(function (l) { l.style.opacity = cl((e - .65) / .35, 0, 1); });
      var o = [cl((.3 - p) / .1, 0, 1), Math.min(cl((p - .28) / .1, 0, 1), cl((.68 - p) / .08, 0, 1)), cl((p - .66) / .1, 0, 1)];
      phs.forEach(function (el, i) { el.style.opacity = o[i]; el.style.transform = 'translateY(' + ((1 - o[i]) * 14) + 'px)'; });
      if (flame) flame.style.opacity = cl((p - .9) / .06, 0, 1);
      if (bar) bar.style.height = (p * 100) + '%';
    };
    var req = function () { if (!tick) { tick = true; requestAnimationFrame(upd); } };
    addEventListener('scroll', req, { passive: true }); addEventListener('resize', req); upd();
  }
})();
