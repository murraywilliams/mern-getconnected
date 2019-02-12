if (process.env.NODE_ENV === 'production') {
  mondule.exports = require('./keys.prod');
} else {
  mondule.exports = require('./keys.dev');
}
