/* ============================================================
   ACTUALITÉS — Open Business Africa
   ============================================================
   CE FICHIER SERT À AJOUTER / MODIFIER / SUPPRIMER DES ACTUALITÉS
   SANS TOUCHER AU RESTE DU SITE.

   COMMENT AJOUTER UNE ACTUALITÉ :
   1. Copier un bloc entre accolades { ... } ci-dessous (avec sa virgule).
   2. Le coller juste après "const OBA_NEWS = [".
   3. Remplir les champs avec le contenu de la nouvelle actualité.
   4. Enregistrer le fichier : l'actualité apparaît automatiquement sur le site.

   COMMENT SUPPRIMER UNE ACTUALITÉ :
   - Supprimer entièrement son bloc { ... } (y compris la virgule qui suit,
     ou celle qui précède s'il s'agit du dernier bloc).

   CHAMPS DISPONIBLES :
   - titre      : le titre de l'article (texte)
   - resume     : un court résumé, 2-3 phrases (texte)
   - date       : la date affichée, au format libre, ex: "12 juin 2026" (texte)
   - categorie  : une SEULE valeur parmi :
                    "investissement" | "partenariats" | "entrepreneuriat"
                    | "international" | "evenement"
   - image      : lien (URL) vers une image. Laisser "" (vide) si pas d'image
                  pour l'instant — un visuel de remplacement s'affichera.
   - lien       : lien vers l'article complet (URL). Laisser "#" si l'article
                  complet n'est pas encore en ligne.
   - aLaUne     : true ou false. Un SEUL article à la fois doit avoir "true" —
                  c'est celui qui s'affiche en grand format tout en haut de
                  la page Actualités. Mettez "true" sur le plus récent.

   ORDRE D'AFFICHAGE :
   Les actualités s'affichent dans l'ordre où elles sont écrites ici.
   Pour faire apparaître la plus récente en premier dans la grille,
   placez-la en haut de la liste (juste après le bloc "aLaUne: true").
   ============================================================ */

const OBA_NEWS = [

  {
    titre: "Titre de l'article à la une",
    resume: "Emplacement réservé pour le résumé du premier article mis en avant — à remplacer par une vraie actualité d'Open Business Africa (annonce, partenariat, événement...).",
    date: "Date à publier",
    categorie: "investissement",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Elegant_boardroom_%28Unsplash%29.jpg?width=1200",
    lien: "#",
    aLaUne: true
  },

  {
    titre: "Titre de l'article — Investissement",
    resume: "Résumé à compléter avec une actualité réelle sur un projet d'investissement accompagné par OBA.",
    date: "Date à publier",
    categorie: "investissement",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Business_man_and_woman_handshake_in_work_office.jpg?width=900",
    lien: "#",
    aLaUne: false
  },

  {
    titre: "Titre de l'article — Partenariats",
    resume: "Résumé à compléter avec une actualité réelle sur un accord ou une joint-venture Nord-Sud.",
    date: "Date à publier",
    categorie: "partenariats",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Business_man_and_woman_handshake_in_work_office.jpg?width=900",
    lien: "#",
    aLaUne: false
  },

  {
    titre: "Titre de l'article — Entrepreneuriat",
    resume: "Résumé à compléter avec une actualité réelle sur une start-up accompagnée par Bridge of Innovation.",
    date: "Date à publier",
    categorie: "entrepreneuriat",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tables_in_a_boardroom_%28Unsplash%29.jpg?width=900",
    lien: "#",
    aLaUne: false
  },

  {
    titre: "Titre de l'article — International",
    resume: "Résumé à compléter avec une actualité réelle sur une intervention internationale (OCDE, UNESCO...).",
    date: "Date à publier",
    categorie: "international",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Arc_de_Triomphe%2C_Paris.JPG?width=900",
    lien: "#",
    aLaUne: false
  },

  {
    titre: "Titre de l'article — Événement",
    resume: "Résumé à compléter avec une actualité réelle sur un forum ou un événement organisé par OBA.",
    date: "Date à publier",
    categorie: "evenement",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Conference_room_table_%28Unsplash%29.jpg?width=900",
    lien: "#",
    aLaUne: false
  }

];
