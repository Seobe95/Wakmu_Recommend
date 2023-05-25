export interface GetSongsTypes {
  songs: WakmuSongs[];
  features: string[];
}

export interface WakmuSongs {
  _id: string;
  title: string;
  genre: string;
  artist: string[];
  features: string[];
  youtubeLink: string;
  emotionName: string;
  emotionReleted: string[];
}
