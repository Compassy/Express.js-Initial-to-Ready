const core = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SS_SECRET = process.env.SECRET_KEY || 'my-secret';

app.use(core());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({name: 'my-custom-session-id',secret: SS_SECRET, resave : true, saveUninitialized: true, cookie: { maxAge: null, secure: false, httpOnly: true, sameSite: 'lax' }}));

app.use('/api', router);
app.use((req, res) => {
    res.status(404).send({ error: 'Not found' });
});

app.listen(PORT, () => {
    console.log(`Server running at <http://localhost:${PORT}>`);
});