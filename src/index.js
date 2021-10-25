const express = require('express');
const {router} = require('./router');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const PORT = 5000;

const app = express();
router(app);
app.use(helmet());


app.listen(PORT, error => {
    if(error) return console.log(error);
    console.log(`Server is listening on port ${PORT} `);
});

