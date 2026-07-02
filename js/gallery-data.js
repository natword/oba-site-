/* ============================================================
   GALERIE — Open Business Africa
   ============================================================
   POUR AJOUTER UNE PHOTO À LA GALERIE :
   1. Déposez le fichier image dans le dossier  images/
   2. Copiez un bloc { ... } ci-dessous (avec sa virgule)
   3. Renseignez :
      - src       : "images/nom-du-fichier.jpg"
      - legende   : la légende affichée sous la photo
      - categorie : UNE valeur parmi :
          "portraits" | "evenements" | "rencontres"
   4. Enregistrez : la photo apparaît automatiquement.

   L'ordre ci-dessous est l'ordre d'affichage sur la page.
   ============================================================ */

const OBA_GALLERY = [

  {
    src: "images/fondateur-portrait.jpg",
    legende: "L'Ambassadeur Cheick Keita, président fondateur d'Open Business Africa",
    categorie: "portraits"
  },
  {
    src: "images/fondateur-boardroom.jpg",
    legende: "L'Ambassadeur Cheick Keita — Paris",
    categorie: "portraits"
  },
  {
    src: "images/fondateur-salon.jpg",
    legende: "Portrait officiel — Ambassadeur Cheick Keita",
    categorie: "portraits"
  },
  {
    src: "images/fondateur-tabouret.jpg",
    legende: "L'Ambassadeur Cheick Keita",
    categorie: "portraits"
  },
  {
    src: "images/peea-scene.jpg",
    legende: "Prix d'Excellence de l'Étudiant Africain — cérémonie officielle",
    categorie: "evenements"
  },
  {
    src: "images/peea-vip.jpg",
    legende: "Accueil VIP — Prix d'Excellence de l'Étudiant Africain",
    categorie: "evenements"
  },
  {
    src: "images/peea-panel.jpg",
    legende: "Panel de discussion — Prix d'Excellence de l'Étudiant Africain",
    categorie: "rencontres"
  }

];

/* Libellés des filtres affichés sur la page galerie */
const OBA_GALLERY_CATS = {
  portraits: "Portraits",
  evenements: "Événements",
  rencontres: "Rencontres & panels"
};
