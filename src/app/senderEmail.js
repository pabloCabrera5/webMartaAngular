const nodemailer = require('nodemailer');
//var exports = module.exports;
let transporter;

process.argv.forEach((val) => {
    transporter = nodemailer.createTransport({
        service: process.argv[2],
        auth: {
            user: process.argv[3],
            pass: process.argv[4]
        }
    });
});


let mailOptions = {
    from: 'sender@email.com', // sender address
    to: 'marta.perez.95@gmail.com', // list of receivers
    subject: 'Te han enviado un mensaje desde tu Web', // Subject line
    html: '<p></p>'// plain text body,
};

/*exports.sendEmail(mailOptions) = function (mailOptions) {
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}*/

const http = require('http');
const express = require('express');

const app = express();
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:4200/contacto',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

/*http.createServer( function ( request, respuesta) {
    console.log(request.body)
	respuesta.writeHead( 200,  {'Content-type': 'text/plain'});
	respuesta.write("hiipopopii");
	respuesta.end();
}).listen(3000, 'localhost')

console.log('serving...')*/

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
// for let chrome sending requests http
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/', ((req, res) => {
    let mensaje = `${req.body.name} te ha enviado el siguiente mensaje 
        ${req.body.message}, su email es ${req.body.email}, 
        su telefono es ${req.body.telefone} con asunto de ${req.body.asunto}`;
    mailOptions.html = mensaje;
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.send({
                answer: 'ERROR'
            })
        }
        else {
            res.send({
                answer: 'ENVIADO'
            })
        }
    });
}));

app.get('/', ((req, res) => {
    res.send({
        answer: 'GET'
    })
}));

app.listen(8000, () => {
    console.log('Server Started')
});