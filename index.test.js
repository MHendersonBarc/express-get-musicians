// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing musicians endpoint", async () => {
        // Sends request to `musicians` endpoint
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);

        expect(response.statusCode).toBe(200)
        expect(responseData[1].name).toBe(`Drake`)
    })
    
    test("Testing musicians endpoint with id", async () => {
        // Sends request to `musicians` endpoint
        const response = await request(app).get("/musicians/1");
        const response2 = await request(app).get("/musicians/2");
        const response3 = await request(app).get("/musicians/3");
        const responseData = JSON.parse(response.text);
        const responseData2 = JSON.parse(response2.text);
        const responseData3 = JSON.parse(response3.text);

        expect(response.statusCode).toBe(200);
        expect(response2.statusCode).toBe(200);
        expect(response3.statusCode).toBe(200);
        expect(responseData.name).toBe(`Mick Jagger`);
        expect(responseData2.instrument).toBe(`Voice`);
        expect(responseData3.id).toBe(3);
    })
})