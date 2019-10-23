//Install express server
// File to let the app work in heroku
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/MartasWeb'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/MartasWeb/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);