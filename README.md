# Express.js Starter Kit

A production-ready Express.js starter kit with authentication, database, security, testing, and code quality tools built-in.

## 🚀 Features

- **Express.js 5.1.0** - Modern web framework
- **Authentication** - JWT-based authentication with bcrypt password hashing
- **Database** - PostgreSQL with Prisma ORM
- **Security** - Helmet, CORS, rate limiting, input sanitization
- **Validation** - Joi input validation
- **Logging** - Winston with Morgan for HTTP requests
- **Testing** - Jest with Supertest
- **Code Quality** - ESLint and Prettier
- **Development** - Nodemon for auto-restart

## 📋 Requirements

- Node.js 22.20.0 or higher
- PostgreSQL 18
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd express-starter-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your configuration:
   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/express_starter?schema=public"

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=7d

   # Security
   BCRYPT_ROUNDS=12

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100

   # Logging
   LOG_LEVEL=info
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate

   # Run database migrations
   npm run db:migrate
   ```

5. **Start the application**
   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

## 📁 Project Structure

```
express-starter-kit/
├── src/
│   ├── config/
│   │   ├── database.js      # Database configuration
│   │   └── logger.js        # Winston logger configuration
│   ├── controllers/
│   │   ├── authController.js # Authentication logic
│   │   └── userController.js # User management logic
│   ├── middleware/
│   │   ├── auth.js          # Authentication middleware
│   │   └── security.js      # Security middleware (CORS, rate limiting, etc.)
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── users.js         # User management routes
│   ├── utils/
│   │   ├── auth.js          # Authentication utilities
│   │   └── validation.js    # Joi validation schemas
│   ├── app.js               # Main Express application
│   └── morganMiddleware.js  # Morgan logging middleware
├── tests/
│   ├── auth.test.js         # Authentication tests
│   └── setup.js             # Test setup
├── prisma/
│   └── schema.prisma        # Prisma database schema
├── logs/                    # Application logs
├── .env.example             # Environment variables template
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── jest.config.js          # Jest test configuration
└── package.json
```

## 🔐 API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/profile` - Get current user profile (protected)

### Users

- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `PUT /api/v1/users/profile` - Update user profile (protected)
- `DELETE /api/v1/users/account` - Delete user account (protected)

### Utility

- `GET /` - Welcome message
- `GET /health` - Health check endpoint

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Database operations
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
```

## 📝 Code Quality

This project includes:

- **ESLint** - JavaScript linting with Node.js best practices
- **Prettier** - Code formatting for consistent style
- **Jest** - Testing framework with coverage reporting

All code is automatically linted and formatted to maintain consistency.

## 🔒 Security Features

- **Helmet.js** - Sets security-related HTTP headers
- **CORS** - Cross-Origin Resource Sharing configuration
- **Rate Limiting** - Prevents abuse with configurable limits
- **Input Sanitization** - Prevents NoSQL injection attacks
- **Password Hashing** - Secure bcrypt password hashing
- **JWT Authentication** - Secure token-based authentication
- **Environment Variables** - Secure configuration management

## 📊 Logging

- **Winston** - Structured logging with multiple levels
- **Morgan** - HTTP request logging
- **File Rotation** - Automatic log file rotation
- **Different Environments** - Separate logging for development/production

## 🗄️ Database

Uses **PostgreSQL** with **Prisma ORM**:

- Type-safe database access
- Automatic migrations
- Database studio (via Prisma Studio)
- Query logging
- Connection pooling

## 🚀 Deployment

### Environment Setup

1. Set production environment variables
2. Build the application (if needed)
3. Run database migrations
4. Start the server

### Docker Support

You can easily containerize this application:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run db:generate
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include error messages and environment details

## 🔮 Future Enhancements

- Email verification
- Password reset functionality
- Role-based access control
- API documentation with Swagger
- Redis caching
- File upload handling
- GraphQL support
- Microservices architecture