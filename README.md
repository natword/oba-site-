# Open Business Africa — Site web

Site vitrine complet, prêt à être déposé sur un hébergement web
(ou ouvert en local en double-cliquant sur `index.html`).

Design « Prestige Panafricain » : bleu nuit, or, ivoire — typographies
Fraunces & Archivo, animations au défilement, photos officielles intégrées.

## Structure

```
├── index.html            Accueil (hero, chiffres, missions, fondateur, contact)
├── about.html            À propos (histoire, valeurs, réseau)
├── vision.html           Notre vision (piliers, feuille de route, ODD)
├── services.html         Nos missions (4 missions détaillées + méthode)
├── fondateur.html        Le fondateur — Ambassadeur Dr Cheick KEITA
├── galerie.html          Galerie photo (filtres + visionneuse plein écran)
├── actualites.html       Actualités (alimenté par js/news-data.js)
├── contact.html          Contact (formulaire → contact@openbusinessafrica.com)
├── css/style.css         Feuille de style unique pour tout le site
├── js/
│   ├── script.js         Interactions (menu, animations, compteurs, formulaire)
│   ├── gallery-data.js   ★ Photos de la galerie — À ÉDITER pour en ajouter
│   ├── gallery-render.js Affichage automatique de la galerie
│   ├── news-data.js      ★ Contenu des actualités — à éditer pour publier
│   └── news-render.js    Affichage automatique des actualités
├── images/               Photos du site (versions web optimisées + originaux)
└── _ancienne-version/    Sauvegarde de l'ancien site (peut être supprimée)
```

## ★ Ajouter des photos à la galerie

1. Déposez le fichier image dans le dossier `images/`
   (idéalement moins de 500 Ko — redimensionnez les photos de téléphone).
2. Ouvrez `js/gallery-data.js` et copiez un bloc `{ ... }` en suivant les
   instructions écrites en haut du fichier (src, légende, catégorie).
3. Enregistrez : la photo apparaît automatiquement sur la page Galerie,
   avec son filtre et la visionneuse plein écran.

Catégories disponibles : `portraits`, `evenements`, `rencontres`
(vous pouvez en créer d'autres en les ajoutant dans `OBA_GALLERY_CATS`).

## Photos actuellement intégrées

Les originaux (`IMG_*.jpg`, `WhatsApp Image *.jpeg`) ont été conservés dans
`images/`. Le site utilise des copies optimisées pour le web :

| Fichier web                | Sujet                                        |
|----------------------------|----------------------------------------------|
| fondateur-portrait.jpg     | Portrait fauteuil, costume bleu              |
| fondateur-salon.jpg        | Assis, mains croisées, cravate rose          |
| fondateur-boardroom.jpg    | Salle de réunion, doigt levé                 |
| fondateur-tabouret.jpg     | Assis sur tabouret, cravate rouge            |
| peea-scene.jpg             | Cérémonie PEEA — scène                       |
| peea-vip.jpg               | PEEA — accueil VIP                           |
| peea-panel.jpg             | PEEA — panel de discussion                   |

## Publier une actualité

Tout se gère dans `js/news-data.js` : chaque bloc `{ ... }` correspond à un
article (titre, résumé, date, catégorie, image, lien). Instructions détaillées
en commentaire en haut du fichier. Pour illustrer un article avec une photo
locale, utilisez `image: "images/mon-fichier.jpg"`.

## Avant mise en ligne définitive

- Compléter le téléphone et l'adresse précise dans la section Contact
  (`index.html`) — actuellement marqués « à compléter ».
- Renseigner les liens des réseaux sociaux (icônes `in / X / f`, actuellement `#`).
- Le formulaire de contact ouvre la messagerie du visiteur (mailto vers
  contact@openbusinessafrica.com). Pour un envoi direct depuis le site,
  brancher un service type Formspree/Netlify Forms.
- Les actualités contiennent encore des textes d'exemple à remplacer.
