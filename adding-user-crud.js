const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Omar:George72@cluster0.cpwsq.mongodb.net/capstone_database?retryWrites=true&w=majority";


    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        //Our function to create a new listing will look something like the following:
        //create one document (think object in a collection)
        async function createEmployee(client, newEmployee){
            const result = await client.db("capstone_database").collection("userCollection").insertOne(newEmployee);
            console.log(`New listing created with the following id: ${result.insertedId}`);
        }

        //We can call this function by passing
        // a connected MongoClient as well as an object
        // that contains information about a listing.
        await createEmployee(client,
            {
                admin: "true",
                name: "Test Manager",
                email: "omarnorombaba@gmail.com"
            }
        );



    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here