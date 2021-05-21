//routes
const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "prueba"});
});

router.get('/test', (req, res) => {
    const data = {
        "nombre": "roge",
        "edad": "30"
    };
    res.json(data);
});


module.exports = router;