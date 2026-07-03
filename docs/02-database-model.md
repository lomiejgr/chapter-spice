# 📚 Chapter & Spice
> Database Model
>
> Version : MVP 0.1
>
> Status : Draft

---

# Objectif

Définir le modèle de données du MVP.

Le modèle doit être :

- simple
- évolutif
- optimisé pour Supabase
- compatible avec les évolutions futures

---

# Vue d'ensemble

```

```
Profiles
    │
    ├────────────┐
    │            │
Library Members  │
    │            │
Libraries        │
    │            │
Books            │
    │            │
Book Files       │
    │            │
Readings         │
    │            │
Recommendations  │
    │
Activities
```

---

# Table : profiles

Une ligne = une lectrice.

## Colonnes

id (uuid)

email

display_name

avatar_url

created_at

---

# Table : libraries

Une bibliothèque partagée.

## Colonnes

id

name

owner_id

created_at

---

# Table : library_members

Permet à plusieurs lectrices de partager une bibliothèque.

## Colonnes

id

library_id

profile_id

role

accepted

created_at

Role :

OWNER

MEMBER

---

# Table : books

Livre commun.

Il n'existe qu'une seule fiche par livre dans une bibliothèque.

## Colonnes

id

library_id

title

author

series

volume

cover_url

description

language

pages

isbn

created_at

---

# Table : book_files

Les fichiers du livre.

Un livre peut posséder plusieurs fichiers.

Exemple :

EPUB

PDF

## Colonnes

id

book_id

type

storage_path

file_size

uploaded_by

created_at

---

# Table : readings

⚠️ Table la plus importante.

Une ligne = l'expérience d'une lectrice sur un livre.

Exemple :

Justine → Fourth Wing

Marie → Fourth Wing

Deux lignes différentes.

## Colonnes

id

book_id

profile_id

status

progress

rating

spicy_rating

emotion_rating

favorite

recommended

comment

started_at

finished_at

updated_at

---

Status

TO_READ

READING

FINISHED

ABANDONED

---

# Table : recommendations

Une recommandation est un lien entre deux lectrices.

## Colonnes

id

book_id

from_profile_id

to_profile_id

message

status

created_at

accepted_at

---

Status

PENDING

ACCEPTED

DECLINED

---

# Table : activities

Flux d'activité.

Elle sert à alimenter le Home.

## Colonnes

id

library_id

profile_id

book_id

type

payload

created_at

---

Types

BOOK_ADDED

BOOK_UPDATED

READING_STARTED

READING_FINISHED

BOOK_RECOMMENDED

RECOMMENDATION_ACCEPTED

COMMENT_UPDATED

---

# Relations

profiles

↓

library_members

↓

libraries

↓

books

↓

readings

↓

recommendations

↓

activities

---

# Règles métier

Une bibliothèque possède plusieurs membres.

Un membre peut appartenir à plusieurs bibliothèques.

Un livre appartient à une bibliothèque.

Un livre possède plusieurs fichiers.

Chaque lectrice possède une seule ligne Reading par livre.

Une recommandation relie deux lectrices.

Le Home est alimenté exclusivement par Activities.

---

# Pourquoi une table Readings ?

Très important.

Nous aurions pu mettre :

rating

status

comment

dans Books.

Nous ne le faisons pas.

Pourquoi ?

Parce que les livres sont communs.

Les lectures sont personnelles.

Cette séparation est le cœur du modèle de données.

---

# Pourquoi une table Activities ?

Au début elle paraît inutile.

Mais elle simplifie énormément le Home.

Au lieu de recalculer :

- les recommandations
- les commentaires
- les notes
- les lectures

on affiche simplement les dernières activités.

Cela rendra l'application beaucoup plus performante.

---

# Hors MVP

Les tables suivantes seront ajoutées plus tard.

Collections

Quotes

Bookmarks

Achievements

Wrapped

Book DNA

Notifications

Buddy Reads

Book Clubs
