const mongoose = require('mongoose');

exports.initializeDatabaseConnection = () => {
    const connection = process.env.MONGODB_CONNECTION;
    mongoose.connect(connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.log(err));
}
