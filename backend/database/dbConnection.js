// dbConnection.js
import mongoose from "mongoose";


const mongoURI = 'mongodb://localhost:27017/ASTRAL_TECH_SCHOOL';


    mongoose.connect(process.env.MONGO_URI, {
        dbName: "ASTRAL_TECH_SCHOOL",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    
const mongodb = "mongodb+srv://Astral:22uG3@cluster0.chumm7i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });
    
    db.once('open', () => {
        console.log('Connected to MongoDB!');
    });
    
    module.exports = db;



//ASTRAL_TECH_SCHOOL











