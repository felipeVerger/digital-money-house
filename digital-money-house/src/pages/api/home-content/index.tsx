import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try{
        const client = await connectToDatabase();
        const db = client.db('grupo09database');
        const collection = db.collection('grupo09collection');
    
        const data = await collection.find({}).toArray();
        
        res.status(200).json({data})
    }catch(error){
        console.error('Error connecting to MongoDb', error);
        res.status(500).json({ error: 'Error connecting to MongoDB' })
    }
}