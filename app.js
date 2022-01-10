const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());

// USER Route
app.use('/users', userRoute);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
});

app.listen(8001, () => console.log('server running'));
