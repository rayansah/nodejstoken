import mysql from "mysql2/promise";

// INTENTIONAL (starting state of the exercise): the app connects as root/root.
// Least privilege (dedicated db user) is one of the fixes asked in the exercise.
const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'db_authentication',
  multipleStatements: true

};


export const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("Connected to the database");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};