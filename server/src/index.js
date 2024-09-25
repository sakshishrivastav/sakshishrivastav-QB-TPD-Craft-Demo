import cors from 'cors';
import 'dotenv/config';
import express, { json } from 'express';

import medalRoutes from './routes/medals.js';

const app = express();
const PORT = process.env.PORT || 8000;
app.use(json());
app.use(cors());

app.use('/api', medalRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

export default app;
