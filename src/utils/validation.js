const Joi = require('joi');

// Common validation schemas
const schemas = {
  // User validation schemas
  registerUser: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'any.required': 'Password is required',
    }),
    name: Joi.string().min(2).max(50).optional().messages({
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 50 characters',
    }),
  }),

  loginUser: Joi.object({
    email: Joi.string().email().required().messages({
      'string.email': 'Please provide a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Password is required',
    }),
  }),

  // Common ID validation
  id: Joi.object({
    id: Joi.string().cuid().required().messages({
      'string.cuid': 'Invalid ID format',
      'any.required': 'ID is required',
    }),
  }),
};

// Validation middleware factory
const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    const data = req[source];
    const { error, value } = schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errorMessage = error.details
        .map(detail => detail.message)
        .join(', ');
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        error: errorMessage,
      });
    }

    // Replace the data with validated and sanitized data
    req[source] = value;
    next();
  };
};

module.exports = {
  schemas,
  validate,
};