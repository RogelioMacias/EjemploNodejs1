const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.js');

//configurar chai
chai.use(chaiHttp);
chai.should();

//results
//sayHelloResult = app.sayHello();
//addNumbersResult = app.addNumbers(5,3);

describe('Test de programas registrados', () => {
    describe('Get, Encuentra programa', () => {
        it('Debe regresar un json si encuentra', (done) => {
            const mtz = 'uno';
            const palabra = 'word';
            chai.request(app)
                .get('/api/programs/uno-access')//.get(`/${mtz}-${palabra}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    console.log(res);
                    done();
                });
        });
    });
    /*describe('Operaciones', () => {
        it('post', () => {

        });
        it('delete', () => {

        });
        it('put', () => {

        });
    });*/
});

/*
const app = require('../app');

//results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,3);

describe('App', () => {
    describe('sayHello()', () => {
        it('sayHello debería enviar Hola', () => {
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'Hello');
        });
        it('sayHello es una cadena', ()=> {
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });    
    });
    describe('addNumbers()', () => {
        it('addNumbers suma 2 valores', () => {
            //let result = app.addNumbers(5, 3);
            assert.isAbove(addNumbersResult, 5);
        });
        it('addNumbers retorna type number', () => {
            //let result = app.addNumbers(5, 3);
            assert.typeOf(addNumbersResult, 'number');
        });
    });
    
});*/
