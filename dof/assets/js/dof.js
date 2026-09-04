/* Degrees of Freedom - back-to-top control.
   Vanilla replacement for the original jQuery custom.js; same classes, same thresholds. */
(function () {
  var btn = document.querySelector('.cd-top');
  if (!btn) return;
  var OFFSET = 300, FADE = 1200;

  function update() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    if (y > OFFSET) {
      btn.classList.add('cd-is-visible');
    } else {
      btn.classList.remove('cd-is-visible');
      btn.classList.remove('cd-fade-out');
    }
    if (y > FADE) btn.classList.add('cd-fade-out');
  }

  window.addEventListener('scroll', update, { passive: true });
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); }
    catch (err) { window.scrollTo(0, 0); }
  });
  update();
})();
