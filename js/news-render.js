/* ============================================================
   Affichage automatique des actualités depuis js/news-data.js
   (ne pas modifier — le contenu se gère dans news-data.js)
   ============================================================ */
(function () {
  'use strict';

  var CAT_LABELS = {
    investissement: 'Investissement',
    partenariats: 'Partenariats',
    entrepreneuriat: 'Entrepreneuriat',
    international: 'International',
    evenement: 'Événements'
  };

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof OBA_NEWS === 'undefined') return;

    var featuredWrap = document.getElementById('newsFeatured');
    var gridWrap = document.getElementById('newsGrid');
    var filtersWrap = document.getElementById('newsFilters');
    if (!gridWrap) return;

    var featured = OBA_NEWS.filter(function (n) { return n.aLaUne; })[0] || null;
    var rest = OBA_NEWS.filter(function (n) { return n !== featured; });
    var current = 'all';

    function label(c) { return CAT_LABELS[c] || c; }

    var PLACEHOLDER =
      'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#0C1D3F"/><stop offset="1" stop-color="#081226"/></linearGradient></defs>' +
        '<rect width="1200" height="750" fill="url(#g)"/>' +
        '<g fill="none" stroke="#8E1638" stroke-width="1.5" opacity="0.75">' +
        '<circle cx="600" cy="375" r="120"/><circle cx="600" cy="375" r="95" opacity="0.5"/></g>' +
        '<text x="600" y="393" text-anchor="middle" font-family="Arial,sans-serif" font-size="46" font-weight="700" fill="#8E1638">OBA</text>' +
        '</svg>'
      );

    function media(n) {
      var src = n.image && n.image.length ? n.image : PLACEHOLDER;
      return '<img src="' + src + '" alt="" loading="lazy">';
    }

    function guardImages(root) {
      root.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('error', function handle() {
          img.removeEventListener('error', handle);
          img.src = PLACEHOLDER;
        });
      });
    }

    /* --------- À la une --------- */
    if (featuredWrap && featured) {
      featuredWrap.innerHTML =
        '<div class="news-featured__media">' + media(featured) + '</div>' +
        '<div class="news-featured__body">' +
          '<div class="news-card__meta"><span class="cat">' + label(featured.categorie) + '</span><span>' + (featured.date || '') + '</span></div>' +
          '<h2>' + featured.titre + '</h2>' +
          '<p>' + (featured.resume || '') + '</p>' +
          (featured.lien && featured.lien !== '#'
            ? '<a class="text-link" style="margin-top:1.4rem" href="' + featured.lien + '">Lire l’article <span class="arrow">→</span></a>'
            : '') +
        '</div>';
      guardImages(featuredWrap);
    }

    /* --------- Filtres --------- */
    if (filtersWrap) {
      var cats = [];
      OBA_NEWS.forEach(function (n) { if (cats.indexOf(n.categorie) === -1) cats.push(n.categorie); });
      var html = '<button type="button" data-cat="all" class="is-active">Toutes</button>';
      cats.forEach(function (c) { html += '<button type="button" data-cat="' + c + '">' + label(c) + '</button>'; });
      filtersWrap.innerHTML = html;
      filtersWrap.querySelectorAll('button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          filtersWrap.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
          btn.classList.add('is-active');
          current = btn.getAttribute('data-cat');
          renderGrid();
        });
      });
    }

    /* --------- Grille --------- */
    function renderGrid() {
      var list = rest.filter(function (n) { return current === 'all' || n.categorie === current; });
      if (!list.length) {
        gridWrap.innerHTML = '<div class="gallery-empty" style="grid-column:1/-1">Aucune actualité dans cette catégorie pour le moment.</div>';
        return;
      }
      gridWrap.innerHTML = list.map(function (n) {
        return (
          '<article class="news-card">' +
            '<div class="news-card__media">' + media(n) + '</div>' +
            '<div class="news-card__body">' +
              '<div class="news-card__meta"><span class="cat">' + label(n.categorie) + '</span><span>' + (n.date || '') + '</span></div>' +
              '<h3>' + n.titre + '</h3>' +
              '<p>' + (n.resume || '') + '</p>' +
              (n.lien && n.lien !== '#'
                ? '<a class="text-link" href="' + n.lien + '">Lire l’article <span class="arrow">→</span></a>'
                : '') +
            '</div>' +
          '</article>'
        );
      }).join('');
      guardImages(gridWrap);
    }
    renderGrid();
  });
})();
