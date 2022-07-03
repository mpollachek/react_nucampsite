export const validateUserLoginForm = (values) => {
  const { username, password } = values;
  const errors = {};

if (!username) {
  errors.username = 'Required';
} else if (username.length < 6 || username.length > 15) {
  errors.username = 'username must be between 6 and 15 characters';
}

if (!password) {
  errors.password = 'Required';
} else if (password.length < 8) {
  errors.password = 'password must be at least 8 characters';
}

return errors;

};