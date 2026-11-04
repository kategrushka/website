// Small enhancements; the site works without JavaScript as well.
(function () {
  'use strict';

  // --- Mobile menu ---------------------------------------------------------
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    var label = toggle.querySelector('[data-nav-label]');
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
      if (label) label.textContent = open ? toggle.dataset.labelClose : toggle.dataset.labelOpen;
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  // --- Header background once the page is scrolled -------------------------
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Spam-protected e-mail links ------------------------------------------
  var decode = function (s) {
    try {
      return decodeURIComponent(escape(window.atob(s)));
    } catch (e) {
      return '';
    }
  };
  document.querySelectorAll('.js-email').forEach(function (a) {
    var addr = decode(a.dataset.u) + '@' + decode(a.dataset.d);
    var href = 'mailto:' + addr;
    if (a.dataset.s) href += '?subject=' + encodeURIComponent(a.dataset.s);
    a.setAttribute('href', href);
    if (!a.hasAttribute('data-keep-label')) {
      var text = a.querySelector('.js-email__text');
      if (text) text.textContent = addr;
    }
  });

  // --- Two-click embeds (Bandcamp etc.) -------------------------------------
  document.querySelectorAll('[data-embed-load]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrap = btn.closest('[data-embed]');
      var iframe = document.createElement('iframe');
      iframe.src = btn.dataset.src;
      iframe.title = btn.dataset.title || '';
      if (btn.dataset.ratio) iframe.style.aspectRatio = btn.dataset.ratio;
      else iframe.style.height = (parseInt(btn.dataset.height, 10) || 400) + 'px';
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
      iframe.setAttribute('seamless', '');
      wrap.innerHTML = '';
      wrap.appendChild(iframe);
      wrap.classList.add('is-loaded');
    });
  });
})();
