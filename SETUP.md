# Setup Guide

Follow these steps to get your Express.js Starter Kit running:

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
```

Edit `.env` with your database credentials:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/express_starter?schema=public"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 3. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Create and run migrations
npm run db:migrate
```

### 4. Start Development Server
```bash
npm run dev
```

## 📊 Verification

### Check Application Health
```bash
curl http://localhost:3000/health
```

### Test API Endpoints

1. **Register a user:**
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
```

2. **Login:**
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

3. **Get profile** (use token from login response):
```bash
curl -X GET http://localhost:3000/api/v1/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🧪 Run Tests
```bash
npm test
```

## 🔧 Code Quality
```bash
# Check for linting issues
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 🗄️ Database Management
```bash
# Open Prisma Studio
npm run db:studio

# Reset database
npx prisma migrate reset

# View database schema
cat prisma/schema.prisma
```

## 📝 Next Steps

1. **Change the JWT secret** in your `.env` file
2. **Configure CORS origins** for production
3. **Set up your PostgreSQL database**
4. **Review the API documentation** at `API_DOCS.md`
5. **Customize the User model** in `prisma/schema.prisma`

## 🐛 Troubleshooting

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9
```

### Database Connection Issues
1. Verify PostgreSQL is running
2. Check DATABASE_URL format
3. Ensure database exists

### Permission Issues
```bash
chmod +x scripts/setup.sh  # If setup script exists
```

### Node Version Issues
```bash
# Check Node version
node --version

# Install correct Node version using nvm
nvm install 22.20.0
nvm use 22.20.0
```

## 📚 Learn More

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Jest Testing](https://jestjs.io/docs/getting-started)
- [ESLint Guide](https://eslint.org/docs/latest/user-guide/getting-started)
- [Prettier Documentation](https://prettier.io/docs/en/)

## 🎯 Common Development Tasks

### Adding a New Route
1. Create controller in `src/controllers/`
2. Add route in `src/routes/`
3. Import route in `src/app.js`
4. Write tests in `tests/`

### Adding a New Model
1. Update `prisma/schema.prisma`
2. Run `npm run db:migrate`
3. Update controllers and services
4. Add validation schemas
5. Write tests

### Adding Environment Variables
1. Add to `.env.example`
2. Use in code with `process.env.VAR_NAME`
3. Update documentation

Happy coding! 🚀