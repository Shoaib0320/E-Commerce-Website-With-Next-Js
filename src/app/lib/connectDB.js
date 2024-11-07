

import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URI);
    console.info("Mongodb Connected");
  } catch (err) {
    console.log("err in connection=>", err);
  }
}

// export default dbConnect;


// // lib/dbConnect.js
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
