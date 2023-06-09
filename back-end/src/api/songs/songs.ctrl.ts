import { Context, DefaultContext, ParameterizedContext } from 'koa';
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
      ctx.throw([500, e]);
    }
  },
  recommend: async (ctx: ParameterizedContext) => {
    try {
      const { features } = ctx.request.body as { features: string[] };

      const userFeaturesObject = features.reduce((obj, feature, index) => {
        const key = feature;
        const value = 5 - index;
        obj[key] = value;
        return obj;
      }, {} as Record<string, number>);

      console.log(userFeaturesObject);

      const temp = await Songs.find({
        features: { $in: features },
      });

      const recommendSongs = temp.map((song) => {
        let score = 0;

        song.features.forEach((feature) => {
          if (feature in userFeaturesObject) {
            score += userFeaturesObject[feature];
          }
        });

        return { song, score };
      });

      const result = recommendSongs
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

      ctx.body = {
        songs: result.map((item) => {
          return item.song;
        }),
      };
    } catch (e) {
      ctx.throw([500, e]);
    }
  },
};

export default songsCtrl;
