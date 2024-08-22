const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

mongoose
.connect(process.env.MONGODB_URL, {
    // useNewUrlParser: true, // Correction ici
    // useUnifiedTopology: true, // Correction ici
})
.then(() => console.log('Connected to Mongoose'))
.catch((err) => console.log(err));
