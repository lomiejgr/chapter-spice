# 📚 Chapter & Spice
> Product Blueprint
>
> Version : 0.1
>
> Status : Draft
>
> Product Owner : Justine
>
> Last update : 03/07/2026

---

# 1. Vision

Chapter & Spice est une application mobile permettant à plusieurs lectrices de partager une bibliothèque commune, suivre leurs lectures et se recommander des livres.

Notre ambition n'est pas de remplacer Goodreads ou Kindle.

Nous voulons créer l'application que deux meilleures amies utilisent naturellement pour parler de leurs lectures.

---

# 2. Le problème

Aujourd'hui une lectrice utilise plusieurs applications.

- Kindle pour lire
- Goodreads pour suivre ses lectures
- WhatsApp pour discuter
- TikTok pour découvrir de nouveaux livres
- Notes pour sauvegarder ses recommandations

L'expérience est fragmentée.

---

# 3. Notre hypothèse

Si deux lectrices disposent d'une bibliothèque commune, d'un suivi de lecture simple et d'un système de recommandations intégré, elles utiliseront Chapter & Spice au lieu d'alterner entre plusieurs applications.

---

# 4. Le MVP

Le MVP doit permettre de :

- créer une bibliothèque
- inviter une amie
- ajouter un livre
- modifier un livre
- supprimer un livre
- suivre sa lecture
- noter un livre
- commenter un livre
- recommander un livre
- accepter une recommandation
- lire un EPUB
- consulter un PDF

Tout le reste est hors MVP.

---

# 5. Hors MVP

- IA
- Wrapped
- Book DNA
- Collections
- Clubs
- Notifications Push
- Audiobooks
- Challenges
- Gamification

---

# 6. Persona principal

Julie

34 ans

Lit 60 livres par an.

Principalement de la romance et de la romantasy.

Utilise Kindle.

Découvre ses livres sur BookTok.

Échange quotidiennement avec une amie sur WhatsApp.

Elle cherche un outil simple qui centralise tout.

---

# 7. Objectif utilisateur

En moins de 30 secondes une lectrice doit pouvoir :

- retrouver un livre
- voir l'avis de son amie
- ajouter le livre à sa PAL
- commencer à lire

---

# 8. Les principes produit

## Mobile First

Toute décision est prise pour le téléphone.

---

## Le livre est partagé.

Les expériences sont personnelles.

Chaque lectrice possède :

- son statut
- sa progression
- ses notes
- ses commentaires

---

## Toujours modifiable

Aucune information personnelle n'est figée.

Une lectrice peut toujours modifier :

- son statut
- sa note
- son commentaire

---

## Une seule action principale par écran

Chaque écran possède un CTA évident.

---

## L'émotion compte autant que la note

Nous suivons :

⭐ Note

🌶️ Niveau spicy

😭 Impact émotionnel

---

# 9. Navigation MVP

Home

↓

Library

↓

Book

↓

Reader

↓

Recommendations

↓

Profile

---

# 10. Les parcours MVP

## Créer une bibliothèque

Créer un compte

↓

Créer une bibliothèque

↓

Inviter une amie

---

## Ajouter un livre

Bouton +

↓

Importer EPUB ou PDF

↓

Compléter les informations

↓

Enregistrer

---

## Recommander

Ouvrir un livre

↓

Recommander

↓

Choisir une lectrice

↓

Envoyer

---

## Accepter une recommandation

Recevoir la recommandation

↓

Ajouter à ma PAL

↓

Le livre apparaît dans la bibliothèque

---

## Modifier une lecture

Ouvrir le livre

↓

Modifier

↓

Changer :

- statut
- note
- commentaire

---

# 11. Les règles métier

Une bibliothèque contient plusieurs lectrices.

Une lectrice peut appartenir à plusieurs bibliothèques.

Un livre appartient à une bibliothèque.

Chaque lectrice possède une review par livre.

Chaque lectrice possède un statut par livre.

Une recommandation ne peut exister qu'une seule fois entre deux lectrices pour un même livre tant qu'elle est active.

---

# 12. KPI

Nombre de livres ajoutés

Nombre de recommandations envoyées

Nombre de recommandations acceptées

Nombre de livres terminés

---

# 13. Critère de succès

Deux lectrices utilisent uniquement Chapter & Spice pendant un mois pour :

- partager leurs lectures
- suivre leurs livres
- se recommander des romans

sans revenir à Goodreads ou WhatsApp pour cette utilisation.

---

# 14. Ce qui est important

Nous construisons une expérience.

Pas un catalogue de fonctionnalités.

Chaque décision devra répondre à la question :

"Est-ce que cette fonctionnalité améliore réellement l'expérience des lectrices ?"

Si la réponse est non, elle n'entre pas dans le MVP.=
