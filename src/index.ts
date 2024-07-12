import express from "express";
import { AppDataSource } from "./config/dataSource";
import userRouter from "./api/routes/userRoute"
import path from "path";

const app = express();
const port = 3000;

const api_url = `/api`

app.use(express.json());
app.use(`${api_url}/users`, userRouter);

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
.catch((error) => console.log(error));
