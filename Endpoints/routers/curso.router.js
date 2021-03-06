const cursoRouter = require('express').Router();

module.exports = (wagner) => {
    const cursoCtrl = wagner.invoke((Curso) =>
        require('../controllers/curso.controller')(Curso));
    //Definir endPoints
    //CRUD CURSO
    cursoRouter.get("/getCursoInfo/:id", (req, res) => {
        cursoCtrl.getById(req, res);
    });

    cursoRouter.get("/getCursos", (req, res) => {
        cursoCtrl.getAll(req, res);
    });

    cursoRouter.get("/getCursosMaestro/:id", (req, res) => {
        cursoCtrl.getCursosMaestro(req, res);
    });

    cursoRouter.get("/getCursosSolicitudes", (req, res) => {
        cursoCtrl.getCursosSolicitudes(req, res);
    });

    cursoRouter.get("/getCursosAprobados", (req, res) => {
        cursoCtrl.getCursosAprobados(req, res);
    });

    cursoRouter.get("/getCursosRechazados", (req, res) => {
        cursoCtrl.getCursosRechazados(req, res);
    });

    cursoRouter.get("/getSubcategorias", (req, res) => {
        cursoCtrl.getSubcategorias(req, res);
    });

    cursoRouter.get("/getBusqueda/:busqueda", (req, res) => {
        cursoCtrl.getBusqueda(req, res);
    });

    cursoRouter.delete("/:id", (req, res) => {
        cursoCtrl.deleteCurso(req, res);
    });

    cursoRouter.put("/:id", (req, res) => {
        cursoCtrl.update(req, res);
    });

    cursoRouter.put("/updateEstado/:id", (req, res) => {
        cursoCtrl.updateEstado(req, res);
    });

    cursoRouter.put("/updateInsignias/:id", (req, res) => {
        cursoCtrl.updateInsignias(req, res);
    });

    cursoRouter.put("/updateReview/:id", (req, res) => {
        cursoCtrl.updateReview(req, res);
    });

    cursoRouter.put("/updateFotoVideo/:id", (req, res) => {
        cursoCtrl.updateFotoVideo(req, res);
    });
    cursoRouter.put("/agregarComentario/:id", (req, res) => {
        cursoCtrl.agregarComentario(req, res);
    });

    cursoRouter.put("/agregarReporte/:id", (req, res) => {
        cursoCtrl.agregarReporte(req, res);
    });

    cursoRouter.put("/updateTemario/:id", (req, res) => {
        cursoCtrl.updateTemario(req, res);
    });

    cursoRouter.put("/updateObjetivos/:id", (req, res) => {
        cursoCtrl.updateObjetivos(req, res);
    });

    cursoRouter.post("/nuevoCurso", (req, res) => {
        cursoCtrl.create(req, res);
    });

    cursoRouter.put("/inscribirAlumno/:id", (req, res) => {
        cursoCtrl.inscribirAlumno(req, res);
    });

    return cursoRouter;
}
