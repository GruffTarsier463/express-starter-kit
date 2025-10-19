# API Documentation

## Base URL

```
http://localhost:3000/api/v1
```

## Authentication

The API uses JWT (JSON Web Token) authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### Register User

**POST** `/auth/register`

Registers a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe" (optional)
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "cuid123",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Errors:**
- `400` - Validation error or duplicate email
- `500` - Internal server error

#### Login User

**POST** `/auth/login`

Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "cuid123",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Errors:**
- `401` - Invalid credentials
- `500` - Internal server error

#### Get Profile

**GET** `/auth/profile`

Gets the current user's profile. Requires authentication.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "cuid123",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
  }
}
```

**Errors:**
- `401` - No token provided or invalid token
- `404` - User not found
- `500` - Internal server error

### Users

#### Get All Users

**GET** `/users`

Retrieves a paginated list of all users.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term for email or name

**Response (200):**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "cuid123",
        "email": "user@example.com",
        "name": "John Doe",
        "createdAt": "2025-01-01T00:00:00.000Z",
        "updatedAt": "2025-01-01T00:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "pages": 1
    }
  }
}
```

#### Get User by ID

**GET** `/users/:id`

Retrieves a specific user by their ID.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "cuid123",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    }
  }
}
```

**Errors:**
- `404` - User not found
- `500` - Internal server error

#### Update Profile

**PUT** `/users/profile`

Updates the current user's profile. Requires authentication.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Jane Doe"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": "cuid123",
      "email": "user@example.com",
      "name": "Jane Doe",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T01:00:00.000Z"
    }
  }
}
```

**Errors:**
- `401` - No token provided or invalid token
- `500` - Internal server error

#### Delete Account

**DELETE** `/users/account`

Deletes the current user's account. Requires authentication.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Account deleted successfully"
}
```

**Errors:**
- `401` - No token provided or invalid token
- `500` - Internal server error

### Utility

#### Health Check

**GET** `/health`

Checks if the server is running.

**Response (200):**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2025-01-01T00:00:00.000Z",
  "environment": "development"
}
```

#### Welcome

**GET** `/`

Returns a welcome message with API information.

**Response (200):**
```json
{
  "success": true,
  "message": "Welcome to Express Starter Kit API",
  "version": "1.0.0",
  "documentation": "/api/v1/docs"
}
```

## Error Format

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message" (optional, for validation errors),
  "stack": "Error stack trace" (optional, in development mode)
}
```

## Rate Limiting

- General endpoints: 100 requests per 15 minutes per IP
- Authentication endpoints: 5 requests per 15 minutes per IP

## CORS

Cross-Origin Resource Sharing is configured. In development, all origins are allowed. In production, configure `ALLOWED_ORIGINS` environment variable.

## Security Features

- Input validation using Joi
- SQL injection prevention via Prisma ORM
- XSS protection via Helmet
- Rate limiting to prevent abuse
- Secure password hashing with bcrypt