// Importaciones
import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

// Variables
const server = new Server();

//Middlewares
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );
server.app.use( cors( { origin: true, credentials: true } ) );

//Inicio servidor
server.app.use('/', router );
server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});