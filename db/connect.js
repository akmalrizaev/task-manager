const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://akmal:1234@nodeexpressprojects.invcs8r.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })

}

module.exports = connectDB








