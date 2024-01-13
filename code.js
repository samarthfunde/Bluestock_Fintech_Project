const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB (replace with your MongoDB connection string)
mongoose.connect('mongodb+srv://samarthf28:samarth@cluster0.8zsfaym.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a mongoose schema for user information
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    userId: {
        type: String,
        required: true,
    },
    Data_1: {
        type: Date,
        required: [true, "Date is required"],
    },
    position: {
        type: String,
        required: [true, "Position is required"],
    },
    status: {
        type: String,
        default: 'invalid',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/verify', async (req, res) => {
    try {
        const userId = req.body.userInfo.trim();
        console.log('Received User ID:', userId);

        // Use the correct field name in the query
        const user = await User.findOne({ userId: userId });

        console.log('User from Database:', user);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "User details retrieved successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in getting user details",
            error: error.message,
        });
    }
});
