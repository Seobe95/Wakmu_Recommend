import { ParameterizedContext } from 'koa';
import Songs from '../../models/songs';

const songsCtrl = {
  list: async (ctx: ParameterizedContext) => {
    try {
      const songs = await Songs.find().exec();
      const featuresSet = new Set();

      songs.forEach((song) => {
        song.features.forEach((feature) => featuresSet.add(feature));
      });

      const features = Array.from(featuresSet);

      ctx.body = {
        songs,
        features,
      };
    } catch (e) {
      console.log(e);
      ctx.throw([500, e]);
    }
  },
  // insertData: async () => {
  //   try {
  //     const jsonData: SongType[] = require('./wakmu.json');

  //     const newData = jsonData.map(item => {
  //       return {
  //         ...item,
  //         artist: item.artist[0].split(", "),
  //         features: item.features[0].split(", "),
  //         emotionReleted: item.features[0].split(", ")
  //       }
  //     });

  //     await Songs.insertMany(newData)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
};

export default songsCtrl;