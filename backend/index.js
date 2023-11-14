import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import criminalRoute from "./routes/data.js"




dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
 
 //MIDDLEWARE FOR ROUTES CONNECTION
app.use("/allCriminals",criminalRoute); 


app.get("/", (req, res) => {
   res.send("jaldi waha se hato");
})

app.listen(8000, () => {
    console.log("Server is runnig on port 8000!")
})