import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.FOOD_URI;
let client;

if (!client) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
}
/**
 * 1 connect URI from env
 * 2 assign a function for connet collection
 * 3 connect DB name form env
 */

export const connect = (collectionName) => {
  const uri = process.env.food_URI;
  const database = process.env.DB_NAME;

  if (!uri) {
    console.error("ENVIRONMENT ERROR: FOOD_URI is missing!");
  }
  console.log("Connecting to Database:", database);

  return client.db(database).collection(collectionName);
};
