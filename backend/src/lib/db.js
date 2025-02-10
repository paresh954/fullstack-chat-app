import mongoos from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoos.connect(process.env.MONGODB_URL);
    console.log("mongoDB connectend: ", conn.connection.host);
  } catch (error) {
    console.log("mongoDB connection error", error);
  }
};
