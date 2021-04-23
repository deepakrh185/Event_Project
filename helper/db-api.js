

export async function getAllDocument(client, collection, sort) {
  const db = client.db();
  const getData = await db.collection(collection).find().sort(sort).toArray();
  return getData;
}
