require('dotenv').config()

module.exports = {
  DBCONNECTION: {
    adress: process.env.MONGODB_ADRESS
  },
  DEFAULT_SETTINGS: {
    prefix: "+",
    lang: "en",
    anonMode: true
  }
}