const request = require('supertest');
const expect = require('chai').expect;

describe('test inventory-catalogue', function () {
    let server;

    beforeEach(function () {
        server = require('../src/server.js');

    });

    afterEach(function () {
        server.close();
    });

    it('404 other urls', (done) => {
        request(server)
            .get('/api/v1/product/404NotFound')
            .expect(404, done);
    });

    it('return product with max price ', (done) => {
        request(server).get('/api/v1/product/price/max').expect(200).end((err, res) => {
            const expectedProduct = {
                id: 313,
                price: 998.52
            };
            const actualProduct = res.body.data[0][0];
            expect(actualProduct.id).to.equal(expectedProduct.id);
            expect(parseFloat(actualProduct.price)).to.equal(expectedProduct.price);
            done();
        });
    });
    it('return product with min price ', (done) => {
        request(server).get('/api/v1/product/price/min').expect(200).end((err, res) => {
            const expectedProduct = {
                id: 891,
                price: 101.62
            };
            const actualProduct = res.body.data[0][0];
            expect(actualProduct.id).to.equal(expectedProduct.id);
            expect(parseFloat(actualProduct.price)).to.equal(expectedProduct.price);
            done();
        });
    });

    it('return product with fantastic attribute true ', (done) => {
        request(server).get('/api/v1/product/attribute/fantastic').expect(200).end((err, res) => {
            const expectedProduct = {
                id: 1,
                fantasticattributeValue: true
            };
            const actualProduct = res.body.data[0][0];
            expect(actualProduct.id).to.equal(expectedProduct.id);
            expect(actualProduct.attribute.fantastic.value).to.true;
            done();
        });
    });

    it('return product with max rating ', (done) => {
        request(server).get('/api/v1/product/rating/max').expect(200).end((err, res) => {
            const expectedProduct = {
                id: 67,
                price: 982.84
            };
            const actualProduct = res.body.data[0][0];
            expect(actualProduct.id).to.equal(expectedProduct.id);
            expect(parseFloat(actualProduct.price)).to.equal(expectedProduct.price);
            done();
        });
    });
    it('return product with min rating ', (done) => {
        request(server).get('/api/v1/product/rating/min').expect(200).end((err, res) => {
            const expectedProduct = {
                id: 38,
                price: 708.57
            };
            const actualProduct = res.body.data[0][0];
            expect(actualProduct.id).to.equal(expectedProduct.id);
            expect(parseFloat(actualProduct.price)).to.equal(expectedProduct.price);
            done();
        });
    });

});