# Contributing to Express Starter Kit

Thank you for your interest in contributing to this Express.js Starter Kit! This document provides guidelines for contributors.

## 🤝 How to Contribute

### 1. Fork the Repository

Click the "Fork" button at the top of the repository page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/express-starter-kit.git
cd express-starter-kit
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Or for a bug fix:
```bash
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes

- Follow the existing code style
- Add tests for new features
- Update documentation as needed

### 5. Run Tests and Quality Checks

```bash
# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### 6. Commit Your Changes

Use clear and descriptive commit messages:

```bash
git add .
git commit -m "feat: add user profile update functionality"
```

### 7. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 8. Create a Pull Request

- Go to your fork on GitHub
- Click "New Pull Request"
- Provide a clear title and description
- Link any relevant issues

## 📝 Code Style Guidelines

### JavaScript/Node.js

- Use **camelCase** for variables and functions
- Use **PascalCase** for classes and constructors
- Use **UPPER_SNAKE_CASE** for constants
- Use meaningful variable and function names
- Keep functions small and focused
- Add JSDoc comments for complex functions

### Example

```javascript
/**
 * Hashes a password using bcrypt
 * @param {string} password - The password to hash
 * @returns {Promise<string>} The hashed password
 */
const hashPassword = async (password) => {
  const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
  return await bcrypt.hash(password, saltRounds);
};
```

## 🧪 Testing Guidelines

### Write Tests

- Write tests for all new features
- Test both success and error cases
- Use descriptive test names
- Mock external dependencies

### Test Structure

```javascript
describe('Feature Name', () => {
  describe('Specific Functionality', () => {
    it('should do something when condition is met', async () => {
      // Arrange
      const input = 'test data';

      // Act
      const result = await someFunction(input);

      // Assert
      expect(result).toBeDefined();
      expect(result.success).toBe(true);
    });
  });
});
```

## 🏗️ Project Structure

When adding new features, follow the existing structure:

- **Controllers**: Business logic for routes
- **Middleware**: Request processing middleware
- **Routes**: API route definitions
- **Services**: Reusable business logic
- **Utils**: Helper functions
- **Config**: Configuration files

## 📋 Development Workflow

### Before Starting

1. Check existing issues and pull requests
2. Discuss major changes in an issue first
3. Ensure your Node.js version meets requirements

### During Development

1. Run tests frequently
2. Keep commits small and focused
3. Write clear commit messages
4. Update documentation

### Before Submitting

1. All tests must pass
2. Code must pass linting
3. Documentation must be updated
4. No sensitive data in code

## 🐛 Bug Reports

When reporting bugs:

1. Use the issue template
2. Provide detailed reproduction steps
3. Include environment details
4. Add error logs if available

## 💡 Feature Requests

When requesting features:

1. Check if it already exists
2. Provide use case and benefits
3. Consider implementation complexity
4. Be open to discussion

## 🔍 Code Review Process

### Reviewers Should Check

- Code follows project style guidelines
- Tests are comprehensive
- Documentation is updated
- Security considerations are addressed
- Performance implications are considered

### Authors Should

- Respond to review comments promptly
- Make requested changes
- Explain complex code decisions
- Update tests as needed

## 📦 Dependencies

### Adding Dependencies

1. Consider if it's necessary
2. Choose well-maintained packages
3. Use specific versions (not latest)
4. Update documentation

### Security

- Check for known vulnerabilities
- Keep dependencies updated
- Use `npm audit` regularly

## 🌐 Environment Variables

When adding new environment variables:

1. Add to `.env.example`
2. Document purpose and default values
3. Use validation where appropriate
4. Consider security implications

## 📚 Documentation

- Update README.md for major changes
- Add API documentation for new endpoints
- Include code examples
- Document configuration options

## 🚀 Release Process

Releases are managed by project maintainers:

1. Update version in package.json
2. Update CHANGELOG.md
3. Create git tag
4. Publish to npm (if applicable)

## 📞 Getting Help

- Create an issue for bugs or questions
- Check existing documentation
- Join community discussions
- Be patient and respectful

## 🎯 Priorities

1. **Security** - Never compromise on security
2. **Stability** - Ensure existing functionality works
3. **Performance** - Consider performance impact
4. **Documentation** - Keep docs up to date
5. **Testing** - Maintain high test coverage

Thank you for contributing! 🎉