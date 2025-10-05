import express from "express";
import cors from "cors";
import connectToDB from "./db/index.mjs";
import userRoutes from "./routes/userRoutes.mjs";

// Connecting MongoDB
connectToDB();
const app = express();
const port = 5000;

// ✅ Log all requests early
app.use((req, res, next) => {
  console.log("Request URL:", req.url, "method:", req.method);
  next();
});

// ✅ Proper CORS setup
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'https://www.cloudchaser.earth',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// ✅ Handle preflight OPTIONS request manually
app.options('*', cors());

app.use(express.json());
app.use('/api/auth', userRoutes);

// ✅ (Optional) Default route
app.get('/', (req, res) => {
  res.send('CloudChaser backend is running');
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
