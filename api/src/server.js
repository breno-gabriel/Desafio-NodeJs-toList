require('dotenv').config({path: 'variables.env'});

const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});