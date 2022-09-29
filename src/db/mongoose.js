const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlparser: true,
    useCreateIndex: true,
    useFindAndModify: false
})