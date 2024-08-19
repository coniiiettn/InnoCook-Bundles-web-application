// /innocook-backend/server.js
// require('dotenv').config();
// const express = require('express');
// const connectDB = require('../config/db');
// const cors = require('cors');
// const users = require('../routes/userRoutes');
// const auth = require('../routes/authRoutes');
// const search = require('../routes/recipeRoutes');
// 
// const app = express();
// 
// 
// // Connect Database
// connectDB();
// 
// // Middleware
// app.use(cors());
// 
// // app.use(express.json({ extended: false }));
// app.use(express.json());
// 
// // Define Routes
// 
// app.get("/", (req, res) => res.send("Express on Vercel")); // testing used
// app.use('/auth', auth);
// app.use('/users', users);
// app.use('/recipes', search);
// 
// const PORT = process.env.PORT || 8080;
// 
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// // Example route
// app.get('/api/hello', (req, res) => {
// 	res.json({ message: 'Hello from the server!' });// testing used
//   });
//   
// module.exports = app; 

// /innocook-backend/server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');
const users = require('../routes/userRoutes');
const auth = require('../routes/authRoutes');
const search = require('../routes/recipeRoutes');

const app = express();

app.use(cors());

// Connect Database
connectDB();

// Middleware

// app.use(express.json({ extended: false }));
app.use(express.json());

// Define Routes

app.get("/", (req, res) => res.send("Express on Vercel")); // testing used
app.use('/auth', auth);
app.use('/users', users);
app.use('/recipes', search);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Example route
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from the server!' });// testing used
  });
  
module.exports = app; 
