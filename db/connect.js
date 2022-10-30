const mongoose = require('mongoose')


const connectionString = 'mongodb+srv://akmal:1234@nodeexpressprojects.invcs8r.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
.then(() => console.log('Connected to the DB...') )
.catch((err) => console.log(err))


