import mongoose from "mongoose";

const MongoDB_URI = process.env.MONGO_DB_URI;

const connect = async () => {
  const connectionStatus = mongoose.connection.readyState;

  if (connectionStatus == 1) {
    console.log("Database is already connected");
    return;
  } else if (connectionStatus == 2) {
    console.log("Connecting the Database....");
    return;
  } else {
    try {
      mongoose.connect(MongoDB_URI!, {
        dbName: "next14restapi",
        bufferCommands: true,
      });
      console.log("connected");
    } catch (error: any) {
      console.log(error);
      throw new Error("Error: ", error);
    }
  }
};

export default connect;
