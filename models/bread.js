// REQUIRE MONGOOSE
const mongoose = require('mongoose')

// CREATING SHORTHAND FOR THE SCHEMA CONSTRUCTOR 
const { Schema } = mongoose 

const breadSchema = new Schema ({
  name: {type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' }
})

const Bread = mongoose.model('Bread', breadSchema)

// MODEL AND EXPORT
module.exports = Bread