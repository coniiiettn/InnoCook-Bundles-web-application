// /innocook-backend/server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const users = require('./routes/userRoutes');
const auth = require('./routes/authRoutes');
const search = require('./routes/recipeRoutes');

const app = express();


// Connect Database
connectDB();

// Middleware
app.use(cors());
// const corsOptions = {
// 	origin: 'https://inno-cook-bundles-web-application-bans2om6n.vercel.app',
// 	methods: ['GET', 'POST', 'PUT', 'DELETE'],
// 	allowedHeaders: ['Content-Type', 'Authorization']
//   };
// 
// app.use(cors(corsOptions));
app.use(express.json({ extended: false }));
// app.use(express.json());

// Define Routes

// app.get("/", (req, res) => res.send("Express on Vercel")); // testing used
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/recipes', search);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// testing used
// Example route
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from the server!' });
  });
  
module.exports = app;
