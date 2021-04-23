<<<<<<< HEAD


export async function getAllDocument(client, collection, sort) {
  const db = client.db();
  const getData = await db.collection(collection).find().sort(sort).toArray();
=======
import { MongoClient } from "mongodb";

export async function connectToDataBase() {
  const client = await MongoClient.connect(
    "mongodb+srv://deepak:deepakrh@cluster0.sfdwk.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}
export async function connectCredentials(client, collection, documents) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(documents);
  return result;
}
export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const getData = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
>>>>>>> 8c5dc2ce2d450977edd5824bdd7ea5efce5006da
  return getData;
}
