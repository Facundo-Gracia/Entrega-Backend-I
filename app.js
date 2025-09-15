import express from 'express'; 
import { engine } from 'express-handlebars';
import path from 'path'; 
import { fileURLToPath } from 'url';

import homeRouter from './routes/home.router.js';
import uploadRouter from './routes/upload.router.js';

const __filename = fileURLPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Archivos static
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/', homeRouter);
app.use('/upload', uploadRouter);

// Error 404
app.use((req,res) => {
    res.status(404).render('404', { tittle: '404 - Página no encontrada.'});
})
const app = express();
const PORT = 800;

// ruta de prueba
app.get('/', (req,res) => {
    res.send("Hola")
})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
})