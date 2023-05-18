import { NextApiRequest, NextApiResponse } from 'next';
import { connect, disconnect } from '@/utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connect();

  try {
    const data = await client.db('grupo09database').collection('grupo09collection').find().toArray();
    disconnect();
    res.status(200).json({ data });
  } catch (error) {
    console.error('Error connecting to MongoDb', error);
    res.status(500).json({ error: 'Error connecting to MongoDB' });
  }
}
