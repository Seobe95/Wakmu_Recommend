import songsModel from '@/models/songs/songs.model';
import type { NextApiRequest, NextApiResponse } from 'next';

async function get(res: NextApiResponse) {
  const data = await songsModel.get();

  const set = new Set();
  data.forEach((item) => {
    item.features.forEach((feature) => set.add(feature));
  });
  const features = Array.from(set);

  return res.status(200).json({ songs: data, features: features });
}

async function recommend(req: NextApiRequest, res: NextApiResponse) {
  const { features }: { features: string[] } = req.body;
  const songs = await songsModel.recommend({ features });

  const usersFeaturesObj = features.reduce((obj, feature, index) => {
    obj[feature] = 5 - index;
    return obj;
  }, {} as Record<string, number>);

  const newSongs = songs
    .map((song) => {
      let score = 0;
      let sameFeature = 0;

      song.features.forEach((feature) => {
        if (feature in usersFeaturesObj) {
          score += usersFeaturesObj[feature];
          sameFeature += 1;
        }
      });

      return { song, score, sameFeature };
    })
    .sort((a, b) => {
      if (a.sameFeature === b.sameFeature) {
        return b.score - a.score;
      }
      return b.sameFeature - a.sameFeature;
    })
    .slice(0, 5)
    .map((item) => {
      return item.song;
    });

  return res.status(200).json({ songs: newSongs });
}

const songsCtrl = { get, recommend };

export default songsCtrl;
