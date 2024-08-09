# MongoDB-Database-Fetch

Microservice implemented for group members. Part of CS361.

## Communication Contract ##

The following are instructions for making a sample call to my MonogoDB Database using JavaScript in VScode.

1. Reach out to me. I need to give you a private connection string and you need to give me your IP address so I can whitelist it.
   
2. In a fresh app.js file, open the terminal and enter: **npm install mongodb**

3. Paste the given connection string here in the starting code.
   ![image](https://github.com/user-attachments/assets/ff4c6762-def5-4501-83ea-218ead4de78d)

4. The main function to make a call to this database is as follows:
   ![image](https://github.com/user-attachments/assets/52dbb28b-18b1-43b9-9f0c-c8795bd962f4)

```
const { MongoClient } = require('mongodb');

const URI = 'CONNECTION STRING GOES HERE';
const client = new MongoClient(URI);


async function fetchCats() {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully');

        const database = client.db('cats');
        const collection = database.collection('catsDatabase');
        const catCollection = await collection.find({}).toArray();
        
        // Fetched data is stored catCollection.
        console.log(catCollection)

        // Other things to do with this data...

    } catch (err) {
        console.error('Error occurred:', err);
    } finally {
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

fetchCats();
```

5. After saving this file it can be run by typing into the terminal: **node app.js**
6. Data should be delievered in this form:
   
   ![image](https://github.com/user-attachments/assets/6785fac1-5d96-4460-93d9-6c878e46b48f)


7. Example data Stored in my MonogoDB looks like this:
   ![image](https://github.com/user-attachments/assets/e60e5e88-fbb2-42d5-872a-4e911f0b086b)

8. UML Graph
   ![image](https://github.com/user-attachments/assets/baa90fe8-a2ca-456d-8b6d-a9dd47af1868)
