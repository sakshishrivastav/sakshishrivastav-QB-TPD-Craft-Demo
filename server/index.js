require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
const medalRoutes = require('./routes/medals');
app.use('/api', medalRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
