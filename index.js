const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({path: './config/config.env'});

// Initialize the app
const app = express();

//Initializing host and port number
//const Port = 3000;
const host = 'localhost';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the expense schema
const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
});

// Define the expense model
const Expense = mongoose.model('Expense', expenseSchema);

// Define the routes
app.get('/expenses', async (req, res, next) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/expenses', async (req, res, next) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/expenses/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id);
    if (!expense) throw new Error('Expense not found');
    await expense.remove();
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
