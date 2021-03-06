const personaRouter = require('express').Router();
const token = require('../middlewares/token');

module.exports = (wagner) => {
    const personaCtrl = wagner.invoke((Persona) =>
        require('../controllers/persona.controller')(Persona));
    //Definir endPoints
    //CRUD PERSONAS
    personaRouter.get("/getAll", (req, res) => {
        personaCtrl.getAll(req, res);
    });

    personaRouter.get("/get/:id", (req, res) => {
        personaCtrl.getById(req, res);
    });

    personaRouter.get("/getUserByRute/:id", (req, res) => {
        personaCtrl.getUserByRute(req, res);
    });

    personaRouter.delete("/del/:id", (req, res) => {
        personaCtrl.deletePersona(req, res);
    });

    personaRouter.put("/editDatos/:id", (req, res) => {
        personaCtrl.update(req, res);
    });

    personaRouter.put("/updateCursosMaestro/:id", (req, res) => {
        personaCtrl.updateCursosMaestro(req, res);
    });

    personaRouter.put("/editTipo/:id", (req, res) => {
        personaCtrl.updateTipo(req, res);
    });

    personaRouter.put("/editCredencial/:id", (req, res) => {
        personaCtrl.updateCredencial(req, res);
    });

    personaRouter.put("/updateAvance/:id", (req, res) => {
        personaCtrl.updateAvance(req, res);
    });

    personaRouter.put("/updateInsignia/:id", (req, res) => {
        personaCtrl.updateInsignia(req, res);
    });

    personaRouter.put("/updateDocs/:id", (req, res) => {
        personaCtrl.updateDocs(req, res);
    });

    personaRouter.put("/updateCert/:id", (req, res) => {
        personaCtrl.updateCert(req, res);
    });

    personaRouter.put("/updatePuntaje/:id", (req, res) => {
        personaCtrl.updatePuntaje(req, res);
    });

    personaRouter.put("/updateCodigos/:id", (req, res) => {
        personaCtrl.updateCodigos(req, res);
    });

    personaRouter.put("/updateNotificaciones/:id", (req, res) => {
        personaCtrl.updateNotificaciones(req, res);
    });

    personaRouter.put("/inscribirAlumno/:id", (req, res) => {
        personaCtrl.inscribirAlumno(req, res);
    });

    //AUTH
    personaRouter.get('/userInfo', token.checkJWT, (req, res) => {
        personaCtrl.info(req, res);
    });

    personaRouter.post('/signup', (req, res) => {
        personaCtrl.create(req, res);
    });

    personaRouter.post('/login', (req, res) => {
        personaCtrl.login(req, res);
    });


    return personaRouter;
}
