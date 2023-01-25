import mongoose from "mongoose";


const dataBaseConfig = async () => {
  mongoose.connect('mongodb+srv://priyansh:123456p%401P@cluster0.ejiaabh.mongodb.net/test' as string);
  mongoose.connection.on("error", (error) => {
    console.log("error", error);
    throw new Error(`unable to connect to database`);
  });
};

dataBaseConfig()
