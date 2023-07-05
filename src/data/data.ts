export const songs = [
  {
    title: "song 0",
    artist: "artist 0",
    path: "/songs/song0.mp3",
    cover: "/images/cover0.jpg",
  },
  {
    title: "song 1",
    artist: "artist 1",
    path: "/songs/song1.mp3",
    cover: "/images/cover1.jpg",
  },
  {
    title: "song 2",
    artist: "artist 2",
    path: "/songs/song2.mp3",
    cover: "/images/cover2.jpg",
  },
  {
    title: "song 3",
    artist: "artist 3",
    path: "/songs/song3.mp3",
    cover: "/images/cover3.jpg",
  },
  {
    title: "song 4",
    artist: "artist 4",
    path: "/songs/song4.mp3",
    cover: "/images/cover4.jpg",
  },
  {
    title: "song 5",
    artist: "artist 5",
    path: "/songs/song5.mp3",
    cover: "/images/cover5.jpg",
  },
];

export type Song = {
  title: string;
  artists: string;
  path: string;
  cover: string;
};

export const categories = [
  "Recently played",
  "Liked songs",
  "Shows you might like",
  "Fresh new music",
  "Your top mixes",
  "Mood",
  "Popular artists",
  "Recommended for today",
];
