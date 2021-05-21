const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');

const programas = require('../ejemplo.json');

/*router.get('/', (req, res) => {
    res.json(programas);
});*/

router.get('/:mtz-:palabra', (req, res) => {
    const { mtz, palabra } = req.params;
    
    var data = {};
    if(palabra) {
        _.each(programas, (progra, i) => {
            if(progra.program == palabra) {
                data = {
                    "id": progra.id,
                    "program": progra.program,
                    "year": progra.year
                };
            }
        });
        res.status(200).json(data);
    } else {
        res.status(500).json({error: 'hubo un problema'});
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    const {program, year} = req.body;
    if(program && year){
        //res.json('guardado');
        const id = programas.length + 1;
        const nuevoPrograma = {...req.body,id};
        console.log(nuevoPrograma);
        
        programas.push(nuevoPrograma);

        res.json(programas);
    } else {
        res.status(500).json({error:'mal funcionamiento.'});
    }
    
});

router.delete('/:id', (req,res) => {
    //console.log(req.params);
    const { id } = req.params;
    _.each(programas, (progra, i) => {
        if(progra.id == id) {
            programas.splice(i, 1);
        }
        
    });
    res.json(programas);
});

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const {program, year} = req.body;
    if(program && year) {
        _.each(programas, (progra, i) => {
            if(progra.id == id) {
                progra.program = program;
                progra.year = year;
            }
        });
        res.json(programas);
    } else {
        res.status(500).json({error: 'hubo un problema'});
    }
});

module.exports = router;