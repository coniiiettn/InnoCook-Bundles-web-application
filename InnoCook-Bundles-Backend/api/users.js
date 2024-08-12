// /InnoCook-Bundles-Backend/api/users.js

const express = require('express');
const {
    getUser,
    updateUser,
    deleteUser,
    addFavorite,
    getFavorites,
    deleteFavorite,
    getHistory
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const app = express();
app.use(express.json());

app.get('/me', authMiddleware, getUser);
app.put('/me', authMiddleware, updateUser);
app.delete('/me', authMiddleware, deleteUser);
app.get('/me/history', authMiddleware, getHistory);
app.post('/me/favorites', authMiddleware, addFavorite);
app.get('/me/favorites', authMiddleware, getFavorites);
app.delete('/me/favorites', authMiddleware, deleteFavorite);

module.exports = app;
