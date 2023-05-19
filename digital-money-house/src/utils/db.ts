import { MongoClient } from "mongodb";

let client: MongoClient | null;

export const connect = async() => {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI as string);
  }
  await client.connect();
  console.log("Connected to MongoDB!");
  return client;
};

export const disconnect = () => {
  if (client) {
    client.close();
    client = null;
  }
};