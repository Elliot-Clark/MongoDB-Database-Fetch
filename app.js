const { MongoClient } = require('mongodb');

const URI = 'PASTE STRING HERE';
const client = new MongoClient(URI);

// Get the entire database
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

// Save a cat in the Database
async function saveCat(newCat) {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const database = client.db('cats');
        const collection = database.collection('catsDatabase');

        const result = await collection.insertOne(newCat);
        console.log("New cat added");
    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}


const newCat = {
    id: '1',
    location: { lat: 40, lng: -74 },
    name: 'Whiskers',
    type: 'Persian',
    personality: 'Playful',
    indoor: true,
    outdoor: false
};

saveCat(newCat);
