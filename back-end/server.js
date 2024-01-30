const express = require('express')
const cors = require('cors')

const AcaoSustentavelController = require('./controllers/controllerAcaoSustentavel')
const usuarioController = require('./controllers/controllerUsuario')
const EmpresaController = require('./controllers/controllerEmpresa')
const OfertaTrocaController = require('./controllers/controllerOfertaTroca')
const RoupaController = require('./controllers/controllerRoupa')

const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('./fotos'))


// Rotas para ação sustentável
app.get('/api/acaosustentavel', AcaoSustentavelController.index);
app.get('/api/acaosustentavel/:id', AcaoSustentavelController.show);
app.post('/api/acaosustentavel', AcaoSustentavelController.store);
app.put('/api/acaosustentavel/:id', AcaoSustentavelController.update);
app.delete('/api/acaosustentavel/:id', AcaoSustentavelController.destroy);

// Rotas para usuario
app.get('/api/usuario', usuarioController.index);
app.get('/api/usuario/:id', usuarioController.show);
app.post('/api/usuario', usuarioController.store);
app.put('/api/usuario/:id', usuarioController.update);
app.delete('/api/usuario/:id', usuarioController.destroy);
app.post('/api/login', usuarioController.login);

// Rotas para empresa
app.get('/api/empresa', EmpresaController.index);
app.get('/api/empresa/:id', EmpresaController.show);
app.post('/api/empresa', EmpresaController.store);
app.put('/api/empresa/:id', EmpresaController.update);
app.delete('/api/empresa/:id', EmpresaController.destroy);

// Rotas para oferta troca
app.get('/api/ofertaTroca', OfertaTrocaController.index);
app.get('/api/ofertaTroca/:id', OfertaTrocaController.show);
app.post('/api/ofertaTroca', OfertaTrocaController.store);
app.put('/api/ofertaTroca/:id', OfertaTrocaController.update);
app.delete('/api/ofertaTroca/:id', OfertaTrocaController.destroy);

// Rotas para roupa
app.get('/api/roupa', RoupaController.index);
app.get('/api/roupa/:id', RoupaController.show);
app.post('/api/roupa', RoupaController.store);
app.put('/api/roupa/:id', RoupaController.update);
app.delete('/api/roupa/:id', RoupaController.destroy);

app.listen(porta, () => {
    console.log(`Servidor aberto na porta: ${porta}`)
})