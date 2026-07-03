-- Chapter & Spice - Supabase schema V1
create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  bio text,
  created_at timestamptz default now()
);

create table public.libraries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz default now()
);

create table public.library_members (
  library_id uuid references public.libraries(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  role text check (role in ('owner','member')) default 'member',
  created_at timestamptz default now(),
  primary key(library_id,user_id)
);

create table public.books (
  id uuid primary key default gen_random_uuid(),
  library_id uuid references public.libraries(id) on delete cascade,
  title text not null,
  author text,
  series text,
  volume text,
  genre text,
  language text,
  pages int,
  summary text,
  cover_url text,
  file_url text,
  file_type text check (file_type in ('epub','pdf')),
  added_by uuid references public.profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.book_reviews (
  id uuid primary key default gen_random_uuid(),
  book_id uuid references public.books(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  status text check (status in ('PAL','En cours','Lu','Abandonné')) default 'PAL',
  rating int check (rating between 0 and 5),
  spicy_rating int check (spicy_rating between 0 and 5),
  emotion_rating int check (emotion_rating between 0 and 5),
  comment text,
  favorite boolean default false,
  started_at date,
  finished_at date,
  book_boyfriend text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(book_id,user_id)
);

create table public.tags (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  category text
);

create table public.book_tags (
  book_id uuid references public.books(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key(book_id,tag_id)
);

create table public.recommendations (
  id uuid primary key default gen_random_uuid(),
  book_id uuid references public.books(id) on delete cascade,
  from_user uuid references public.profiles(id) on delete cascade,
  to_user uuid references public.profiles(id) on delete cascade,
  message text,
  status text check (status in ('new','accepted','dismissed')) default 'new',
  created_at timestamptz default now(),
  unique(book_id,from_user,to_user)
);

create table public.quotes (
  id uuid primary key default gen_random_uuid(),
  book_id uuid references public.books(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  quote text not null,
  note text,
  location text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.libraries enable row level security;
alter table public.library_members enable row level security;
alter table public.books enable row level security;
alter table public.book_reviews enable row level security;
alter table public.recommendations enable row level security;
alter table public.quotes enable row level security;

-- Minimal RLS: members can read/update shared library content.
create policy "profiles readable" on public.profiles for select using (true);
create policy "own profile update" on public.profiles for update using (auth.uid() = id);

create policy "libraries readable by members" on public.libraries for select using (exists (select 1 from public.library_members m where m.library_id=id and m.user_id=auth.uid()));
create policy "books readable by members" on public.books for select using (exists (select 1 from public.library_members m where m.library_id=books.library_id and m.user_id=auth.uid()));
create policy "books insert by members" on public.books for insert with check (exists (select 1 from public.library_members m where m.library_id=books.library_id and m.user_id=auth.uid()));
create policy "books update by members" on public.books for update using (exists (select 1 from public.library_members m where m.library_id=books.library_id and m.user_id=auth.uid()));

create policy "reviews own or library read" on public.book_reviews for select using (true);
create policy "reviews own upsert" on public.book_reviews for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "recommendations own read" on public.recommendations for select using (auth.uid()=from_user or auth.uid()=to_user);
create policy "recommendations create own" on public.recommendations for insert with check (auth.uid()=from_user);
create policy "recommendations receiver update" on public.recommendations for update using (auth.uid()=to_user);
