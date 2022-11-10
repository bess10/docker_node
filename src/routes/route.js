//Aquí pondremos rutas de proyecto
const {Router} = require('express');//requerimos el constructor de rutas en express
const router = Router();//lo convertimos en un objeto utilizable

router.get('/saludo', (req, res) => {
    res.json({saludo: "Buenas tardes"});
})

module.exports = router;//lo exportamos
