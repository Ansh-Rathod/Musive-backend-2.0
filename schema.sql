create table Users(
    id serial primary key,
    username varchar(28) not null unique,
    passhash varchar not null
);

create table public."Artists"(
  id integer unique not null, 
  username text not null unique,
  display_name text not null,
  avatar jsonb,
  gender varchar,
  PRIMARY KEY(id)
);

create table public."Tracks"(
  id integer unique not null,
  user_id integer not null,
  tags text[] not null DEFAULT '{}',
  moods text[] not null DEFAULT '{}',
  genres text[] not null DEFAULT '{}',
  movements text[] not null DEFAULT '{}',
  keywords text not null,
  duration float not null,
  track_name text not null,
  download_url text not null,
  src text not null,
  cover_image jsonb,
  PRIMARY KEY(id)
);

alter table songs
add constraint user_id_fk FOREIGN KEY (user_id) REFERENCES artists(id)
match full on update CASCADE on delete CASCADE;
