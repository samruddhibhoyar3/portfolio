const mongoose = require('mongoose')
const DB = process.env.DATABASE
try {
  mongoose.connect(DB, { useNewUrlParser: true, useUnfiedTopology: true }, () =>
    console.log('conection successful ')
  )
} catch (error) {
  console.log(' no connection ')
}
