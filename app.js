const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/UserRoutes');
const assetsPath = path.join(__dirname, 'public');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});