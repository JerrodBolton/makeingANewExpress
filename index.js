const express = require('express');

const app = express();
// the /.. is where the endpoint in on the code for the localhost. Which means that the http address is going to be...
// localhost:5001/...
app.get('/about', (req, res) => {
//  res stand for resort
// meaning in what your going to send back on the request side.

 res.send('<h1> Hello World </h1>')


})

const PORT = process.env.PORT || 5001

app.listen( PORT , () => console.log(`server started on port ${PORT}`));

/