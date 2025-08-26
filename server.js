const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (your index.html)
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post("/submit", (req, res) => {
  console.log("Form Data:", req.body);
  res.send("Form submitted successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
