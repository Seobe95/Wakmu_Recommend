import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectMongo() {
  const db = await client.db('wakta_recommend');
  return { db, client };
}

export { connectMongo };
