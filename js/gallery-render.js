/* ============================================================
   GALERIE — affichage automatique (ne pas modifier)
   Les photos se gèrent dans js/gallery-data.js
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('galleryGrid');
    var filtersWrap = document.getElementById('galleryFilters');
    if (!grid || typeof OBA_GALLERY === 'undefined') return;

    var items = OBA_GALLERY.slice();
    var current = 'all';
    var visible = [];

    /* ------- Filtres ------- */
    function buildFilters() {
      if (!filtersWrap) return;
      var cats = [];
      items.forEach(function (it) {
        if (cats.indexOf(it.categorie) === -1) cats.push(it.categorie);
      });
      var html = '<button type="button" data-cat="all" class="is-active">Toutes</button>';
      cats.forEach(function (c) {
        var label = (typeof OBA_GALLERY_CATS !== 'undefined' && OBA_GALLERY_CATS[c]) ? OBA_GALLERY_CATS[c] : c;
        html += '<button type="button" data-cat="' + c + '">' + label + '</button>';
      });
      filtersWrap.innerHTML = html;
      filtersWrap.querySelectorAll('button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          filtersWrap.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          current = btn.getAttribute('data-cat');
          render();
        });
      });
    }

    /* ------- Grille ------- */
    function catLabel(c) {
      return (typeof OBA_GALLERY_CATS !== 'undefined' && OBA_GALLERY_CATS[c]) ? OBA_GALLERY_CATS[c] : c;
    }

    function render() {
      visible = items.filter(function (it) { return current === 'all' || it.categorie === current; });
      if (!visible.length) {
        grid.innerHTML = '<div class="gallery-empty">Les photos de cette catégorie arrivent bientôt.</div>';
        return;
      }
      grid.innerHTML = visible.map(function (it, i) {
        return (
          '<figure class="gallery-item" data-index="' + i + '">' +
            '<img src="' + it.src + '" alt="' + (it.legende || 'Photo Open Business Africa') + '" loading="lazy">' +
            '<figcaption><span class="cat">' + catLabel(it.categorie) + '</span>' + (it.legende || '') + '</figcaption>' +
          '</figure>'
        );
      }).join('');

      grid.querySelectorAll('.gallery-item').forEach(function (fig) {
        fig.addEventListener('click', function () {
          openLightbox(parseInt(fig.getAttribute('data-index'), 10));
        });
        var img = fig.querySelector('img');
        img.addEventListener('error', function () { fig.remove(); });
      });
    }

    /* ------- Lightbox ------- */
    var lb = document.getElementById('lightbox');
    var lbImg = lb ? lb.querySelector('img') : null;
    var lbCat = lb ? lb.querySelector('.lightbox__caption .cat') : null;
    var lbTxt = lb ? lb.querySelector('.lightbox__caption .txt') : null;
    var lbCount = lb ? lb.querySelector('.lightbox__count') : null;
    var idx = 0;

    function openLightbox(i) {
      if (!lb) return;
      idx = i;
      update();
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function update() {
      var it = visible[idx];
      if (!it) return;
      lbImg.src = it.src;
      lbImg.alt = it.legende || '';
      if (lbCat) lbCat.textContent = catLabel(it.categorie);
      if (lbTxt) lbTxt.textContent = it.legende || '';
      if (lbCount) lbCount.textContent = (idx + 1) + ' / ' + visible.length;
    }
    function next(step) {
      idx = (idx + step + visible.length) % visible.length;
      update();
    }

    if (lb) {
      lb.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
      lb.querySelector('.lightbox__nav--prev').addEventListener('click', function (e) { e.stopPropagation(); next(-1); });
      lb.querySelector('.lightbox__nav--next').addEventListener('click', function (e) { e.stopPropagation(); next(1); });
      lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
      document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') next(-1);
        if (e.key === 'ArrowRight') next(1);
      });
    }

    buildFilters();
    render();
  });
})();
