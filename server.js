import express  from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);


// Error Handler
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
