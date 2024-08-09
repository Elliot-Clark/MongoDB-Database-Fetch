const { MongoClient } = require('mongodb');

const URI = 'PASTE STRING HERE';
const client = new MongoClient(URI);

async function fetchCats() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const database = client.db('cats');
        const collection = database.collection('catsDatabase');

        const catCollection = await collection.find({}).toArray();
        
        console.log(catCollection);
    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

fetchCats();