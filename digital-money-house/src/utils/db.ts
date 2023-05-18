import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient !== null) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGO_URI as string);

  try {
    await client.connect();
  } catch (error) {
    console.log('Error al conectar a MongoDB Atlas', error);
    throw error;
  }

  cachedClient = client;
  return client;
}