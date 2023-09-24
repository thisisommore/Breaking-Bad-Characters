import * as mongoose from "mongoose"

const uri = process.env.MONGO_DB_URI as string;

const start = async () => {
    await mongoose.connect(uri)
    console.log("Connected to db");
}

start()