import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  // Chequear si ya esta conectado para reusar la conexion
  if (conn.isConnected) return;

  const db = await connect(process.env.MONGO_URI as string);

  conn.isConnected = Boolean(db.connections[0].readyState);

  console.log(db.connection.db.databaseName);
}

connection.on("Connected", () => {
  console.log("MongoDB is connected");
});

connection.on("error", (err) => {
  console.log(err);
});
