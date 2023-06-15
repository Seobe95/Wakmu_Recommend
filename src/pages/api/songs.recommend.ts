import checkSupportMethod from '@/controllers/error/checkSupportMethod';
import handleError from '@/controllers/error/handleError';
import songsCtrl from '@/controllers/songs/songs.ctrl';
import { WakmuSongs } from '@/lib/api/types';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  songs: WakmuSongs[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { method } = req;
  const supportMethod = ['POST'];

  try {
    checkSupportMethod(supportMethod, method);
    await songsCtrl.recommend(req, res);
  } catch (err) {
    handleError({ err, res });
  }
}
