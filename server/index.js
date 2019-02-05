const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../pages`));

app.listen(3999, () => console.log(`Listening on PORT: 3999`));