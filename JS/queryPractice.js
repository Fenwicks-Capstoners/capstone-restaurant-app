//node nodejsscript.js in the terminal to run this node script
//https://docs.mongodb.com/manual/crud/
/*
CRUD:
Create Operations
Read Operations
Update Operations
Delete Operations
 */
const {MongoClient} = require('mongodb');

async function main() {
    // we'll add code here soon


    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    await client.connect();

    //await listDatabases(client);

    try {
        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    }

    finally {
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));



    //Read Operations
    // Read operations retrieve documents from a collection; i.e. query a collection for documents. MongoDB provides the following methods to read documents from a collection:
    //
    // db.collection.find()
    console.log("Reading operations:");

    //capstone_database.getCollection("userCollection").find({"message":"Hello","status":{$nin:[1,2]}});


    //db.userCollection.find({});
};


// MongoDB Node Driver
//
// type
// node queryPractice.js
// to run in terminal
