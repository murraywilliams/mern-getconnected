const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Check if data.name is empty adn if not convert to a string
  // to check below using the Validator
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.passwordConf = !isEmpty(data.passwordConf) ? data.passwordConf : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password should be between 6 and 30 characters';
  }
  if (Validator.isEmpty(data.passwordConf)) {
    errors.passwordConf = 'Password field is required';
  }
  if (!Validator.equals(data.password, data.passwordConf)) {
    errors.passwordConf = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
