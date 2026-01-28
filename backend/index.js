import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import itemRoutes from "./src/routes/itemsRoutes.js";
import { auctionSocket } from "./src/sockets/auction.js";

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/items", itemRoutes);

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => auctionSocket(io, socket));

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
