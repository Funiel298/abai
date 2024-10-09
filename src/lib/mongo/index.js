import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) {
  throw new Error('WTF Brat?? Gde tupoi URI?');
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // В production создаём новое подключение
  client = new MongoClient(URI, options);
  clientPromise = client.connect();
}

export default clientPromise;
