const morgan = require('morgan');
const logger = require('./config/logger');

// Create a stream to write to winston
const stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

// Define morgan format
const morganFormat = ':method :url :status :res[content-length] - :response-time ms';

// Morgan middleware
const morganMiddleware = morgan(morganFormat, {
  stream: stream,
  // Skip logging for health checks
  skip: (req, res) => req.url === '/health',
});

module.exports = morganMiddleware;