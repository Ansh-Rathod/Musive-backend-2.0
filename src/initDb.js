// import artists from "../mockdata/artists.js";
// import tracks from "../mockdata/tracks.js";
// import pool from "./db.js";

// // cuXgA7afTRqLxsa7

// export async function initDb() {
//   console.log("started creating table...");
//   await pool.query(`
//         create table public."Users"(
//           id serial primary key,
//           username varchar(28) not null unique,
//           passhash varchar not null
//         );`);
//   console.log("Finish creating table `Users`");
//   await pool.query(`
//         create table public."Artists"(
//           id integer unique not null,
//           username text not null unique,
//           display_name text not null,
//           avatar jsonb,
//           gender varchar,
//           PRIMARY KEY(id)
//         );`);
//   console.log("Finish creating table `Artists`");
//   await pool.query(`
//         create table public."Tracks"(
//           id integer unique not null,
//           user_id integer not null,
//           tags text[] not null DEFAULT '{}',
//           moods text[] not null DEFAULT '{}',
//           genres text[] not null DEFAULT '{}',
//           movements text[] not null DEFAULT '{}',
//           keywords text not null,
//           duration float not null,
//           track_name text not null,
//           download_url text not null,
//           src text not null,
//           cover_image jsonb,
//           PRIMARY KEY(id)
//       );`);
//   console.log("Finish creating table `Tracks`");
//   await addArtistDataToTable();
//   await addSongsToDb();
// }

// async function addArtistDataToTable() {
//   console.log("Started Adding artists.. ");

//   for (let i = 0; i < artists.length; i++) {
//     await pool.query(
//       `insert into public."Artists"
//        (id, username, display_name, avatar, gender)
//        values ($1, $2, $3, $4,$5) on conflict(id) do update set avatar = $4;`,
//       [
//         artists[i].id,
//         artists[i].username,
//         artists[i].display_name,
//         artists[i].avatar,
//         artists[i].gender,
//       ]
//     );
//   }
//   console.log("\n complete Adding artists\n ");
// }

// async function addSongsToDb() {
//   console.log("Started Adding tracks.. ");
//   for (let i = 0; i < tracks.length; i++) {
//     await pool.query(
//       `insert into public."Tracks"
//        (  id,
//           user_id,
//           tags,
//           moods,
//           genres,
//           movements,
//           keywords,
//           duration,
//           track_name,
//           download_url,
//           src,
//           cover_image
//           ) values ($1, $2, $3, $4, $5, $6,$7, $8, $9, $10, $11, $12)
//           on conflict(id) do update set cover_image = $12;`,
//       [
//         tracks[i].id,
//         tracks[i].user_id,
//         tracks[i].tags,
//         tracks[i].moods,
//         tracks[i].genres,
//         tracks[i].movements,
//         tracks[i].keywords,
//         tracks[i].duration,
//         tracks[i].track_name,
//         tracks[i].download_url,
//         tracks[i].src,
//         tracks[i].cover_image,
//       ]
//     );
//   }
//   console.log("\n complete Adding tracks\n ");
//   console.log("\n All set! You're good to go.\n ");
// }
