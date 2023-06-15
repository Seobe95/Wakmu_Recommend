import { WakmuSongs } from '@/lib/api/types';
import { connectMongo } from '../connectMongo';

async function get(): Promise<WakmuSongs[]> {
  const { db } = await connectMongo();
  const songCollection = db.collection<WakmuSongs>('songs').find();
  const songs = await songCollection.toArray();

  return songs;
}

async function recommend({
  features,
}: {
  features: string[];
}): Promise<WakmuSongs[]> {
  const { db } = await connectMongo();
  const songCollection = db.collection<WakmuSongs>('songs').find({
    features: {
      $in: features
    }
  });

  const songs = await songCollection.toArray();
  return songs
}

const songsModel = { get, recommend };

export default songsModel;
