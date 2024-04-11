import express from "express";
import cors from 'cors';
import axios from "axios";

const PORT = process.env.PORT || 3003;
const app = express();
app.use(cors());

app.listen(PORT, async () => {
    console.log(`Listening to http://localhost:${PORT}`);
    setInterval(async () => {
        await requestServer();
    }, 1800000);
});

async function requestServer() {
    await axios.get("https://cresca-conosco-staging.onrender.com/gado/Canja")
}