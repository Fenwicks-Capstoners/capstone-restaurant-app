//node nodejsscript.js in the terminal to run this node script

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

    await listDatabases(client);

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
};


// MongoDB Node Driver
//
// type
// node nodejsscript.js
// to run in terminal
// the file name is nodejsscript.js but can name the code above whatever