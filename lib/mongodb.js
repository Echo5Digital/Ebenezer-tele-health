import { MongoClient } from 'mongodb'

let clientPromise

function getClientPromise() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is not set in the environment.')
  }

  if (clientPromise) return clientPromise

  if (process.env.NODE_ENV === 'development') {
    // Reuse the client across HMR reloads in development.
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = new MongoClient(uri).connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    clientPromise = new MongoClient(uri).connect()
  }

  return clientPromise
}

export async function getDb() {
  const client = await getClientPromise()
  return client.db()
}
