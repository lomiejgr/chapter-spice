# 📚 Chapter & Spice
> Information Architecture
>
> Version : 0.2
>
> Status : MVP
>
> Last update : 03/07/2026

---

# Objectif

Construire une application qui accompagne la lectrice dans son quotidien.

La navigation est pensée autour de ses actions, et non autour des données.

Une lectrice ne pense pas :

> "Je vais dans ma bibliothèque."

Elle pense :

- Je vais continuer mon livre.
- Je vais voir ce que Marie m'a conseillé.
- Je cherche mon prochain livre.

Toute l'architecture est construite autour de ces intentions.

---

# Navigation principale

La navigation est volontairement réduite.

```

🏠 Accueil

📚 Bibliothèque

➕

❤️ Activité

👤 Profil

```

Le bouton "+" reste accessible en permanence.

---

# Pourquoi "Activité" et non "Recommandations" ?

Une recommandation est une activité.

Une lecture terminée est une activité.

Une nouvelle note est une activité.

Un commentaire est une activité.

Toutes ces informations appartiennent au même flux.

Comme Instagram ou LinkedIn.

---

# Home

Le Home est le centre de l'application.

Chaque ouverture doit donner envie de rester.

---

## Continuer ma lecture

Toujours affiché en premier.

Grande carte.

Couverture.

Progression.

Bouton Continuer.

---

## Activité récente

Exemples :

❤️ Marie recommande Fourth Wing

⭐ Marie a mis 5 étoiles à Powerless

📖 Marie a terminé Quicksilver

🔥 Marie commence Onyx Storm

Chaque carte est cliquable.

Elle ouvre directement la fiche du livre.

---

## Pour toi

Les recommandations encore non traitées.

Maximum 3.

Chaque carte contient :

Couverture

Qui recommande

Commentaire

Bouton

Ajouter à ma PAL

Plus tard

Lorsque la recommandation est acceptée :

elle disparaît automatiquement de cette section.

---

## Ma PAL

Les trois prochains livres à lire.

Bouton Voir toute ma PAL.

---

## Mes statistiques

Petits indicateurs.

Livres lus

PAL

En cours

Ils ouvrent directement la bibliothèque filtrée.

---

# Bibliothèque

La bibliothèque est une vue de gestion.

Elle contient tous les livres.

Objectif :

Retrouver rapidement un livre.

---

## Recherche

Titre

Auteur

Série

---

## Filtres

Statut

Lecture

Note

Spicy

Emotion

Lectrice

Format

---

## Affichage

Grille (par défaut)

Liste

---

## Carte livre

Couverture

Titre

Auteur

Badges :

📖 En cours

❤️ Recommandé

✨ Coup de cœur

Progression

---

# Fiche livre

Le cœur du produit.

---

## Informations communes

Couverture

Titre

Auteur

Série

Résumé

Genres

Tags

---

## Mon expérience

Toujours affichée en premier.

Statut

Progression

⭐

🌶

😭

Commentaire

Modifier

---

## Les autres lectrices

Une carte par lectrice.

Avatar

Statut

Notes

Commentaire

Date de lecture

---

## Recommandations

Historique.

Qui recommande ?

À qui ?

Acceptée ?

Refusée ?

---

## Actions

Lire

Modifier

Supprimer

Recommander

---

# Lecteur

Le lecteur est personnel.

Il mémorise :

Dernière page

Progression

Bookmarks

Notes

---

# Profil

Le profil raconte l'histoire de la lectrice.

Pas uniquement des statistiques.

---

## En cours

---

## PAL

---

## Dernières lectures

---

## Mes recommandations

Envoyées

Acceptées

En attente

---

## Statistiques

Livres lus

Note moyenne

Spicy moyen

Emotion moyenne

---

## Bibliothèques

Liste des bibliothèques partagées.

Exemple :

❤️ Justine & Marie

Fantasy Club

---

# Activité

Cette page remplace les recommandations.

Elle regroupe toute la vie de la bibliothèque.

Filtres.

Toutes

Recommandations

Lectures

Commentaires

Notes

---

Exemple.

❤️ Marie recommande Fourth Wing

⭐⭐⭐⭐⭐ Marie termine Fourth Wing

📖 Justine commence Powerless

💬 Marie ajoute un commentaire

Chaque événement ouvre directement le livre.

---

# Ajouter (+)

Bottom Sheet.

Ajouter un livre

Importer EPUB

Importer PDF

Créer une bibliothèque

Rejoindre une bibliothèque

---

# Composants

BookCard

BookShelf

ContinueReadingCard

RecommendationCard

ActivityCard

ProfileCard

ReadingStatus

Rating

SpicyRating

EmotionRating

Comment

SearchBar

BottomNavigation

BottomSheet

ProgressBar

---

# Les informations communes

Livre

Auteur

Couverture

Résumé

Genres

Tags

Série

---

# Les informations personnelles

Statut

Progression

Commentaires

Notes

Citations (V2)

Bookmarks (V2)

---

# Les règles UX

Le Home est toujours le point d'entrée.

Une seule action principale par écran.

Maximum 3 clics.

Toutes les cartes sont cliquables.

La couverture est toujours l'élément principal.

Les expériences personnelles sont toujours affichées avant celles des autres.

---

# MVP

Le MVP comporte uniquement :

Accueil

Bibliothèque

Fiche Livre

Lecteur

Activité

Profil

Settings
