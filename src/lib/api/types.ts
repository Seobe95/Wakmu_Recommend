import { ObjectId, WithId } from "mongodb";

export interface GetSongsTypes {
  songs: WakmuSongs[];
  features: string[];
}

export interface WakmuSongs {
  _id: ObjectId;
  title: string;
  genre: string;
  artist: string[];
  features: string[];
  youtubeLink: string;
  emotionName: string;
  emotionReleted: string[];
}
