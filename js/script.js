/* ============================================================
   OPEN BUSINESS AFRICA — Interactions globales
   ============================================================ */
(function () {
  'use strict';

  /* Filet de sécurité : en cas d'erreur, tout doit rester visible */
  window.addEventListener('error', function () {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    var pl = document.getElementById('preloader');
    if (pl) pl.classList.add('is-done');
  });

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------------- Préloader ---------------- */
    var preloader = document.getElementById('preloader');
    if (preloader) {
      window.setTimeout(function () { preloader.classList.add('is-done'); }, 900);
    }

    /* ---------------- Header au scroll ---------------- */
    var header = document.getElementById('siteHeader');
    var toTop = document.getElementById('toTop');
    function onScroll() {
      var y = window.scrollY || 0;
      if (header) header.classList.toggle('is-scrolled', y > 40);
      if (toTop) toTop.classList.toggle('is-visible', y > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------------- Menu mobile ---------------- */
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.style.overflow = open ? 'hidden' : '';
      });
      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('is-open');
          toggle.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    }

    /* ---------------- Révélation au scroll ---------------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ---------------- Compteurs animés ---------------- */
    var counters = document.querySelectorAll('[data-count]');
    function animateCounter(el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var dur = 1800, start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    if ('IntersectionObserver' in window && counters.length) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animateCounter(e.target); cio.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    }

    /* ---------------- Images manquantes : placeholder élégant ----------------
       Tant qu'une photo n'a pas encore été déposée dans /images,
       un visuel de remplacement aux couleurs du site s'affiche. */
    var PLACEHOLDER =
      'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#0C1D3F"/><stop offset="1" stop-color="#081226"/></linearGradient></defs>' +
        '<rect width="800" height="1000" fill="url(#g)"/>' +
        '<g fill="none" stroke="#C8102E" stroke-width="1.5" opacity="0.75">' +
        '<circle cx="400" cy="470" r="150"/><circle cx="400" cy="470" r="120" opacity="0.5"/></g>' +
        '<text x="400" y="485" text-anchor="middle" font-family="Arial,sans-serif" font-size="56" font-weight="700" fill="#C8102E">OBA</text>' +
        '<text x="400" y="700" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="#8E97A8">Photo à venir</text>' +
        '</svg>'
      );
    document.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function handle() {
        img.removeEventListener('error', handle);
        img.src = PLACEHOLDER;
      });
      if (img.complete && img.naturalWidth === 0 && img.src && img.src.indexOf('data:') !== 0) {
        img.src = PLACEHOLDER;
      }
    });

    /* ---------------- Formulaire de contact ---------------- */
    var form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var name = (form.querySelector('[name="nom"]') || {}).value || '';
        var org = (form.querySelector('[name="organisation"]') || {}).value || '';
        var msg = (form.querySelector('[name="message"]') || {}).value || '';
        var subject = encodeURIComponent('Contact site OBA — ' + name + (org ? ' (' + org + ')' : ''));
        var body = encodeURIComponent(msg + '\n\n— ' + name);
        window.location.href = 'mailto:contact@openbusinessafrica.com?subject=' + subject + '&body=' + body;
        var status = document.getElementById('formStatus');
        if (status) {
          status.textContent = 'Votre messagerie va s’ouvrir pour finaliser l’envoi. Merci !';
          status.classList.add('is-visible');
        }
      });
    }

    /* ---------------- Année courante ---------------- */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
