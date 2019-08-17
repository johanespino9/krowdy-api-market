const passport = require('passport')
const a = passport.authenticate('jwt', { session: false })

module.exports = a;