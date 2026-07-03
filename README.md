# Chapter & Spice

Vrai starter produit pour l'application Chapter & Spice : Next.js + React + Tailwind + Supabase.

## Lancer en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS
- Supabase Auth + PostgreSQL + Storage
- PWA à ajouter à l'étape suivante
- Lecteur EPUB prévu via `epubjs`

## Supabase

1. Créer un projet Supabase.
2. Copier les variables dans `.env.local`.
3. Exécuter `supabase/schema.sql` dans l'éditeur SQL Supabase.
4. Créer deux buckets Storage : `book-files` et `book-covers`.

## Prochaines étapes de dev

- Brancher les pages mockées aux tables Supabase.
- Ajouter Auth et invitation d'une amie.
- Upload EPUB/PDF vers Supabase Storage.
- Lecteur EPUB/PDF réel.
- Realtime sur livres et recommandations.
