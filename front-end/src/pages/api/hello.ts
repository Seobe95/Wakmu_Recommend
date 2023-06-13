// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongo } from '@/models/connectMongo';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { client, db } = await connectMongo();
  const test = db.collection('songs').find();
  const result = await test.toArray();
  res.status(200).json({ name: result });
  client.close();
}
