import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "laxmi103",
    database: "criminaldb",
});




